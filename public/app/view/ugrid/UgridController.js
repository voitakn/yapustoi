Ext.define('Yap.view.ugrid.UgridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ugrid',
    requires: [
        'Yap.model.Ugrid'
    ],
    edit_form: false,
    list_ugrid: false,
    onRemoveClick: function(grid, index) {
        grid.getStore().removeAt(index);
    },
    onAddClick: function(elm) {
        this.createDialog(null);
    },
    onEditClick: function(grid, index) {
        var viewModel = this.getViewModel();
        var record = grid.getStore().getAt(index);
        viewModel.set('id', record.get('id'));
        viewModel.set('record', record);
        this.createDialog(record);
    },
    onAddBtnClick: function(btn){
        var viewModel = this.edit_form.getViewModel(),
            id = viewModel.get('id'),
            record = viewModel.get('record'),
            store = this.list_ugrid.getStore();
        if(id > 0) {
            store.commitChanges();
        } else {
            var last_id = store.getAt(0).get('id');
            record.id = last_id+1;
            store.add(record);
            store.commitChanges();
        }
        this.edit_form.destroy();
    },
    createDialog: function(record) {
        var view = this.getView();
        var self = this;
        this.list_ugrid = view;
        this.edit_form = Ext.create({
            xtype: 'ugrid_edit',
            viewModel: {
                data: {
                    title: record ? 'Изменение записи - ' + record.get('id') : 'Новая запись',
                    id: record ? record.id : 0,
                    record: record ? record : {}
                }
            },
            session: true
        });
        view.add(this.edit_form);
        self.edit_form.show();
    },
    onEditClose: function(wind) {
        this.list_ugrid.getStore().rejectChanges();
        var self = this;
    }

});

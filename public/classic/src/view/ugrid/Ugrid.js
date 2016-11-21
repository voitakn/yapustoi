Ext.define('Yap.view.ugrid.Ugrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'ugrid',
    reference: 'ref_ugrid',
    requires: [
        'Yap.view.ugrid.UgridController',
        'Yap.view.ugrid.UgridModel',
        'Yap.store.Ugrids'
    ],
    controller: 'ugrid',
    viewModel: 'ugrid',
    header: {
        layout: 'column',
        title: {
            text: 'Пользователи',
            margin: '0 25 0 0'
        },
        itemPosition: 1,
        items: [
            {
                xtype: 'toolbar',
                ui: 'navigation',
                items: [
                    {text: 'Добавить', handler: 'onAddClick'}
                ]
            }
        ]
    },
    store: {
        type: 'ugrids'
    },
    columns: [
        { header: 'ID',  dataIndex: 'id', sortable: false},
        { header: 'Текст', dataIndex: 'name', flex: 1, sortable: false},
        { header: 'Телефон', dataIndex: 'phone', sortable: false},
        { header: 'Дата', dataIndex: 'date_create', xtype: 'datecolumn', format: 'd.m.Y', sortable: false},
        {
            xtype: 'actioncolumn',
            width: 60,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'x-fa fa-pencil',
                tooltip: 'Редактировать запись',
                handler: 'onEditClick'
            },{
                iconCls: 'x-fa fa-trash',
                tooltip: 'Удалить запись',
                handler: 'onRemoveClick'
            }]
        }
    ]
});
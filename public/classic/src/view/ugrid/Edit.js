Ext.define('Yap.view.ugrid.Edit',{
    extend: 'Ext.window.Window',
    xtype: 'ugrid_edit',
    requires: [
        'Ext.form.Panel',
    ],
    bodyPadding: 0,
    autoShow: false,
    autoDestroy: true,
    bind: {
        title: '{title}'
    },
    listeners: {
        beforeclose: 'onEditClose'
    },
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    width: 400,
    items: {
        xtype: 'form',
        bodyPadding: 10,
        reference: 'ugrid_form',
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [{
            xtype: 'datefield',
            format: 'd.m.Y',
            name: 'date_create',
            fieldLabel: 'Дата',
            allowBlank: false,
            bind: '{record.date_create}'
        }, {
            xtype: 'numberfield',
            name: 'phone',
            fieldLabel: 'Номер телефона',
            maxLength: 10,
            minLength: 10,
            allowBlank: false,
            bind: '{record.phone}'
        }, {
            xtype: 'textareafield',
            name: 'name',
            fieldLabel: 'Текст',
            minLength: 3,
            allowBlank: false,
            bind: '{record.name}'
        }],
        buttons: [{
            text: 'Сохранить',
            formBind: true,
            listeners: {
                click: 'onAddBtnClick'
            }
        }]
    }
});

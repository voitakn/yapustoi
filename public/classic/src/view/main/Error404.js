Ext.define('Yap.view.main.Error404', {
    extend: 'Ext.panel.Panel',
    xtype: 'error404',
    requires: [
        'Yap.view.main.MainController'
    ],
    controller: 'main',
    layout: 'center',
    items: [
        {
            xtype: 'panel',
            title: 'ERROR 404',
            html: 'Error: 404! Страница не найдена!',
            width: 300,
            height: 200,
            frame: true,
            bodyPadding: '10 20'
        }
    ]
});
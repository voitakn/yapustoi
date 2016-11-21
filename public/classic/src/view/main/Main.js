Ext.define('Yap.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    reference: 'ref_main',
    requires: [
        'Ext.plugin.Viewport',
        'Yap.view.main.MainController',
        'Yap.view.main.MainModel'
    ],
    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    bodyPadding: 20,
    header: {
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        title: {
            text: 'Yap',
            margin: '0 25 0 0'
        },
        itemPosition: 1,
        items: [
            {
                xtype: 'toolbar',
                hidden: true,
                ui: 'navigation',
                items: [
                    {text: 'Старт', href: '/#home/', hrefTarget: '_self'},
                    '-',
                    {text: 'Пользователи', href: '/#ugrid/', hrefTarget: '_self'},
                    '-',
                    {text: 'Дерево', href: '/#utree/', hrefTarget: '_self'},

                    '->',
                    {text: 'Выход', href: '/#logout/', hrefTarget: '_self'}
                ]

            }
        ]
    },
    layout: 'fit',
});

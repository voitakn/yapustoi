Ext.define('Yap.view.main.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'Yap.view.main.MainController',
        'Yap.view.main.MainModel',
        'Ext.form.Panel'
    ],
    controller: 'main',
    viewModel: 'main',
    bodyPadding: 0,
    title: 'Авторизация',
    closable: false,
    autoShow: true,
    items: {
        xtype: 'form',
        bodyPadding: 10,
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'login',
            fieldLabel: 'Логин',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'passw',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false
        }],
        buttons: [{
            text: 'Войти',
            formBind: true,
            listeners: {
                click: 'onLoginBtn'
            }
        }]
    }
});

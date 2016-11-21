Ext.define('Yap.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onLoginBtn: function(button) {
        var form = button.up('form'),
            values = form.getValues();
        var test = Yap.app.test;
        if(test.login == values.login && test.passw == values.passw) {
            Yap.app.user.login = values.login;
            localStorage.setItem("user.login", values.login);
            if(Yap.app.previous) {
                this.redirectTo(Yap.app.previous);
            } else {
                this.redirectTo('home/');
            }
        }
    }
});

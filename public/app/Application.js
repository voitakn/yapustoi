Ext.define('Yap.Application', {
    extend: 'Ext.app.Application',
    user: {},
    name: 'Yap',
    defaultToken : 'home/',
    mainPanel: false,
    previous: false,
    test: {
        login: 'admin',
        passw: '12345'
    },
    routes : {
        '.*/:id' : {
            action: 'showModule'
        },
        '.*/' : {
            action: 'showModule'
        }
    },
    launch: function () {
        this.mainPanel = Ext.create({xtype: 'app-main'});
    },
    showModule: function(id) {
        var hash = Ext.util.History.getHash();
        if(hash.indexOf('login')>-1 || hash.indexOf('logout')>-1) {
            this.renderLogin();
            return;
        }
        if(localStorage.getItem('user.login')) {
            Yap.app.user.login = localStorage.getItem('user.login');
            this.renderAll();
            var hsplit_slash = hash.split('/'),
                hsplit = hsplit_slash[0].split('?'),
                module = hsplit[0],
                mclass = module.charAt(0).toUpperCase() + module.substr(1);
            var moduleObj = Ext.create('Yap.view.main.Error404');
            if(module) {
                var rmodule = Ext.syncRequire('Yap.view.' + module + '.'+mclass);
                if(rmodule) {
                    moduleObj = Ext.create('Yap.view.' + module + '.'+mclass);
                }
            }
            this.mainPanel.add(moduleObj);
        } else {
            this.previous = hash;
            this.redirectTo('login/');
        }
    },
    renderLogin: function() {
        localStorage.removeItem("user.login");
        this.mainPanel.removeAll();
        if(this.mainPanel.query('toolbar')[0]) {
            this.mainPanel.query('toolbar')[0].hide();
        }

        var login = Ext.create({xtype: 'login'});
        this.mainPanel.add(login);
    },
    renderAll: function(){
        this.mainPanel.removeAll();
        if(this.mainPanel.query('toolbar')[0]) {
            this.mainPanel.query('toolbar')[0].show();
        }

    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

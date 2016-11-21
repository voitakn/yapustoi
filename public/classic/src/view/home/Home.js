Ext.define('Yap.view.home.Home', {
    extend: 'Ext.grid.Panel',
    xtype: 'home_grid',
    reference: 'ref_home',
    requires: [
        'Yap.view.home.HomeController',
        'Yap.view.home.HomeModel',
        'Yap.store.UserCards',
        'Ext.grid.filters.Filters',
    ],
    controller: 'home',
    viewModel: 'home',
    title: 'Users',
    plugins: 'gridfilters',
    store: {
        type: 'user_cards'
    },
    scrollable: true,
    columns: [
        { header: 'ID',  dataIndex: 'id', filter: 'number'},
        { header: 'First Name', dataIndex: 'first_name', width: 200, filter: 'string'},
        { header: 'Last Name', dataIndex: 'last_name', filter: 'string'},
        { header: 'Email', dataIndex: 'email', filter: 'string'},
        { header: 'Gender', dataIndex: 'gender', filter: 'list'},
        { header: 'Birthday', dataIndex: 'birthday',xtype: 'datecolumn', format: 'd.m.Y', filter: true},
        { header: 'Online', dataIndex: 'online', filter: 'boolean'},
        {
            header: 'Credit Card',
            width: 160,
            dataIndex: 'Cards',
            filter: {type: 'string', dataIndex: 'credit_card'},
            renderer: function(value){
                var ret = '';
                value.forEach(function(rec){
                    ret += rec.credit_card+' <br/>';
                });
                return ret;
            }
        },{
            header: 'Card Type',
            width: 160,
            dataIndex: 'Cards',
            filter: {type: 'string', dataIndex: 'credit_card_type'},
            renderer: function(value){
                var ret = '';
                value.forEach(function(rec){
                    ret += rec.credit_card_type+' <br/>';
                });
                return ret;
            }
        }
    ]
});
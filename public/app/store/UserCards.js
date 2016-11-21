Ext.define('Yap.store.UserCards', {
    extend: 'Ext.data.Store',
    alias: 'store.user_cards',
    requires: [
        'Yap.model.UserCard'
    ],
    model: 'Yap.model.UserCard',
    sorters: [{
        property: 'first_name',
        direction: 'ASC'
    }],
    autoLoad: true,
    remoteSort: true,
    remoteFilter: true
});
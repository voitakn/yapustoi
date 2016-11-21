Ext.define('Yap.store.Ugrids', {
    extend: 'Ext.data.Store',
    alias: 'store.ugrids',
    requires: 'Yap.model.Ugrid',
    model: 'Yap.model.Ugrid',
    sorters: {property: 'id', direction: 'DESC'},
    data: [
        {id: 1, name: 'text - ', phone: 1234567254, date_create: '11.05.2016'},
        {id: 2, name: 'text - ', phone: 8764567765, date_create: '11.05.2016'},
        {id: 3, name: 'text - ', phone: 5444567990, date_create: '11.05.2016'},
        {id: 4, name: 'text - ', phone: 8874567296, date_create: '11.05.2016'},
        {id: 5, name: 'text - ', phone: 3204567923, date_create: '11.05.2016'},
        {id: 6, name: 'text - ', phone: 6094567370, date_create: '11.05.2016'}
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
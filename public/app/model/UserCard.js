/**
 * Created by voita on 23.10.2016.
 */
Ext.define('Yap.model.UserCard', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'ein',   type: 'string'},
        {name: 'first_name', type: 'string'},
        {name: 'last_name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'gender', type: 'string'},
        {name: 'birthday', type: 'date'},
        {name: 'online', type: 'boolean'},
        {name: 'cards', type: 'auto'},

    ],
    validators: {
        gender: { type: 'inclusion', list: ['Male', 'Female'] }
    },
        proxy: {
        type: 'ajax',
        api: {
            read: '/api/users/'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            idProperty: 'id'
        },
        actionMethods: {
            read: 'GET'
        }
    }
});

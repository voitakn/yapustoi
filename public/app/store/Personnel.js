Ext.define('Yap.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@entYaprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@entYaprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@entYaprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@entYaprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

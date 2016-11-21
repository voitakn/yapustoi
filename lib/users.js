'use strict';

var models =  require('../models');
const Users = {
    register: function (server, options, next) {
        server.route({
            method: 'GET',
            path: '/api/users/',
            handler: function (request, reply) {
                Users.all(request, reply);
            }
        });
        next();
    },
    all: function(request, reply){
        var filter_card = {}, filter_user = {}, sort_user = null, sort_card = null;
        if(request.query) {
            if(request.query.sort) {
                var rsort = JSON.parse(request.query.sort);
                if(['credit_card', 'credit_card_type'].indexOf(rsort[0].property) > -1) {
                    sort_card = [rsort[0].property, rsort[0].direction];
                } else {
                    sort_user = [rsort[0].property, rsort[0].direction];
                }

            }
            if(request.query.filter) {
                var rfilter = JSON.parse(request.query.filter);
                rfilter.forEach(function(row){
                    if(['credit_card', 'credit_card_type'].indexOf(row.property) > -1) {

                        switch(row.operator) {
                            case 'like':
                                filter_card[row.property] = {$iLike: '%'+row.value+'%'};
                                break;
                            case 'gt':
                                filter_card[row.property] = {$gt: row.value};
                                break;
                            case 'lt':
                                filter_card[row.property] = {$lt: row.value};
                                break;
                            case 'ne':
                                filter_card[row.property] = {$ne: row.value};
                                break;
                            case 'in':
                                filter_card[row.property] = {$in: row.value};
                                break;
                            case 'or':
                                filter_card[row.property] = {or: row.value};
                                break;
                            default:
                                filter_card[row.property] = row.value;
                                break;
                        }
                    } else {
                        switch(row.operator) {
                            case 'like':
                                filter_user[row.property] = {$iLike: '%' + row.value + '%'};
                                break;
                            case 'gt':
                                filter_user[row.property] = {$gt: row.value};
                                break;
                            case 'lt':
                                filter_user[row.property] = {$lt: row.value};
                                break;
                            case 'ne':
                                filter_user[row.property] = {$ne: row.value};
                                break;
                            case 'in':
                                filter_user[row.property] = {$in: row.value};
                                break;
                            case 'or':
                                filter_user[row.property] = {or: row.value};
                                break;
                            default:
                                filter_user[row.property] = row.value;
                                break;
                        }
                    }
                });
            }
        }

        models.User.findAll({
            attributes: ['id', 'ein', 'first_name', 'last_name', 'email', 'gender', 'birthday', 'online'],
            include:[
                {
                    model: models.Card,
                    attributes: ['credit_card', 'credit_card_type'],
                    where: filter_card,
                    order: [sort_card]
                }
            ],
            where: filter_user,
            order: [sort_user],
        }).then(function(users) {
            reply({success: true, data: users, msg: ''});
        });
    }
};

Users.register.attributes = {
    name: 'Users',
    version: '1.0.0'
};
exports.register = Users;
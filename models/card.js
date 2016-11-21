/**
 * Created by voita on 21.10.2016.
 */
'use strict';

module.exports = function(sequelize, Sequelize){

    var Card = sequelize.define('Card', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        credit_card: Sequelize.STRING,
        credit_card_type: Sequelize.STRING
    },{
        classMethods: {
            associate: function (models) {
                Card.belongsTo(models.User);
            }
        },
        tableName: 'cards'
    });
    return Card;
};
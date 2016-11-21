/**
 * Created by voita on 21.10.2016.
 */
'use strict';

module.exports = function(sequelize, Sequelize){
    var User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        ein: Sequelize.STRING,
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING,
        gender: Sequelize.STRING,
        birthday: {
            type: Sequelize.DATE
        },
        online: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    },{
        classMethods: {
            associate: function (models) {
                User.hasMany(models.Card, { foreignKey: 'user_id' });
            }
        },
        tableName: 'users'
    });
    return User;
};

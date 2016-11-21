'use strict';

var users_data = require('../data/users');
var cards_data = require('../data/cards');

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.createTable(
          'users',
          {
              id: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
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
          }
      ).then(function(res){
          if(['array', 'object'].indexOf(typeof users_data) > -1) {
              return queryInterface.bulkInsert('users', users_data)
                  .then(function(res1){
                  return queryInterface.createTable(
                      'cards',
                      {
                          id: {
                              type: Sequelize.INTEGER,
                              primaryKey: true,
                              autoIncrement: true
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
                      }
                  ).then(function(res2){
                      if(['array', 'object'].indexOf(typeof cards_data) > -1) {
                          return queryInterface.bulkInsert('cards', cards_data);
                      }
                  });
              });
          }

      });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropAllTables();
  }
};

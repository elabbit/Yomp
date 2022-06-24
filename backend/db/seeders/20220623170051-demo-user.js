'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@email.com',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Eddie',
        lastName: 'Lau',
        email: 'labbit@email.com',
        hashedPassword: bcrypt.hashSync('labbit')
      },
      {
        firstName: 'Abel',
        lastName: 'Tesfa',
        email: 'lebron@email.com',
        hashedPassword: bcrypt.hashSync('lebron')
      },
      {
        firstName: 'Jonathan',
        lastName: 'Kim',
        email: 'rocketleague@email.com',
        hashedPassword: bcrypt.hashSync('rocketleague')
      },
      {
        firstName: 'Lynn',
        lastName: 'Luong',
        email: 'jerseygirl@email.com',
        hashedPassword: bcrypt.hashSync('jerseygirl')
      },
      {
        firstName: 'David',
        lastName: 'Chung',
        email: 'shibal@email.com',
        hashedPassword: bcrypt.hashSync('shibal')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@email.com', 'labbit@email.com',
      'lebron@email.com', 'rocketleague@email.com',
      'jerseygirl@email.com', 'shibal@email.com' ] }
    }, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Comments', [{
      userId: 4,
      userName: 'John',
      imageId: 1,
      comment: 'such a nice picture',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        userId: 4,
        userName: 'John',
        imageId: 1,
        comment: 'really cool',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          userId: 1,
          userName: 'Demo-lition',
          imageId: 1,
          comment: "it's just okay...",
          createdAt: new Date(),
          updatedAt: new Date()
          }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Comments', null, {});
  }
};

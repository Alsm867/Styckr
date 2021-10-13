"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          userId: 4,
          albumId: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          content: "Test Content",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 1,
          imageUrl:
            "https://static01.nyt.com/images/2021/06/20/books/review/03Slaght/merlin_186175170_c658e009-7b81-487f-8f2b-eee8981be8dd-superJumbo.jpg",
          content: "Test Content",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 1,
          imageUrl:
            "http://www.cbf.org/assets/images/1171-x-593-px/forest-stream-shenandoah-national-park-justin-black-iLCP-1171x593.jpg",
          content: "Test Content",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Images", null, {});
  },
};

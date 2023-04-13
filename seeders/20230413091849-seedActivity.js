'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const activities = [
      {title:"activity 1", email:"email1@mail.com"},
      {title:"activity 2", email:"email2@mail.com"},
      {title:"activity 3", email:"email3@mail.com"},
      {title:"activity 4", email:"email4@mail.com"},
      {title:"activity 5", email:"email5@mail.com"}

    ]

    await queryInterface.bulkInsert('Activities', activities, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Activities', null, {});
  }
};

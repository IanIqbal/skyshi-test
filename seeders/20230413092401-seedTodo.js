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

    const todo = [
      {title:"todo1", isActive:true, priority:"Very High", ActivityGroupId:1},
      {title:"todo2", isActive:true, priority:"High", ActivityGroupId:1},
      {title:"todo3", isActive:false, priority:"Low", ActivityGroupId:1},
      {title:"todo4", isActive:true, priority:"High", ActivityGroupId:2},
      {title:"todo5", isActive:true, priority:"Very High", ActivityGroupId:2},
      {title:"todo6", isActive:false, priority:"Medium", ActivityGroupId:3},
      {title:"todo7", isActive:true, priority:"Low", ActivityGroupId:3},
      {title:"todo8", isActive:true, priority:"Hight", ActivityGroupId:4},
      {title:"todo9", isActive:true, priority:"Very High", ActivityGroupId:4},
      {title:"todo10", isActive:false, priority:"Medium", ActivityGroupId:5}
    ]

    await queryInterface.bulkInsert("Todos", todo, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Todos", null,{})
  }
};

"use strict";


const { hash } = require("../helpers/bcryptjs");
const fs = require("fs").promises;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(await fs.readFile("./data/users.json", "utf8"));
    const dataTosend = data.map((el) => {
      delete el.id;
      el.password = hash(el.password);
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    // console.log(dataTosend);
    return queryInterface.bulkInsert("Users", dataTosend, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

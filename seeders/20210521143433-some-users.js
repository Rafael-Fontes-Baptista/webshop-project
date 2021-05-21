"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        firstName: "Johny",
        lastName: "Depp",
        address: "BlackPearlStreet 21",
        email: "pirateofthecarribean@gmail.com",
        phone: 111222333,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "James",
        lastName: "Bond",
        address: "CasinoRoyal 007",
        email: "notaspy@gmail.com",
        phone: 222333444,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Clark",
        lastName: "Kent",
        address: "Krypton galexy 3002",
        email: "superhero@gmail.com",
        phone: 333444555,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {})
  },
}

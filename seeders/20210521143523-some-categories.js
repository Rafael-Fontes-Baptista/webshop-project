"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "weapons",
        imageUrl:
          "https://mightymega.com/wp-content/uploads/2013/06/famous_superhero_weapons_t.jpg",
        description: "all kind of weapons for superheros",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "costumes",
        imageUrl:
          "https://image.freepik.com/free-vector/superhero-costumes-set_1284-21445.jpg",
        description: "all kind of customes for superheros",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {})
  },
}

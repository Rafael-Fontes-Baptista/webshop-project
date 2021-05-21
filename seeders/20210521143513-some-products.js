"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "blue lycra pants",
        description: "super flexible pants for super people",
        price: 2500,
        imageUrl:
          "https://www.costumesinaustralia.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/t/tt1077-18.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "curved sword",
        description: "well sharped sword",
        price: 2000,
        imageUrl:
          "https://i.ebayimg.com/thumbs/images/g/Km4AAOSwBsleT83W/s-l225.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "p99 gun",
        description: "little gun with big power",
        price: 1500,
        imageUrl:
          "https://royalarmouries.org/wp-content/uploads/2020/07/bond-feature.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "red cape",
        description: "super cape for flying anyday",
        price: 3000,
        imageUrl:
          "https://luxurylaunches.com/wp-content/uploads/2019/12/Superman-Cape-1-1170x731.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "pirate costume",
        description: "elegant pirate costume (included eye patches)",
        price: 1200,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bRxwYOLEb8pNa36RcrPzwSxE21zu9-gWt6U8_1KjP5H4NtvW&s",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {})
  },
}

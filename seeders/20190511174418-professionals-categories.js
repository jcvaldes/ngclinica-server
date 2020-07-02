module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('ProfessionalCategories', [{
    UserId: 2,
    CategoryId: 1
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('ProfessionalCategories', null, {}),
}

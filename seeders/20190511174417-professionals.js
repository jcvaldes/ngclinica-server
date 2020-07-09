module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Professionals', [{
    UserId: 2
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Professionals', null, {}),
}
queryInterface.bulkInsert('ProfessionalCategories', [{
  UserId: 2,
  CategoryId: 1
}], {}),

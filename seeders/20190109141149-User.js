module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        title: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};

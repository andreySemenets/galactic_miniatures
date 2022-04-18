module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Collections', [{

			collectionName: 'MMF',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			collectionName: 'Mythicalaman',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			collectionName: 'Warlock',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			collectionName: 'Axuramazda',
			createdAt: new Date(),
			updatedAt: new Date(),
		},

		], {});
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
		await queryInterface.bulkDelete('Collections', null, {});
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	},
};

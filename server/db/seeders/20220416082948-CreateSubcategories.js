'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('SubCategories', [{
			subCategoryTitle: 'Vehicles',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			subCategoryTitle: 'Characters',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			subCategoryTitle: 'Locations',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			subCategoryTitle: 'Weapons',
			createdAt: new Date(),
			updatedAt: new Date(),
		}], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('SubCategories', null, {});
	},
};

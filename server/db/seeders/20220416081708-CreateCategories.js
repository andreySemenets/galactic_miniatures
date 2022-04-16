'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Categories', [{
			categoryTitle: 'Warhammer',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			categoryTitle: 'Fantasy',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			categoryTitle: 'Sci-fi',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			categoryTitle: 'Terrain',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			categoryTitle: 'Space Marines',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			categoryTitle: 'Astrates',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			categoryTitle: 'Tech Guys',
			createdAt: new Date(),
			updatedAt: new Date(),
		}, {
			categoryTitle: 'Giga Robots',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Categories', null, {});
	},
};

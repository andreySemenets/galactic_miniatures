module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Photos', [
			{
				itemId: 1,
				photoUrl: 'Vehicle-Chimera-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 2,
				photoUrl: 'Vehicle-Pred',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 3,
				photoUrl: 'Vehicle-Russ-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 4,
				photoUrl: 'Vehicle-Sicaran',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 5,
				photoUrl: 'Vehicle-Vendic-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 6,
				photoUrl: 'Character-AF95-MFF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 7,
				photoUrl: 'Character-XX-8-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 8,
				photoUrl: 'Character-XX-86-CS-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 9,
				photoUrl: 'Character-XX-88-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 10,
				photoUrl: 'Character-XX-104-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 11,
				photoUrl: 'Character-XX-1104-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 12,
				photoUrl: 'Location-MMF-1',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 13,
				photoUrl: 'Location-MMF-2',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 14,
				photoUrl: 'Location-MMF-3',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 15,
				photoUrl: 'Location-MMF-4',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 16,
				photoUrl: 'Weapon-Basilisk-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 17,
				photoUrl: 'Weapon-Earthshaker-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 18,
				photoUrl: 'Weapon-Manticore-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				itemId: 19,
				photoUrl: 'Weapon-Sentinel-MMF',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Photos', null, {});
	},
};

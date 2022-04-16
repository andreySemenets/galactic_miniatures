module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Users', [{
			firstName: 'David',
			lastName: 'Beckham',
			email: 'beckham@gmail.com',
			password: 'beckham',
			phone: '+123456789',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			firstName: 'Zlatan',
			lastName: 'Ibrahimovic',
			email: 'ibrahimovic@gmail.com',
			password: 'ibrahimovic',
			phone: '+123456789',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			firstName: 'Cristiano',
			lastName: 'Ronaldo',
			email: 'ronaldo@gmail.com',
			password: 'ronaldo',
			phone: '+123456789',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			firstName: 'Lionel',
			lastName: 'Messi',
			email: 'messi@gmail.com',
			password: 'messi',
			phone: '+123456789',
			createdAt: new Date(),
			updatedAt: new Date(),
		},

		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	},
};

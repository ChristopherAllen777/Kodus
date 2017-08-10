module.exports = function(sequelize, Sequelize) {

	var Maintenance = sequelize.define('Maintenance', {

		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},

		firstName: {
			type: Sequelize.STRING,
			notEmpty: true
		},

		lastName: {
			type: Sequelize.STRING,
			notEmpty: true
		},

		phone: {
			type: Sequelize.STRING
		},

		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},

		kdsNum: {
			type: Sequelize.STRING
		},

		kdsAddr: {
			type: Sequelize.STRING
		},

		kdsCity: {
			type: Sequelize.STRING
		},

		kdsState: {
			type: Sequelize.STRING
		},

		maintenanceCategory: {
			type: Sequelize.STRING
		},

		maintenanceIssue: {
			type: Sequelize.STRING
		},

		applItem: {
			type: Sequelize.STRING
		},

		applMake: {
			type: Sequelize.STRING
		},

		applModel: {
			type: Sequelize.INTEGER
		},

		requestDt: {
			type: Sequelize.DATE
		},
	}, {
		  timestamps: false
	});

	return Maintenance;
};
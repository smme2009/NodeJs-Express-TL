'use strict';

/**
 * 新增使用者資料表
 * 
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"users",
			{
				users_id: {
					type: Sequelize.BIGINT.UNSIGNED,
					primaryKey: true,
					autoIncrement: true,
					allowNull: false,
					comment: '使用者ID'
				},
				email: {
					type: Sequelize.STRING,
					unique: true,
					allowNull: false,
					comment: 'E-Mail(帳號)',
				},
				password: {
					type: Sequelize.STRING,
					allowNull: false,
					comment: '密碼',
				},
				name: {
					type: Sequelize.STRING,
					allowNull: false,
					comment: '名稱',
				},
				created_at: {
					type: Sequelize.DATE,
					allowNull: false,
					comment: '新增時間',
				},
				updated_at: {
					type: Sequelize.DATE,
					allowNull: false,
					comment: '更新時間',
				},
				deleted_at: {
					type: Sequelize.DATE,
					allowNull: true,
					comment: '刪除時間',
				},
			}
		);

		// 建立測試帳號(Joi)
		await queryInterface.bulkInsert('users', [
			{
				email: 'joi@test.com',
				password: require('bcrypt').hashSync('joipass777', 10),
				name: 'Joi',
				created_at: new Date(),
				updated_at: new Date()
			}
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("users");
	}
};

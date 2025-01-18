import { Table, Model, Column, DataType } from "sequelize-typescript";

// 帳號
@Table({
    tableName: "users",
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
})
export default class Users extends Model {
    @Column({
        field: "users_id",
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "使用者ID",
    })
    usersId!: number;

    @Column({
        field: "email",
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        comment: "E-Mail(帳號)",
    })
    email!: string;

    @Column({
        field: "password",
        type: DataType.STRING,
        allowNull: false,
        comment: "密碼",
    })
    password!: string;

    @Column({
        field: "name",
        type: DataType.STRING,
        allowNull: false,
        comment: "名稱",
    })
    name!: string;
}

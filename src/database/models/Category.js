import sequelize from "../index.js"
import s from "sequelize"

const { DataTypes } = s 

const Category = sequelize.define(
    "category",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
)

export default Category
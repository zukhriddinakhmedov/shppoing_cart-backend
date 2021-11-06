import sequelize from "../index.js"
import s from "sequelize"

const {DataTypes} = s


const ShoppingCart = sequelize.define(
    "shopping-cart", {
        id: {
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },

    }
)

export default ShoppingCart
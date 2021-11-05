import sequelize from "../index.js"
import s from "sequelize"

const { DataTypes } = s

const ProductsCategory = sequelize.define(
    "productsCategory",
    {    
        id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        },
    },
    )

    export default ProductsCategory
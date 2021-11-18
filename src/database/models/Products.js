import sequelize from "../index.js"
import s from "sequelize"


const {DataTypes} = s

const Products = sequelize.define(
    "products",
    {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        schema: "development",
    }
)
// {
//     "id": 1,
//     "name": "name",
//     "category": STRING, 
//     "image":"url(IMAGE LINK)",
//     "price":FLOAT,
//     "createdAt": "DATE",
//     "updatedAt": "DATE",   
// }

export default Products
import sequelize  from "../index.js"
import s from "sequelize"

const {DataTypes} = s

const Reviews = sequelize.define("reviews", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
},
{
    schema: "development",
}
)

export default Reviews

// {
//     "id": 1,
//     "text": TEXT,
//     "username:STRING,
//     "productId":FOREIGN KEY products
  
// }

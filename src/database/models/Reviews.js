import sequelize  from "../index.js"
import s from "sequelize"

const {DataTypes} = s

const Reviews = sequelize.define("reviews", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Reviews

// {
//     "id": 1,
//     "text": TEXT,
//     "username:STRING,
//     "productId":FOREIGN KEY products
  
// }

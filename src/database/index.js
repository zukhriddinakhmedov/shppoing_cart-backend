import s  from "sequelize"

const { Sequelize, QueryTypes } = s

const {PGDATABASE, PGUSER, PGPASSWORD, PGHOST,} = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD,  {
    host: PGHOST,
    // port: PGPORT,
    dialect: "postgres",
    // ...(NODE_ENV === "production" &&  {
    //     dialectOptions: {
    //         ssl: {
    //          require: true,
    //          rejectUnauthorised: false,
    //         },
    //     },
    // })
}
)
const schemas = ["development", "production"]
.map(
    (schema) => `CREATE SCHEMA IF NOT EXISTS ${schema} AUTHORIZATION ${PGUSER}`
)
.join(";")

console.log("Sequelize has been created successfully")

// export const testConnection = async () => {
//     try {
//         await sequelize.authenticate({logging: false})
//         console.log("Connection can be established")
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const connectDB = async () => {
//     try {
//         console.log("Synchrozation of all the tables in connectDB")
//         await sequelize.sync()
//     } catch (error) {
//         console.log(error)
//     }
// }

export const syncSequelize = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.query(schemas, {type: QueryTypes.SELECT})
        await sequelize.sync({
            logging: false,
            schema: "development"
        })
        console.log("DB authenticated")
    } catch (error) {
        console.log(error)
    }
}


export default sequelize
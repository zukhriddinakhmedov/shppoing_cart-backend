import { Sequelize } from "sequelize"

const {PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT, NODE_ENV } = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD,  {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    ...(NODE_ENV === "production" &&  {
        dialectOptions: {
            ssl: {
             require: true,
             rejectUnauthorised: false,
            },
        },
    })
}
)
console.log("Sequelize has been created successfully")

export const testConnection = async () => {
    try {
        await sequelize.authenticate({logging: false})
        console.log("Connection can be established")
    } catch (error) {
        console.log(error)
    }
}

export const connectDB = async () => {
    try {
        console.log("Synchrozation of all the tables in connectDB")
        await sequelize.sync()
    } catch (error) {
        console.log(error)
    }
}

export default sequelize
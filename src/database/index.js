import { Sequelize } from "sequelize"

const {PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env

const sequelize = new Sequelize(PGUSER, PGPASSWORD, PGDATABASE, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres"
})
console.log("Sequelize has been create successfully")

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
const { MongoClient } = require('mongodb')

const PROD = process.env.PROD ? true : false
const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const uri = PROD ? "mongodb+srv://" + MONGODB_USER + ":" + MONGODB_PASSWORD + "@dividend-qzlcg.mongodb.net/pek?retryWrites=true" : "mongodb://localhost:27017/pek"


class Database {
    constructor() {
        this.uri = uri
        this.db = undefined
        return this
    }

    connect() {
        return new Promise(async (resolve, reject) => {
            try {
                const client = await MongoClient.connect(uri, { useNewUrlParser: true })
                this.db = client.db()
                resolve(this)
            } catch (err) {
                reject(err)
            }
        })
    }

    updateOne = async (connection) => {
        try {
            return await this.db.collection('datas').updateOne(
                { token: connection.token },
                {
                    $set: connection
                },
                {
                    upsert: true
                }
            )
        } catch (err) {
            throw Error(err)
        }
    }


    deleteOne = async (token) => {
        try {
            return await this.db.collection('datas').deleteOne({ token: token })
        } catch (err) {
            throw Error(err)
        }
    }

    findOne = async (token) => {
        try {
            return await this.db.collection('datas').findOne({ token: token })
        } catch (err) {
            throw Error(err)
        }
    };
}

module.exports = Database
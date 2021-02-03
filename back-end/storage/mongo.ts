import { Collection, MongoClient } from 'mongodb'
import { ItemType } from "../types/item";

const url = 'mongodb+srv://anival:Dfktynby94@cluster0.btdyw.mongodb.net/insta-clone-db?retryWrites=true&w=majority'

const uri = process.env.MONGODB_URI;

//const dbName = 'test'
// const collectionNamePosts = 'posts'
const dbName = 'insta'
const collectionName = 'users'

const getMongoInstance = async () => {
    const client = await MongoClient.connect(url)

    return client.db(dbName)
}

const getCollection = async (): Promise<Collection> => {
    const db = await getMongoInstance()

    return db.collection(collectionName)
}

const listAll = async () => {
    const collection = await getCollection()
    return collection.find({}).toArray()
}

const getById = async (id: string) => {
    const collection = await getCollection()
    return await collection.findOne({ id })
}

const create = async (item: ItemType) => {
    const collection = await getCollection();

    const response = await collection.insertOne(item);

    return response.ops[0];
}

const update = async (item: ItemType) => {
    const collection = await getCollection()

    const { id } = item

    const response = await collection.replaceOne({ id }, item);

    return response.ops[0]
}

const remove = async (id: string) => {
    const collection = await  getCollection()

    return collection.deleteOne({ id })
}

export {
    listAll,
    getById,
    create,
    update,
    remove,
}
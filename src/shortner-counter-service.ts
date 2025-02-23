import Express, {Request, Response} from 'express'

import {MongoClient} from 'mongodb'

const mongodb = new MongoClient(process.env.MONGODB_CONNECTION_URI || "");

const PORT = process.env.PORT || 3001

// Create a app
const app = Express()

// Convert body to JSON.
app.use(Express.json())

class CounterHandler {
    getCounter() : number{
        return 1
    }
}

// This API will get a data from the DB based on range and return it. 
app.post('/get-counter', async (req : Request, res : Response) => {

})

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}.\nThis server will handle all the API calls.`)
})
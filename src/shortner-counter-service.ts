import Express, {Request, Response} from 'express'

import {MongoClient} from 'mongodb'

import CONFIG from './db-config'

const mongodb = new MongoClient(CONFIG.MongoURI);

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
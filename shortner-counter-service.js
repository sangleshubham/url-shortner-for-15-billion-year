import Express from 'express'

const PORT = process.env.PORT || 3001

// Create a app
const app = Express()

// Convert body to JSON.
app.use(Express.json())

class CounterHandler {

    getCounter(){
        return 
    }

}

// This API will get a data from the DB based on range and return it. 
app.get('/get-counter', (req, res) => {
    res.status(200).send({
        counter : 1
    })
})

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}.\nThis server will handle all the API calls.`)
})
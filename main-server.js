import Express from 'express'

const PORT = process.env.PORT || 3000

// Create a app
const app = Express()

// Convert body to JSON.
app.use(Express.json())

class ShortnerServiceHelper {
    static async getCounterForShortner(){
        const response = await fetch('http://localhost:3001/get-counter')
        return await response?.json()
    }
}

app.post('/shorten-url', async (req, res) => {
    const { body: { url } } = req
    let { counter } = await ShortnerServiceHelper.getCounterForShortner() ?? { error : "No Counter Found" }
    console.log('Counter:', counter)
})

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}.\nThis server will handle all the API calls.`)
})
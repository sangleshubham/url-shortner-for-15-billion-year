import Express, { Request, Response } from 'express'

const PORT = process.env.PORT || 3000

// Create a app
const app = Express()

// Convert body to JSON.
app.use(Express.json())

// class to handle all internal requrest of shortner. 
class ShortnerServiceHelper {
    static async getCounterForShortner() : Promise<{ counter: number } | Error> {
        try {
            const response = await fetch('http://localhost:3001/get-counter')
            return await response?.json()
        } catch (error) {
            return Error('Failed to call the api.')
        }
    }
}

app.post('/shorten-url', async (req : Request, res : Response) => {
    const data = await ShortnerServiceHelper.getCounterForShortner()
    if (data instanceof Error) {
        console.error(data.message)
    } else {
        console.log('Counter:', data.counter)
    }
})

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}.\nThis server will handle all the API calls.`)
})
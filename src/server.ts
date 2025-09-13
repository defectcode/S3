import express, { type Application } from 'express';


export class Server {
    private readonly app: Application

    public constructor () {
        this.app = express();

        this.configure()
    }

    public async configure() {
        this.app.use(express.json())

        this.app.use('/ping', (req, res)=> {
            res.json({ message: 'pong' })
        })
    }

    public async start() {
        const port = 4000

        this.app.listen(port)
    }
}
import { StorageService } from '../service/storage'
import type { Request, Response } from 'express'


export class StorageController {
    private readonly storageService = new StorageService()

    public async upload(req: Request, res: Response) {
        try {
            const file = req.file

            if (!file) {
                return res.status(400).json({ message: 'No file provided' })
            }

            res.status(200).json({
                name: file.originalname,
                type: file.mimetype
            })

        } catch (error) {
            res.status(500).json({ message: 'Failed to upload file' })
        }
    }
}
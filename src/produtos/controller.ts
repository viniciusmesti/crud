import { Request, Response} from 'express'
import estoque from 'src/service/estoque'

class controller {
    async create(req: Request, res: Response){
        estoque.createProductList(req.body)

        return res.status(201).send()
    }

    async list(req: Request, res: Response) {
        const productList = await estoque.findProducts()

        return res.status(200).json(productList)
    }

    async getStock(req: Request, res: Response) {
        const stockList = await estoque.getStock()

        return res.status(200).json(stockList)
    }

    async getStockValue(req: Request, res: Response) {
        const stockValue = await estoque.getStock()

        return res.status(200).json(stockValue)
    }
}
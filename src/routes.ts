import { Router } from "express";
import helthCheckController from "./controller/helthCheckController";
import estoque from "./service/estoque";

const routes = Router()

routes.get('/helth-check', helthCheckController.check)
routes.get('/products-stock-value', estoque.getStockValue)
routes.get('/products-stock', estoque.getStock)

export default routes
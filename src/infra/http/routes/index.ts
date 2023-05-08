import { Router } from "express";
import { AuthorController } from "../controllers/author-controller";

const authorRoutes = Router()

authorRoutes.post('/', AuthorController.create)
authorRoutes.get('/:id', AuthorController.get)

export default authorRoutes
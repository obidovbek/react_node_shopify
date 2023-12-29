/* eslint-disable new-cap */
import {Router} from 'express';
import {ProductService} from './product.service.js';
/**
 * Маршрутизация продуктов
 */
export class ProductController {
  /**
     * Инициализация маршрутов продукта
     */
  constructor() {
    this.productService = ProductService.getInstance();
    this.router = Router();
    this.router.get('/update', this.getProducts.bind(this));
  }
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async getProducts(req, res) {
    try {
      const products = await this.productService.getProducts(req.params);
      res.status(200).json({products});
    } catch (e) {
      res.status(500).json({message: e.errors});
    }
  }
}

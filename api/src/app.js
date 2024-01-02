import express from 'express';
import {ProductController} from './products/product.controller.js';
import {ProductService} from './products/product.service.js';
import {ConfigService} from './service/config.js';
import {SequelizeService} from './service/sequelize.js';
import cors from 'cors';
/**
 * Представляет основной класс приложения.
 */
export class App {
  /**
   * Конструктор класса App.
   */
  constructor() {
    this.app = express();
    this.configService = ConfigService.getInstance();
    this.sequelize = SequelizeService.getInstance();
    this.productController = new ProductController();
    this.productService = ProductService.getInstance();
  }
  /**
   * Инициализирует приложение.
   */
  async init() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/products', this.productController.router);
    await this.sequelize.connect();
    await this.productService.insertProductToDb();
    this.app.listen(
        this.configService.get('PORT'),
        ()=>console.log(
            `Сервер работает на порту ${this.configService.get('PORT')}`,
        ),
    );
  }
}


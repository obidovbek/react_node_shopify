import {ConfigService} from '../service/config.js';
import {ShopifyService} from '../service/shopify.js';
import {ProductRepository} from './product.repository.js';
/**
 * ProductService
 */
export class ProductService {
  /**
   * Конструктор класса ProductService
   */
  constructor() {
    this.productRepository = new ProductRepository();
    this.shopify = ShopifyService.getInstance();
    this.configService = ConfigService.getInstance();
  }
  /**
   * @param {*} params
   */
  async getProducts(params) {
    const page = !params || !params.page || parseInt(params.page) < 1 ?
        1 : parseInt(params.page);
    const products = await this.productRepository.getProducts(page);
    return products;
  }
  /**
   * Получения продуктов из shopify
     */
  async insertProductToDb() {
    const products = await this.shopify.getProducts();
    const destructuredProducts = products
        .map((p)=> {
          const {node: {bodyHtml, id, images: {edges}}}=p;
          const {node: {src}} = edges[0];
          return {product_id: id, bodyHtml, image: src};
        },
        );
    await this.productRepository.setProductsToDb(destructuredProducts);
    return destructuredProducts;
  }
  /**
   * @return {*}
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new ProductService();
    }
    return this.instance;
  }
}


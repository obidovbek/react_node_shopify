import {ShopifyProductsModel} from './product.model.js';
/**
 * Работа с моделью продукта
 */
export class ProductRepository {
  /**
     *
     * @param {*} products
     * @return {*}
     */
  async setProductsToDb(products) {
    const result = await ShopifyProductsModel.bulkCreate(products);
    return result;
  }
  /**
   *
   * @param {*} page
   */
  async getProducts(page) {
    const products = await ShopifyProductsModel.findAll({
      limit: 10,
      offset: (page-1)*10,
    });
    return products;
  }
}

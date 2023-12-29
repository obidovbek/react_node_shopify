import {Model, DataTypes} from 'sequelize';

/**
 * Модел продукта для база данных Postgresql
 */
export class ShopifyProductsModel extends Model {
  /**
     * @param {*} sequelize инициализированный параметр соединения sequelize
     * @return {*} модель продукта
     */
  static init(sequelize) {
    return super.init(
        {
          product_id: {
            type: DataTypes.STRING,
          },
          bodyHtml: {
            type: DataTypes.TEXT,
          },
          image: {
            type: DataTypes.STRING,
          },
        },
        {
          sequelize,
          modelName: 'ShopifyProductsModel',
          tableName: 'shopify_products',
        },
    );
  }
}

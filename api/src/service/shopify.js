import {ConfigService} from './config.js';

/**
 * Shopify Сервисе
 */
export class ShopifyService {
/**
 * Конструктор класса
 */
  constructor() {
    this.configService = ConfigService.getInstance();
  }
  /**
   * Получения продуктов из Shopify
   */
  async getProducts() {
    const body = JSON.stringify({
      query: `{
            products(first: 10) {
                    edges {
                    node {
                        bodyHtml
                        id
                        images(first: 10) {
                            edges {
                                node {
                                    id
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }`,
    });
    const response = await fetch(
        this.configService.get('SHOPIFY_MAIN_URL')+
        this.configService.get('SHOPIFY_PRODUCTS_LINK'),
        {
          method: 'POST',
          headers: {
            'X-Shopify-Access-Token':
                this.configService.get('SHOPIFY_ACCESS_TOKEN'),
            'Content-type': 'Application/json',
          },
          body,
        });
    const responseJson = await response.json();
    const {data: {products: {edges}}} = responseJson;
    return edges;
  }
  /**
   * Ининстазацыя класса ShopifyService
   * @return {*} Инстанс класса ShopifyService
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new ShopifyService();
    }
    return this.instance;
  }
}

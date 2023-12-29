import {Sequelize} from 'sequelize';
import {ShopifyProductsModel} from '../products/product.model.js';
import {ConfigService} from './config.js';
/**
 * Сервис для взаимодействия с Sequelize ORM.
 */
export class SequelizeService {
  /**
     * Конструктор класса SequelizeService.
     */
  constructor() {
    this.configService = ConfigService.getInstance();
    this.sequelize = new Sequelize({
      host: this.configService.get('POSTGRE_HOST'),
      port: parseInt(this.configService.get('POSTGRE_PORT')),
      database: this.configService.get('POSTGRE_DB'),
      username: this.configService.get('POSTGRE_USER'),
      password: this.configService.get('POSTGRE_PASSWORD'),
      dialect: this.configService.get('POSTGRE_DIALECT'),
    });
    ShopifyProductsModel.init(this.sequelize);
  }
  /**
   * Инициалтзация сервиса SequelizeService
   * @return {*} инстансе сервиса SequelizeService
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new SequelizeService();
    }
    return this.instance;
  }
  /**
   * Подключение к базе данных
   */
  async connect() {
    try {
      await this.sequelize.authenticate();
      await this.sequelize.sync({force: true});
      console.log('[SequelizeService] успешное подключение к база данных');
    } catch (e) {
      console.log('[SequelizeService] ошибка подключения к баз данных');
    }
  }
}

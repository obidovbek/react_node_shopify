import {config} from 'dotenv';

/**
 * Сервис для обработки настроек конфигурации.
 */
export class ConfigService {
  /**
     * Загружает конфигурацию среды.
     * @private
     */
  constructor() {
    const result = config({path: `./env/.${process.env.NODE_ENV}`});
    if (result.error) {
      console.log('[ConfigService] Ошибка при загрузке среды');
    } else {
      this.config = result.parsed;
      console.log('[ConfigService] env-файл успешно загружен');
    }
  }
  /**
   * Ининстазацыя класса ConfigService
   * @return {*} Инстанс класса ConfigService
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new ConfigService();
    }
    return this.instance;
  }
  /**
   * Получает значение, связанное с данным ключом, из конфигурации.
   *
   * @param {string} key - Ключ, для которого нужно получить значение.
   * @return {*} Значение, связанное с данным ключом.
   */
  get(key) {
    return this.config[key];
  }
}

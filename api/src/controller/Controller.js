import Service from '../service/Service';

export default class Controller {
  constructor() {
    this._service = new Service();
  }

  async getItems() {
    return await this._service.getItems();
  }

  async getPromotions() {
    return await this._service.getPromotions();
  }

  async getPurchasedBarcodes() {
    return await this._service.getPurchasedBarcodes();
  }
}

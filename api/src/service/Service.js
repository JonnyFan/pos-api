import fs from 'fs';
import path from 'path';

export default class Service {
  getItems() {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../../../resource/items.json'));
    return JSON.parse(rawData);
  }

  getPromotions() {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../../../resource/promotions.json'));
    return JSON.parse(rawData);
  }

  getPurchasedBarcodes() {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../../../resource/purchasedBarcodes.json'));
    return JSON.parse(rawData);
  }
}

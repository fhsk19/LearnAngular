import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menArr: Menu[];
  constructor() {
    this.menArr = [
      new Menu( 101, 'Puri',  'Masala puri',
           500, 50.00),
           new Menu( 102, 'idli',  'Idli sambhar',
           500, 30.00),
           new Menu( 103, 'Sandwich',  'Corn Cheese Sandwich',
           501, 70.00),
           new Menu( 104, 'Rice Plate',  'Veg Rice Plate',
           501, 40.00),
           new Menu( 101, 'Paratha',  'Aloo Paratha',
           501, 50.00),
    ];
   }

   getMenu(): Menu[] {
    return this.menArr;
 }
 AddMenus(men: Menu): void {
   this.menArr.push(men);
 }
  getMenuByFoodId( menfoodId: number): Menu {

    for (let men of this.menArr) {
      let c = men.foodId;
      if ( c  === menfoodId) {
        return men;
      }
    }
    return null;
 }

}

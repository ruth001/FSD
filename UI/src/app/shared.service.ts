import { Injectable } from '@angular/core';
import { Transaction } from './dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3001';

@Injectable()
export class SharedService {
  private itemList= [];
  private remainingList :string[]=[];

  constructor(private _httpClient: HttpClient){

  }

  getData(url:string){
    let getUrl=`${BASE_URL}${url}`;
    return this._httpClient.get(getUrl);
  }

  postData(url:string,data){
    let baseUrl = `${BASE_URL}${url}`;
    return this._httpClient.post(baseUrl,data);
  }

  setSelectedItemsList(item: Transaction[]) {
    this.itemList = item;
  }
  getSelectedItemsList(){
    return this.itemList;
  }
  setRemainingItemList(item:string[]){
    this.remainingList=item;
  }
  getRemainingItemList():string[]{
    return this.remainingList;
  }
}

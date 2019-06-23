import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Transaction } from '../dashboard/dashboard.component';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

import {OkDialog} from '../ok-dialog/ok-dialog';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  transactions:any;
  constructor(private shared:SharedService,private route:Router,private okDialog:OkDialog) { }
  
  ngOnInit() {
    this.transactions = new MatTableDataSource<Element>(this.shared.getSelectedItemsList());
  }

  displayedColumns: string[] = ['item', 'cost','delete'];
  data:any =this.shared.getSelectedItemsList();

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.data.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  addItem(){
    this.shared.setSelectedItemsList(this.data);
    this.route.navigate(['/Dashboard']);
  }
  deleteRecord(index){
    var item=this.data.splice(index,1)
    let items:string[]=this.shared.getRemainingItemList();
    items.push(item[0].item);
    this.shared.setRemainingItemList(items);
    this.transactions=new MatTableDataSource<Element>(this.data);
  }

  proceed(){
    this.okDialog.open({
      title: 'Processed',
      content: 'Your request has been processed successfully'
    },  {
        width: '300px',
        height: '190px'
      }, () => {
        this.route.navigate(['/Dashboard']);
      });
  }

}

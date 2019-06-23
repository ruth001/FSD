import { Component, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd
} from '@angular/router';
import { SharedService } from '../shared.service';




export interface Transaction {
  item: string;
  cost: number;
  delete: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todo: string[];
  done: string[];
  itemList: Transaction[] = [];
  previousUrl: string = "";
  constructor(private route: Router, private shared: SharedService) {

  }

  ngOnInit() {
    if (this.shared.getRemainingItemList().length != 0) {
      this.todo = this.shared.getRemainingItemList();
      this.done = this.shared.getSelectedItemsList().map(function (product, i) {
        return product.item;
      });
    }
    else {
      this.shared.getData('/api/items/done').subscribe(data => {
        this.done = data.done;
      });
      this.shared.getData('/api/items/todo').subscribe(data => {
        this.todo = data.todo;
      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  checkOutOrder() {
    if (this.done.length <= 4) {
      this.itemList = this.done.map(function (elem) {
        return {
          item: elem,
          cost: 1,
          delete: 'Delete'
        }
      });
      this.shared.setSelectedItemsList(this.itemList);
      this.shared.setRemainingItemList(this.todo);
      this.route.navigate(['/Review']);
    }
    else {

    }
  }

}

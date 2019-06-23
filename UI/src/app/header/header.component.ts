import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd
} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '';
  username = '';
  constructor(private router: Router, private shared: SharedService) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      if (sessionStorage.getItem('username')) {
        this.username = sessionStorage.getItem('username');
      }
      else {
        this.username = '';
      }
    }
  }

  ngOnInit() {
    this.title = 'E-Stationary Mart';
  }

  logOut() {
    sessionStorage.removeItem('username');
    this.shared.setSelectedItemsList([]);
    this.shared.setRemainingItemList([]);
    this.router.navigate(['/Login']);
  }

}

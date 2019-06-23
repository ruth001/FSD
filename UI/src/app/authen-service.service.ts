import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable()
export class AuthenServiceService implements CanActivate {

  constructor(private router: Router, private shared: SharedService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem("username")) {
      return true;
    }
    else {
      this.router.navigate(['/Login']);
      return false;
    }

  }
}

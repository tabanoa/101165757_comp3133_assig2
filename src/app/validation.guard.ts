import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidationGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url: string = state.url;
    let loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn != null && loggedIn == 'true') {
      if (url == '/') {
        return this.router.parseUrl('/hotels');
      } else {
        return true;
      }
    } else {
      return this.router.parseUrl('/');
    }
  }
}
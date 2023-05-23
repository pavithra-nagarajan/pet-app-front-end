import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService:CookieService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // by default, return true, but we will set this up to make sure we only return true if we're logged in
      let userId = Number(this.cookieService.get("userId"));
      // if userId is NaN, we return false (cannot activate this route)
      // otherwise, return true, meaning we can activate this route
      return !isNaN(userId);
  }
  
}

import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    let pets = this.cookieService.getObject("wishList");
    console.log(pets);
  }

}

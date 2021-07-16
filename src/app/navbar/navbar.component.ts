import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap, concatMap } from "rxjs/internal/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  roles: string[] = [];
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.auth.isAuthenticated$.subscribe(res => {
      this.isLoggedIn = res
    });


  }

}



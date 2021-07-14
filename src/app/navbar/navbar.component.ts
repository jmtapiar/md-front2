import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from "rxjs/internal/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  roles: string[] = [];
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    
    this.auth.isAuthenticated$.pipe(
      tap(LoggedIn => {
        console.log("aqui .....")
        console.log(LoggedIn)
      })
    )

  }

 async loggedIn(){
    console.log("aqui .....");
    console.log(this.auth.isAuthenticated$);
  }

  prueba(){
    console.log("aqui .....")

  }

}

import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from "@auth0/auth0-angular";


declare interface submenu {
  path: string;
  title: string;
  }
  
  declare interface rutaSide {
    path: string;
    title: string;
    icon: string;
    class: string;
    new: number;
    submenu?:submenu[];
  }
  
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {
  menu: any[];
  novedades:boolean;
  isLoggedIn=false;

  constructor(private tokenStorage:TokenStorageService,
              public auth:AuthService   ) { }

  ngOnInit(): void {
    this.menu = RUTAS.filter(menu => menu);
    this.auth.isAuthenticated$.subscribe(logged =>{this.isLoggedIn = logged;}
    );
    this.auth.user$.subscribe(
      profile=>{
        console.log(profile);

      }
    );
        
  }


  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}
export const RUTAS: rutaSide[] = [
  
  {
    path: "/inicio",
    title: "Inicio",
    icon: "fa-home",
    class: "",
    new:1
  }
,
  {
    path: "empresas",
    title: "Empresas",
    icon: "fa-university",
    class: "",
    new:0,
    submenu:[{path:'Empresas',title:'Nuevo'},
    {path:'editar',title:'Editar'}
]
  },
  {
    path: "personas",
    title: "Clientes",
    icon: "fa-users",
    class: "",
    new:0
 },
  {
    path: "/productos",
    title: "Productos",
    icon: "fa-cubes",
    class: "",
    new:0
  },

  {
    path: "/user",
    title: "Usuarios",
    icon: "fa-user-circle",
    class: "",
    new:1
  },
  {
    path: "/Reportes",
    title: "Reportes",
    icon: "fa-signal",
    class: "",
    new:1
  },
  {
    path: "/estadistica",
    title: "Estadistica",
    icon: "fa-sitemap",
    class: "",
    new:2
  }
];

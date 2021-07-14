import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    IngresoComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'mercadoonline.us.auth0.com',
      clientId: '3jnEiQLc3IJ221fVuVENpDcGuf8wFOOQ',
      cacheLocation:'localstorage',
      useRefreshTokens:true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

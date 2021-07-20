import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { EmpresasComponent } from './empresas/empresas.component';
import { NewempresaComponent } from './empresas/newempresa/newempresa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

////angular material
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TarjetaComponent,
    EmpresasComponent,
    NewempresaComponent,
    LoadingComponent
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
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

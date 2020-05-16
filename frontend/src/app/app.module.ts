import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddprojectComponent } from './pages/addproject/addproject.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListhouseComponent } from './pages/listhouse/listhouse.component';
import { HousecardComponent } from './components/housecard/housecard.component';
import { HouseinfoComponent } from './components/houseinfo/houseinfo.component';
import { MapComponent } from './components/map/map.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddprojectComponent,
    ListhouseComponent,
    HousecardComponent,
    HouseinfoComponent,
    MapComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5G_9Kcd5KZWPOqqwNPYtNUfkUmCl67sg'
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

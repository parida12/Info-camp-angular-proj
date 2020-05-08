import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Package for navigation
import {RouterModule,Routes} from '@angular/router';
//Navigation end here

//for client to server communication
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//for clientside pagination
import{NgxPaginationModule} from 'ngx-pagination';

//for clientside filter
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import{FormsModule} from '@angular/forms';

//for sorting the records
import{Ng2OrderModule} from 'ng2-order-pipe';

//for form validation
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ContactComponent } from './contact/contact.component';
import { Array1Component } from './array1/array1.component';
import { Array2Component } from './array2/array2.component';
import { FooterComponent } from './footer/footer.component';
import { MyjsonComponent } from './myjson/myjson.component';
import { LocaljsonComponent } from './localjson/localjson.component';


//page routing block
const appRoot = [
 {path:'my-user',component:UserComponent},
 {path:'my-json',component:MyjsonComponent},//today
 {path:'my-Gallary',component:GallaryComponent},
 {path:'contact-us',component:ContactComponent},
 {path:'array-one',component:Array1Component },
 {path:'array-two',component:Array2Component},
 {path:'local-json',component:LocaljsonComponent},
 {path:'', redirectTo:'my-Gallary', pathMatch:'full'}//as default home page
               ];
//page routing end here


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GallaryComponent,
    TopnavComponent,
    ContactComponent,
    Array1Component,
    Array2Component,
    FooterComponent,
    MyjsonComponent,
    LocaljsonComponent,
  
  ],
  imports: [
    NgxPaginationModule, //for client side pagination
    Ng2SearchPipeModule,//filter
    FormsModule,//filter and validation
    Ng2OrderModule,//for sorting the records
    ReactiveFormsModule,//for form vlidation
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

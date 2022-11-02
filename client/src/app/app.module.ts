import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { BsDropdownModule, BsDropdownConfig  } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';


import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { ListsComponent } from './components/lists/lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberCardComponent } from './components/members/member-card/member-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberCardComponent,
    
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-center'
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    NgbModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

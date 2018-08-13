import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalOptions } from './components/home/modal.options';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    NgbdModalOptions,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
    ],
  providers: [NgbModule],
  bootstrap: [AppComponent],
  entryComponents:[NgbdModalOptions]
})
export class AppModule { }

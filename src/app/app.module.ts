import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MockComponent } from './mock_page/mock.component';
import { AppStateService } from './common/app-state.service';
import { PageNotFoundComponent } from './page_not_found/page-not-found.component';
import { SearchComponent } from './common/search/search.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MockComponent,
    PageNotFoundComponent,
    SearchComponent
  ],
  providers: [
    AppStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

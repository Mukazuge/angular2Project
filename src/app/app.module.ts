import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppStateService } from './common/app-state.service';
import { PageNotFoundComponent } from './page_not_found/page-not-found.component';
import { SearchComponent } from './common/search/search.component';
import { SpeechListComponent } from './common/speech-list/speech-list.component';
import { EditSpeechComponent } from './common/speech-edit/speech-edit.component';
import { SpeechService } from './common/speech.service';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { WarningModalComponent } from './common/warning-modal.component/warning-modal.component';

import { EscapeHtmlPipe } from './common/escape-html.pipe';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchComponent,
    SpeechListComponent,
    EditSpeechComponent,
    WarningModalComponent,
    EscapeHtmlPipe
  ],
  providers: [
    AppStateService,
    SpeechService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

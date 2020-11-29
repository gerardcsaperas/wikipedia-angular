import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultListComponent } from './result-list/result-list.component';
import { CleanStringTagsPipe } from './clean-string-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultListComponent,
    CleanStringTagsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

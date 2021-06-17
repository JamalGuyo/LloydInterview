import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

// routes
const routes: Routes = [{ path: '', component: SearchComponent }];

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

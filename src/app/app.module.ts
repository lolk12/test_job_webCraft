import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { PageNotFound } from "./page-not-found";

const routes: Route [] = [
    { path: '', component: ItemsComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: '**', component: PageNotFound }
];

@NgModule({
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemComponent,
        PageNotFound
    ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

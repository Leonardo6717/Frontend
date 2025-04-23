import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

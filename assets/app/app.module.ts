import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { AppNavbarComponent } from './navbar/navbar.component'
import { AppFooterComponent } from './footer/footer.component'

@NgModule({
    declarations: [
        AppComponent,
        AppNavbarComponent,
        AppFooterComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
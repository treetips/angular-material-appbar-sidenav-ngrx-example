import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./angular-material.module";

import { AppbarComponent } from "./components/appbar/";
import { SidenaviComponent } from "./components/sidenavi/";
import { HomeComponent } from "./components/home/";
import { DogComponent } from "./components/dog/";
import { CatComponent } from "./components/cat/";

import { reduceAppbar, reduceSidenavi } from "./reducers/";

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    SidenaviComponent,
    HomeComponent,
    DogComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    StoreModule.forRoot({
      appbar: reduceAppbar,
      sidenavi: reduceSidenavi
    }),
    environment.production
      ? []
      : // Note that you must instrument after importing StoreModule
        // https://github.com/ngrx/store-devtools
        StoreDevtoolsModule.instrument({
          maxAge: 10
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";

import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [{ path: "hello", component: HelloWorldComponent }];

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

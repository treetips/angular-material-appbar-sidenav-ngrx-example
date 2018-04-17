import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home";
import { DogComponent } from "./components/dog";
import { CatComponent } from "./components/cat";

const routes: Routes = [
  { path: "dog", component: DogComponent, pathMatch: "full" },
  { path: "cat", component: CatComponent, pathMatch: "full" },
  { path: "**", component: HomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

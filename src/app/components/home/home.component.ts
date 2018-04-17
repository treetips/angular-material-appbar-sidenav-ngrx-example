import { Component, OnInit } from "@angular/core";
import { routerAnimation } from "../../animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
  animations: [routerAnimation],
  host: { "[@routerAnimation]": "" }
})
export class HomeComponent implements OnInit {
  pageTitle = "home";

  constructor() {}

  ngOnInit() {}
}

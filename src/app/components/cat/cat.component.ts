import {Component, OnInit} from '@angular/core';
import {routerAnimation} from "../../animations";

@Component({
  selector: "app-cat",
  templateUrl: "./cat.component.html",
  styleUrls: ["./cat.component.sass"],
  animations: [routerAnimation],
  host: { "[@routerAnimation]": "" }
})
export class CatComponent implements OnInit {
  pageTitle = "cat";

  constructor() {}

  ngOnInit() {}
}

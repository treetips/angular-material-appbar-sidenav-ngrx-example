import {Component, OnInit} from "@angular/core";
import {routerAnimation} from "../../animations";

@Component({
  selector: "app-dog",
  templateUrl: "./dog.component.html",
  styleUrls: ["./dog.component.sass"],
  animations: [routerAnimation],
  host: {"[@routerAnimation]": ""}
})
export class DogComponent implements OnInit {
  pageTitle = "dog";

  constructor() {
  }

  ngOnInit() {
  }
}

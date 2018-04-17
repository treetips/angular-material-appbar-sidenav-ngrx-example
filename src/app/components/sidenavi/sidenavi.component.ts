import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as SidenaviAction from "../../actions/sidenavi.action";
import * as SidenaviReducer from "../../reducers/sidenavi.reducer";

@Component({
  selector: 'app-sidenavi',
  templateUrl: './sidenavi.component.html',
  styleUrls: ['./sidenavi.component.sass']
})
export class SidenaviComponent implements OnInit {

  constructor(
    private store: Store<SidenaviReducer.SidenaviState>,
  ) {
  }

  ngOnInit() {
  }

  handleClickMenu(event) {
    // サイドナビのモードがoverの時だけサイドナビを隠す
    this.store.dispatch(new SidenaviAction.HideOverSidenavi());
  }

}

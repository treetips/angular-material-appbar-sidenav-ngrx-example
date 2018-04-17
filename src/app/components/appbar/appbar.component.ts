import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as AppbarReducer from "../../reducers/appbar.reducer";
import * as SidenaviAction from "../../actions/sidenavi.action";
import * as SidenaviReducer from "../../reducers/sidenavi.reducer";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.sass']
})
export class AppbarComponent implements OnInit {

  appbarTitle$: Observable<string>;

  sidenaviMode$: Observable<string>;

  constructor(
    private appbarStore: Store<AppbarReducer.AppbarState>,
    private sidenaviStore: Store<SidenaviReducer.SidenaviState>,
  ) {
    this.appbarTitle$ = appbarStore.select(AppbarReducer.getAppbarTitle);
    this.sidenaviMode$ = sidenaviStore.select(SidenaviReducer.getSidenaviMode);
  }

  ngOnInit() {
  }

  toggleSidenav(event) {
    this.sidenaviStore.dispatch(new SidenaviAction.ToggleSidenavi());
  }

}

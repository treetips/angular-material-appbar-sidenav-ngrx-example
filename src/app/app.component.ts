import { Component, NgZone } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as AppbarAction from "./actions/appbar.action";
import * as SidenaviAction from "./actions/sidenavi.action";
import * as SidenaviReducer from "./reducers/sidenavi.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  sidenaviOpened$: Observable<boolean>;

  sidenaviMode$: Observable<string>;

  constructor(
    private ngZone: NgZone,
    private store: Store<SidenaviReducer.SidenaviState>,
  ) {
    window.onresize = (e) => {
      ngZone.run(() => {
        this.handleResizeWindow(window.innerWidth);
      });
    };
  }

  ngOnInit() {
    this.handleResizeWindow(window.innerWidth);
  }

  private handleResizeWindow(screenWidth: number) {
    if (800 < screenWidth) {
      // for pc screen
      this.store.dispatch(new SidenaviAction.SetPcSidenavi());
    } else {
      // for mobile screen
      this.store.dispatch(new SidenaviAction.SetMobileSidenavi());
    }

    // get sidenavi status from store
    this.sidenaviOpened$ = this.store.select(SidenaviReducer.getSidenaviOpened);
    this.sidenaviMode$ = this.store.select(SidenaviReducer.getSidenaviMode);
  }

  /**
   * handle change route
   * @param event
   */
  activateRouterOutlet(event : any) {
    // change appbar title
    this.store.dispatch(new AppbarAction.ChangeTitle(event.pageTitle));
  }

}

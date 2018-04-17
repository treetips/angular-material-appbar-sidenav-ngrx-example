import { animate, style, transition, trigger } from "@angular/animations";

export const routerAnimation = trigger("routerAnimation", [
  // route 'enter' transition
  transition(":enter", [
    // styles at start of transition
    style({
      width: "100%",
      position: "fixed",
      opacity: 0.2
    }),

    // animation and styles at end of transition
    animate(".7s", style({ opacity: 1 }))
  ])
]);

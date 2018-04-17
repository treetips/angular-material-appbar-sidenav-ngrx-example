import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SidenaviActionsUnion, SidenaviActionTypes } from "../actions";

export interface SidenaviState {
  opened: boolean;
  mode: string;
}

const initialState = {
  opened: true,
  mode: "side"
};

export function reduceSidenavi(
  state = initialState,
  action: SidenaviActionsUnion
) {
  switch (action.type) {
    case SidenaviActionTypes.SET_PC_SIDENAVI:
      return Object.assign({}, state, { opened: true, mode: "side" });
    case SidenaviActionTypes.SET_MOBILE_SIDENAVI:
      return Object.assign({}, state, { opened: false, mode: "over" });
    case SidenaviActionTypes.TOGGLE_SIDENAVI:
      return Object.assign({}, state, { opened: !state.opened });
    case SidenaviActionTypes.HIDE_OVER_SIDENAVI:
      if (state.mode === "over")
        return Object.assign({}, state, { opened: false });
  }
  return state;
}

export const getSidenaviState = createFeatureSelector<SidenaviState>(
  "sidenavi"
);
export const getSidenaviOpened = createSelector(
  getSidenaviState,
  (state: SidenaviState) => state.opened
);
export const getSidenaviMode = createSelector(
  getSidenaviState,
  (state: SidenaviState) => state.mode
);

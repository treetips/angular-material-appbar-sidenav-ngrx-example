import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppbarActionsUnion, AppbarActionTypes } from "../actions";

export interface AppbarState {
  title: string;
}

const initialState = {
  title: ""
};

export function reduceAppbar(state = initialState, action: AppbarActionsUnion) {
  switch (action.type) {
    case AppbarActionTypes.CHANGE_TITLE:
      return Object.assign({}, state, { title: action.title });
    default:
      return state;
  }
}

export const getAppbarState = createFeatureSelector<AppbarState>("appbar");
export const getAppbarTitle = createSelector(
  getAppbarState,
  (state: AppbarState) => state.title
);

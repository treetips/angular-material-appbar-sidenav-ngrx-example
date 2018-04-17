import { Action } from '@ngrx/store';

export enum SidenaviActionTypes {
  SET_PC_SIDENAVI = '[Sidenavi] Set pc sidenavi',
  SET_MOBILE_SIDENAVI = '[Sidenavi] Set mobile sidenavi',
  TOGGLE_SIDENAVI = '[Sidenavi] toggle sidenavi',
  HIDE_OVER_SIDENAVI = '[Sidenavi] hide over sidenavi',
}

export class SetPcSidenavi implements Action {
  readonly type = SidenaviActionTypes.SET_PC_SIDENAVI;
}

export class SetMobileSidenavi implements Action {
  readonly type = SidenaviActionTypes.SET_MOBILE_SIDENAVI;
}

export class ToggleSidenavi implements Action {
  readonly type = SidenaviActionTypes.TOGGLE_SIDENAVI;
}

export class HideOverSidenavi implements Action {
  readonly type = SidenaviActionTypes.HIDE_OVER_SIDENAVI;
}

export type SidenaviActionsUnion =
  SetPcSidenavi
  | SetMobileSidenavi
  | ToggleSidenavi
  | HideOverSidenavi;

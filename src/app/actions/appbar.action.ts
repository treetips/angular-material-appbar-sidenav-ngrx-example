import { Action } from '@ngrx/store';

export enum AppbarActionTypes {
  CHANGE_TITLE = '[Appbar] Change title',
}

export class ChangeTitle implements Action {

  readonly type = AppbarActionTypes.CHANGE_TITLE;

  constructor(
    public title: string
  ) {}

}

export type AppbarActionsUnion = ChangeTitle;

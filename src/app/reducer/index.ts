import { combineReducers } from 'redux';
import {counterReducer} from './counter';

export interface RootState {
  counter: number
}

export const reducers  = combineReducers<RootState>({
  counter: counterReducer
});
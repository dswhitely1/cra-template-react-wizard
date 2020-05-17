import {combineReducers} from 'redux';
import demo from './demo/demoReducer'

export const rootReducer = combineReducers({demo})

export type AppState = ReturnType<typeof rootReducer>
import { createReducer } from 'create-a-reducer';
import {Alert, DemoState, DemoTypes} from "./demoTypes";

const initialState: DemoState = {
    alerts: [],
    isLoading: false,
    errors: null
}

const demoStart = (state: DemoState) => ({...state, isLoading: true, errors: null, alerts: []})

const demoSuccess = (state: DemoState, payload: Alert[]) => ({...state, isLoading: false, errors: null, alerts: payload})

const demoFailure = (state: DemoState, payload: string) => ({...state, isLoading: false, errors: payload, alerts: []})

export default createReducer(initialState, {
    [DemoTypes.FETCH_WEATHER_ALERTS_START]: demoStart,
    [DemoTypes.FETCH_WEATHER_ALERTS_SUCCESS]: demoSuccess,
    [DemoTypes.FETCH_WEATHER_ALERTS_FAILURE]: demoFailure
})
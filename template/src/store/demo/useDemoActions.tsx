import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {DemoTypes} from "./demoTypes";

export const useDemoActions = () => {
    const dispatch = useDispatch()

    const fetchAlerts = useCallback(() => {
        dispatch({type: DemoTypes.FETCH_WEATHER_ALERTS_START})
        axios
            .get('https://api.weather.gov/alerts')
            .then(res => dispatch({type: DemoTypes.FETCH_WEATHER_ALERTS_SUCCESS, payload: res.data.features}))
            .catch(()=> dispatch({type: DemoTypes.FETCH_WEATHER_ALERTS_FAILURE, payload: "An Error has occurred."}))
    }, [dispatch])

    return {fetchAlerts}
}

export interface UseDemoActions {
    fetchAlerts: () => void
}
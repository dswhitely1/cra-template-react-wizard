export enum DemoTypes {
    FETCH_WEATHER_ALERTS_START = "FETCH_WEATHER_ALERTS_START",
    FETCH_WEATHER_ALERTS_SUCCESS = "FETCH_WEATHER_ALERTS_SUCCESS",
    FETCH_WEATHER_ALERTS_FAILURE = "FETCH_WEATHER_ALERTS_FAILURE",
}

export interface Alert {
    properties: {
        headline: string
        description: string
        instruction: string
    }
}

export interface DemoState {
    alerts: Alert[]
    isLoading: boolean
    errors: string | null
}
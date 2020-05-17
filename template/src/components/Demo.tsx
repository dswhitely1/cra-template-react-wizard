import React, {useContext, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {ActionsContext} from "../context/ActionsContext";
import {AppState} from "../store/reducer";
import {Alert} from "../store/demo/demoTypes";

function DemoContainer() {
    const actions = useContext(ActionsContext);
    const {isLoading, errors, alerts} = useSelector((state: AppState) => state.demo);

    useEffect(() => {
        actions?.demo.fetchAlerts()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (errors) {
        return <div>{errors}</div>
    }
    return (
        <div>
            <h1>Current Weather Alerts</h1>
            {alerts.map(({properties: {headline, instruction, description}}: Alert, id: number) => (
                <div key={id}>
                    <h2>{headline}</h2>
                    <h3>{instruction}</h3>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    )
}

export default DemoContainer
import React from 'react';
import {CssBaseline, Typography} from '@material-ui/core';
import {useActions} from "../store/useActions";
import {ActionsProvider} from "../context/ActionsContext";
import DemoContainer from "./Demo";


function App() {
    const actions = useActions()
    return (
        <ActionsProvider value={actions}>
            <CssBaseline/>
            <Typography variant="h1">Welcome to the React Wizard Template</Typography>
            <DemoContainer />
        </ActionsProvider>
    )
}

export default App;

import {createContext} from 'react';
import {Actions} from "../store/useActions";

export const ActionsContext = createContext<Actions>(null);
ActionsContext.displayName = "Actions"
export const ActionsProvider = ActionsContext.Provider
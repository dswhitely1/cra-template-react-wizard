import {UseDemoActions, useDemoActions} from "./demo/useDemoActions";

export const useActions = () => {
    const demo = useDemoActions()

    return {demo}
}

interface UseActions {
    demo: UseDemoActions
}

export type Actions = UseActions | null
import { useState } from "react";

export const useLocalStorage =(key, initialValue ) => {

    const [state, setState] = useState(() => {
        const perstistedStateSerialized = localStorage.getItem(key);
        if(perstistedStateSerialized) {
            const persistedState = JSON.parse(perstistedStateSerialized);

            return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
            setState(value);

            localStorage.setItem(key, JSON.stringify(value));
           
    };

    return [
        state,
        setLocalStorageState,

    ];
};


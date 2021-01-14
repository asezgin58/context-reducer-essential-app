import {useReducer} from 'react';
import StoreContext from '../Context';
import {initialStoreData, IStoreValue} from "../type";
import storeReducer from "../_reducers";

const StoreProvider = (props: any) => {
    const [store, dispatch] = useReducer(storeReducer, initialStoreData);

    const storeValue: IStoreValue = {
        store,
        dispatch
    };

    return (
        <>
            <StoreContext.Provider value={storeValue}>
                {props.children}
            </StoreContext.Provider>
        </>
    );
};

export default StoreProvider;

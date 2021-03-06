import {useReducer} from 'react';
import StoreContext from '../context';
import {IStoreValue} from "../type";
import {storeReducer, defaultStoreData, IStoreReducer} from "../_reducers";

const StoreProvider = (props: any) => {

    const [store, dispatch] = useReducer<IStoreReducer>(storeReducer, defaultStoreData);

    const storeValue: IStoreValue = {store, dispatch};

    return (
        <>
            <StoreContext.Provider value={storeValue}>
                {props.children}
            </StoreContext.Provider>
        </>
    );
};

export default StoreProvider;

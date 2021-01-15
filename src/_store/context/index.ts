import {createContext} from "react";
import {IStore} from "../type";
import {defaultStoreData} from '../_reducers';

const StoreContext: any = createContext<IStore>(defaultStoreData);
export default StoreContext;
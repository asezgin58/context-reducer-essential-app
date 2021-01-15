import {IAction} from "../_actions/type";
import {IStore} from "../type";

export type IStoreReducer = (state: IStore, action: IAction) => IStore;
import {IAuthor} from "./_reducers/author/type";
import {IUser} from "./_reducers/user/type";

export enum storeVarNames {
    author = 'author',
    users = 'users'
}

export interface IStore {
    [storeVarNames.author]: IAuthor;
    [storeVarNames.users]: IUser[];
}

export type IStoreValue = {
    store: IStore;
    dispatch: any;
}
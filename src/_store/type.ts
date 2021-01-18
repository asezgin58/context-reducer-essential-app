import {IAuthor} from "./_reducers/author/type";
import {IUser} from "./_reducers/user/type";

export interface IStore {
    author: IAuthor;
    users: IUser[];
}

export type IStoreValue = {
    store: IStore;
    dispatch: any;
}
import {FC} from "react";
import {Button} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import {IStoreContext, StoreContext} from "../../_store";
import {IUser} from "../../_store/_reducers";
import {useContextSelector} from "use-context-selector";

/**
 * Component File Description
 */
const Detail: FC<any> = () => {
    const {push}: any = useHistory();
    const {id}: any = useParams();
    const user: IUser = useContextSelector<IStoreContext, IUser>(StoreContext, ({store}: IStoreContext) => {
        return store.users.filter((item: IUser) => item.id === parseInt(id))[0];
    });

    return (
        <>
            <h1>User Detail</h1>
            <div className="row mb-4">
                <div className="col">
                    {user && <>
                        <div><strong>Id : </strong>{user.id}</div>
                        <div><strong>Name : </strong>{user.first_name}</div>
                        <div><strong>Surname : </strong>{user.last_name}</div>
                        <div><strong>Email : </strong>{user.email}</div>
                    </>}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button variant="contained" color="primary" onClick={() => push('/user')}>
                        Back to List
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Detail;
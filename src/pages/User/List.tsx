import {FC, useContext, useEffect} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import useAxios from "axios-hooks";
import {IStoreContext, StoreContext} from "../../_store";
import {deleteStoreUser, setStoreUsers} from "../../_store/_actions";
import {IUser} from "../../_store/_reducers";

/**
 * Component File Description
 */
const List: FC<any> = () => {
    const {push} = useHistory();
    const {store: {users}, dispatch}: IStoreContext = useContext<IStoreContext>(StoreContext);
    const [, usersRequest] = useAxios({
        url: 'https://reqres.in/api/users?per_page=12',
        method: 'get'
    }, {manual: true});

    const getUser = async () => {
        const {data, status} = await usersRequest();
        if (status === 200) {
            dispatch(setStoreUsers(data?.data));
        }
    };

    useEffect(() => {
        if (!users?.length) {
            getUser();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h1>User List</h1>
            <div className="row">
                <div className="col">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((item: IUser, index: number) => (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>{item.first_name}</TableCell>
                                        <TableCell>{item.last_name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell align="right" style={{width: 100}}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => push(`/user/detail/${item.id}`)}
                                            >Detail</Button>
                                        </TableCell>
                                        <TableCell align="right" style={{width: 100}}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => dispatch(deleteStoreUser(item.id))}
                                            >Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
};

export default List;
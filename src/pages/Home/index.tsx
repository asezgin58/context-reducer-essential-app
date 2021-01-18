import {FC} from "react";
import {IStoreContext, StoreContext} from "../../_store";
import {IAuthor} from "../../_store/_reducers";
import {useContextSelector} from "use-context-selector";

/**
 * Component File Description
 */
const Home: FC<any> = () => {
    const author: IAuthor = useContextSelector<IStoreContext, IAuthor>(StoreContext, ({store}: IStoreContext) => store.author);

    return (
        <>
            <h1>Welcome, {author.name} {author.surname}</h1>
        </>
    );
};

export default Home;
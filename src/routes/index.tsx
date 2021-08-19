import { Switch, Route, BrowserRouter } from "react-router-dom";
import AddGoods from '../pages/AddGoods';
import FindGoods from "../pages/FindGoods";

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
            </Route>
            <Route path='/add_goods'>
                <AddGoods/>
            </Route>
            <Route path='/find_goods'>
                <FindGoods/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
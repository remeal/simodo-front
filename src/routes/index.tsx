import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import EditGood from "../pages/EditGood";
import FindGoods from "../pages/AllItemsPage";

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
            </Route>
            <Route path='/render/create'>
                <CreatePage/>
            </Route>
            <Route path='/all'>
                <FindGoods/>
            </Route>
            <Route path='/render/read' component={EditGood}>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
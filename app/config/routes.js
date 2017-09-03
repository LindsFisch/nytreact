var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Search = require("../components/children/Search");
var Saved = require("../components/children/Saved");
var Query = require("../components/children/grandchildren/Query");
var Result = require("../components/children/grandchildren/Result");

module.exports = (
    <Router history={hashHistory}>

        <Route path = "/" component = {Main}>

            <Route path="Search" component={Search}>
                <Route path="Query" component={Query}/>
                <Route path="Result" component={Result}/>

                <IndexRoute component={Query}/>

            </Route>

            <Route path="Saved" component={Saved}/>

            <IndexRoute component={Search}/>


        </Route>
    </Router>
);
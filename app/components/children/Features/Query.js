// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Query = React.createClass({

    // Here we render the function
    render: function () {

        return (
            <div className="card">
                <h3 className="card-header">Search</h3>
                <div className="card-block">

                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Query;
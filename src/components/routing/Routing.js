import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
// import ContentContainer from '../navigation/ContentContainer';


import Nav from '../navigation/Nav';

function Routing() {
    return (
        <>

            <Nav />
            <div className="Routing">
                <Router>
                    <div className="inner-content">
                        <Switch>
                            <Route path="/" exact component={Homepage} />
                            <Route path="/me" exact component={Me} />
                        </Switch>
                    </div>
                </Router>
            </div>

        </>

    );
}

export default Routing;

function Me() {
    return (
        <div style={{
            backgroundColor: "green",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div>Hello Vanja</div>
        </div>
    )
}






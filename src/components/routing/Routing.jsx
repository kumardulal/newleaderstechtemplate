import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogDetailsPage from "../../pages/BlogDetailsPage";
import Blogs from "../../pages/Blogs";
import Contactus from "../../pages/Contactus";
import Homepage from "../../pages/Homepage";
import ProjectDetails from "../../pages/ProjectDetails";
import ProjectListPage from "../../pages/ProjectListPage";
// import ContentContainer from '../navigation/ContentContainer';
import Nav from "../navigation/Nav";

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
              <Route path="/contactus" exact component={Contactus} />
              <Route
                path="/projectlistpage"
                exact
                component={ProjectListPage}
              />
              <Route path="/blogs" exact component={Blogs} />
              <Route
                path="/blogs/blogdetails"
                exact
                component={BlogDetailsPage}
              />

              <Route
                path="/projectlist/projectdetails"
                exact
                component={ProjectDetails}
              />
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
    <div
      style={{
        backgroundColor: "green",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Hello Vanja</div>
    </div>
  );
}

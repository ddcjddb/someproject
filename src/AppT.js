import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./routes/SignUp/index";
import "./App.css";
import SignUpPage from "./routes/SignUp/Component/SignUpPage";
import PassWordLogIn from "./routes/LogIn/Component/PassWordLogIn";
import MessageLogIn from "./routes/LogIn/Component/MessageLogIn";
// import Footer from "./routes/SignUp/Component/Footer";

class AppT extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact component={App} />
          <Route path="/" exact component={SignUpPage} />
          <Route path="/loginpw" exact component={PassWordLogIn} />
          <Route path="/loginmsg" exact component={MessageLogIn} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default AppT;

import React from "react";
import Header from "../SignUp/Component/Header";
import Footer from "../SignUp/Component/Footer";

import "./Component/SignUpPage.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;

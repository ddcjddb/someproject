import React from "react";
import PhoneNumberInput from "../../Component/PhoneNumberInput";
import { Button } from "antd";
import { Link } from "react-router-dom";

class PassWordLogIn extends React.Component {
  render() {
    return (
      <div className="signup-content">
        <form action="" className="signup-content-form">
          <p className="signup-content-p">
            <Link to="/loginpw" className="pwlogin">
              密码登录
            </Link>
            <Link to="/loginmsg" className="msglogin">
              短信登录
            </Link>
          </p>
          <PhoneNumberInput />

          <label
            htmlFor="signup-password"
            className="signup-content-passwordlabel"
          >
            <span className="inputpw">输入密码</span>
          </label>
          <a className="fgpw">忘记密码？</a>
          <input
            type="text"
            id="signup-password"
            className="signup-content-password"
          />

          <Button className="signup-content-nextbutton" type="primary">
            登录
          </Button>
        </form>
      </div>
    );
  }
}

export default PassWordLogIn;

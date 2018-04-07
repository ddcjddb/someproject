import React from "react";
import PhoneNumberInput from "../../Component/PhoneNumberInput";
import AccrossNumberInput from "../../Component/AccrossNumberInput";
import { Button } from "antd";
import { Link } from "react-router-dom";

class MessageLogIn extends React.Component {
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
          <AccrossNumberInput />

          <Button className="signup-content-nextbutton" type="primary">
            登录
          </Button>
        </form>
      </div>
    );
  }
}

export default MessageLogIn;

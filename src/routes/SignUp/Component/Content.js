import React from "react";
import AccrossNumberInput from "../../Component/AccrossNumberInput";
import PhoneNumberInput from "../../Component/PhoneNumberInput";
import { Button } from "antd";

class Content extends React.Component {
  render() {
    return (
      <div className="signup-content">
        <form action="" className="signup-content-form">
          <p className="signup-content-p">注册</p>
          <PhoneNumberInput />
          <AccrossNumberInput />

          <label
            htmlFor="signup-password"
            className="signup-content-passwordlabel"
          >
            设置密码
          </label>
          <input
            type="text"
            id="signup-password"
            className="signup-content-password"
          />

          <p className="signup-makepassword1">
            密码应包括大小写字母、数字和符号，密码长度≧8位字符
          </p>
          <p className="signup-makepassword2">
            点击“注册”，即表示您同意<a href="">《嘟嘟协议》</a>{" "}
          </p>

          <Button className="signup-content-nextbutton" type="primary">
            注册
          </Button>
        </form>
      </div>
    );
  }
}

export default Content;

import React from "react";
import { Button } from "antd";

const AccrossNumberInput = () => (
  <div>
    <label htmlFor="signup-crossnumber" className="signup-content-phonenumber">
      请输入验证码
    </label>
    <input
      type="text"
      id="signup-crossnumber"
      className="signup-content-inputcrossnumber"
    />
    <Button className="signup-content-inputcrossbutton" type="primary">
      获取验证码
    </Button>
  </div>
);

export default AccrossNumberInput;

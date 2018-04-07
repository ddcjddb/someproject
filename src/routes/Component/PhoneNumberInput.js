import React from "react";

const PhoneNumberInput = () => (
  <div>
    <label htmlFor="signup-phone" className="signup-content-phonenumber">
      请输入手机号码
    </label>
    <input
      type="number"
      autoComplete="tel-national"
      id="signup-phone"
      className="signup-content-inputphonenumber"
    />
  </div>
);

export default PhoneNumberInput;

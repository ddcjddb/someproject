import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="signup-header">
    <i className="signup-icon" href="./tubiao.png" alt="图标" />
    <p className="signup-p">嘟嘟超级大豆包</p>
    <Link to="/loginpw" exact="true" className="signup-a2">
      登录
    </Link>
    <Link to="/" exact="true" className="signup-a1">
      已有账号？
    </Link>
    <p className="signup-phone-p">188 8888 8888</p>
  </div>
);

export default Header;

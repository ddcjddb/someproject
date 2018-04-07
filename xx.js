import React, { Component } from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { Field, reduxForm } from "redux-form"

import Button from "comps/p/Button"
import TextInput from "comps/p/TextInput"

import PasswordShownSvg from "icons/g_seen.svg"
import PasswordHiddenSvg from "icons/g_unseen.svg"

import "styles/SignUp"
import "styles/TextInput"

import {
  isPhoneNum,
  isPasswordComplexEnough,
} from "../../../../server/src/utils/validation"

const askForVerificationCodeMutation = gql`
  mutation askForVerificationCode($phoneNum: String!) {
    askForVerificationCode(phoneNum: $phoneNum)
  }
`

class ButtonWrapper extends Component {
  state = {
    codeBtnText: "获取验证码",
    codeBtnDisabled: false,
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  handleInternalClick = e => {
    // check if has some errors
    // console.warn("e", e)
    // e.persist()
    // e.preventDefault()
    const { genericErr } = this.props
    if (genericErr && genericErr.phone) return
    // console.log("-----")

    // return
    // this.props.handleSendCodeClick()
    // this.second = 59

    // this.setState(state => ({
    //   codeBtnDisabled: true,
    // }))

    // this.timer = setInterval(() => {
    //   if (this.second === 42) {
    //     clearInterval(this.timer)
    //     return this.setState({
    //       codeBtnText: "获取验证码",
    //       codeBtnDisabled: false,
    //     })
    //   }

    //   this.setState({
    //     codeBtnText: `${this.second--}s后重新获取`,
    //   })
    // }, 1000)
  }

  render() {
    const { codeBtnDisabled } = this.state

    return (
      <Button
        className="ty-textinput-input-button"
        onClick={this.handleInternalClick}
        disabled={codeBtnDisabled}
      >
        {this.state.codeBtnText}
      </Button>
    )
  }
}

class SignUp extends React.Component {
  state = {
    passwordType: "password",
  }

  handleSvgClick = () => {
    this.setState(prevState => ({
      passwordType: prevState.passwordType === "password" ? "text" : "password",
    }))
  }

  doSendCode = async values => {
    return
    // try {
    //   await this.props.mutate({
    //     mutation: askForVerificationCodeMutation,
    //     variables: {
    //       phoneNum: values.phone,
    //     },
    //   })
    // } catch (error) {
    //   // error occurs
    // }
  }

  handleSendCodeClick = () => {
    this.props.handleSubmit(values => this.doSendCode(values))()
  }

  renderPhoneInput = ({
    input,
    label,
    type,
    meta: { touched, error, waring, dirty, active },
  }) => {
    return (
      <TextInput
        {...input}
        type={type}
        label={label}
        error={error}
        touched={touched}
        active={active}
      />
    )
  }

  renderCodeInput = ({
    genericErr,
    input,
    label,
    type,
    meta: { touched, error, waring, active },
  }) => {
    return (
      <TextInput
        {...input}
        type={type}
        label={label}
        error={error}
        active={active}
      >
        <ButtonWrapper
          handleSendCodeClick={this.handleSendCodeClick}
          error={error}
          genericErr={genericErr}
        />
      </TextInput>
    )
  }

  renderPassInput = ({
    handleSvgClick,
    input,
    label,
    type,
    meta: { touched, error, active, dirty, valid },
  }) => {
    return (
      <div>
        <TextInput
          {...input}
          label={label}
          type={type}
          className="ty-signup-password-info"
          error={error}
          touched={touched}
          active={active}
        >
          {type !== "password" ? (
            <PasswordShownSvg
              className="ty-textinput-icon"
              onClick={this.handleSvgClick}
            />
          ) : (
            <PasswordHiddenSvg
              className="ty-textinput-icon"
              onClick={this.handleSvgClick}
            />
          )}
        </TextInput>
        {(active || dirty) && (
          <p className="ty-signup-passinfo">
            密码应包括大小写字母数字和符号, 密码长度≧8位字符
          </p >
        )}
      </div>
    )
  }

  render() {
    const { handleSubmit, invalid, error } = this.props
    // console.warn(invalid)a

    // console.warn("---error", error)
    const genericErr = error

    return (
      <div className="ty-signup">
        <h1 className="ty-signup-h1">注册</h1>
        <form onSubmit={handleSubmit}>
          <Field
            name="phone"
            type="number"
            component={this.renderPhoneInput}
            label="请输入电话"
          />
          <Field
            name="veriCode"
            type="number"
            component={this.renderCodeInput}
            label="请输入验证码"
            genericErr={genericErr}
          />
          <Field
            name="password"
            type={this.state.passwordType}
            component={this.renderPassInput}
            label="请输入密码"
          />
          <p className="ty-signup-agreeinfo">
            点击"注册", 即表示您同意{" "}
            < a href=" " className="ty-signup-agreeinfo-a">
              《众易用户协议》
            </ a>
          </p >
          <Button onClick={this.handleRegister} disabled={invalid}>
            注册
          </Button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  const { phone, password, veriCode } = values
  // console.warn("error code vakye", veriCode)
  if (!values.phone) {
    errors.veriCode = "有错误"
    errors.phone = "电话号码不正确"
    errors._error = {
      phone: "请填写电话号码",
    }
  } else if (!isPhoneNum(phone)) {
    errors.veriCode = "有错误"
    errors.phone = "电话号码不正确"
    errors._error = {
      phone: "电话号码格式不正确",
    }
  }

  if (!isPasswordComplexEnough(password)) {
    errors.password = "密码格式不正确"
    errors._error = {}
  }

  if (veriCode && veriCode.length !== 6) {
    errors.veriCode = "请填写正确的验证码"
  }
  // console.warn(errors)
  return errors
}

const A = reduxForm({
  form: "signup_form",
  validate,
})(SignUp)

const B = graphql(askForVerificationCodeMutation)(A)

export default B;
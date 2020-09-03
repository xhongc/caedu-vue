<template>
  <div class="row">
    <div style="text-align: center;overflow: auto;margin-top: 12%;">
      <span style="padding: 0;font-weight: bold;">手机号登录</span>
    </div>

    <div style="text-align: center;margin: 3rem 0 2rem 0;">
      <img src="@/assets/edu-logo.png" style="width: 50%;">
    </div>

    <div>

      <div id="login-form" class="flex-father">
        <div class="flex-row">
          <span style="color:#cacaca;position: absolute;left: 12px;top: 0.8rem;">+86 |</span>
          <input class="phone-input" type="text" placeholder="请输入手机号"/>
        </div>
        <div class="flex-row">
          <input class="password-input" type="password" placeholder="请输入密码"/>
        </div>
        <div class="flex-row">
          <div id="captcha" class="geet">
            <p id="wait" class="show">正在加载验证码......</p>
          </div>
        </div>
        <p id="notice" style="display: none">请先完成验证</p>
        <div class="flex-row" style="width: 100%">
          <a href="#"
             style="font-size: 12px;float: right;margin-right: 15%;color: black;">忘记密码？</a>
        </div>
        <div class="flex-row">
          <button id="login">登录</button>
        </div>
        <div class="flex-row">
          <p style="text-align: center;font-size: 14px"><a href="#">免密登录</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
.row {
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.flex-father {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.flex-row {
  width: 65%;
  height: 40px;
  margin-bottom: 20px;
  position: relative;
  /*margin-left: 20%;*/
}

.phone-input, .password-input {
  height: 100%;
  background-color: #f1f1f1;
  border-radius: 30px;
  width: 75%;
  box-shadow: none;
  border: 1px solid white;
  padding-left: 25%;
  outline:none;
}
input:hover{
  border: 1px solid gray;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.geet {
  height: 100%;
  background-color: #f1f1f1;
  border-radius: 30px;
  width: 100%;
  box-shadow: none;
  border: 1px solid white;
}

button {
  padding: 0.875rem 0;
  background-color: #56b1ef;
  color: white;
  border-radius: 30px;
  width: 100%;
  border: 1px solid white;
  font-size: 15px;
  outline:none;
}

a {
  text-decoration: none;
}
</style>

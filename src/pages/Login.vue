<template>
  <div class="row">
    <div style="text-align: center;overflow: auto;margin-top: 12%;">
      <span style="padding: 0;font-weight: bold;">手机号登录</span>
    </div>

    <div style="text-align: center;margin: 3rem 0 2rem 0;">
      <img src="#" style="width: 50%;">
    </div>

    <div>
      <span style="color: #cacaca;position: relative;left: 20%;top: 2.2rem;">+86 |</span>
      <form id="login-form">
        <input class="phone-input" type="text" placeholder="请输入手机号"/>
        <input class="password-input" type="password" placeholder="请输入密码" style="padding-left: 10%;"/>
        <div>
          <div id="captcha" class="geet">
            <p id="wait" class="show">正在加载验证码......</p>
          </div>
        </div>
        <p id="notice" class="hide">请先完成验证</p>
      </form>
      <a href="#"
         style="font-size: 12px;float: right;margin-right: 15%;color: black;">忘记密码？</a>

      <button id="login">登录</button>
      <p style="text-align: center;font-size: 14px;margin-top: 1rem;"><a href="#">免密登录</a></p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>

<template>
  <div class="login">
    <scroll
      class="content"
      ref="scroll"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <div class="scroll_con">
        <div class="scroll_c">
          <list-top slot="header" class="clearfix" text="佳御智慧安防公众号" />
          <el-tabs v-model="activeName" type="card">
            <!--@tab-click="handleClick"-->
            <el-tab-pane label="短信登录">
              <el-form
                :model="Register"
                ref="RegisterForm"
                label-width="0"
                class="RegisterForm"
              >
                <el-form-item prop="phone">
                  <el-input
                    v-model="Register.phone"
                    placeholder="请输入手机号"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="验证码" class="code">
                  <el-input
                    v-model="Register.sendcode"
                    placeholder="请输入验证码"
                  ></el-input>
                  <el-button
                    type="button"
                    @click="doGetCode"
                    :disabled="disabled"
                    :class="{ active: count !== 0 }"
                    >{{ count === 0 ? "获取验证码" : count + "s" }}
                  </el-button>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="doLogin">提交</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="密码登录">
              <el-form
                :model="Register"
                ref="RegisterForm"
                label-width="0"
                class="RegisterForm"
              >
                <el-form-item prop="phone">
                  <el-input
                    v-model="Register.userName"
                    placeholder="请输入账号"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="验证码" class="password">
                  <el-input
                    v-model="Register.passWord"
                    placeholder="请输入密码"
                    show-password
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="passLogin">提交</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import ListTop from "content/listTop/listTop";
import Scroll from "@/components/common/scroll/Scroll";

import validators from "@/common/validators";
import { Toast } from "mint-ui";

import { pLogin, sendSms, codeLogin } from "network/login";
import { setCookie } from "@/common/common"

export default {
  name: "login",
  data() {
    return {
      Register: {
        phone: "",
        sendcode: "",
        passWord: "test",
        userName: "test",
      },
      disabled: false,
      count: 0,
      time: 0,
      activeName: "",
    };
  },
  methods: {
    //密码登录
    passLogin() {
      let userName = this.Register.userName;
      let passWord = this.Register.passWord;
      pLogin(userName, passWord).then((res) => {
        if (res.rows) {
          if (res.success === true) {
            this.$store.commit("updateUser", res.rows[0]);
            localStorage.setItem("userDate", JSON.stringify(res.rows[0]));
            // localStorage.setItem("isBinding", "true");
            setCookie("isBinding", "true")
            this.$router.replace({ path: "/", force: true });
          }
        }
      });
    },

    //手机验证发送验证码
    doGetCode: function () {
      this.Register.sendcode = "";
      if (this.count === 0) {
        if (this.Register.phone.trim() === "") {
          Toast("请输入手机号");
          return;
        } else if (!validators.mobile(this.Register.phone)) {
          this.Register.phone = "";
          Toast("手机号不正确");
          return;
        } else {
          this.countDown(60);
          sendSms(this.Register.phone).then((res) => {
            console.log(res);
            if (res.success === true) {
              Toast("注册码已发送");
              this.disabled = true;
            } else {
              Toast(res.message);
            }
          });
        }
      }
    },
    //60S倒计时
    countDown: function (val) {
      setTimeout(() => {
        val -= 1;
        this.count = val;
        // console.info(val)
        if (val > 0) {
          this.countDown(val);
        } else if (val == 0) {
          this.disabled = false;
        }
      }, 1000);
    },
    //点击登录
    doLogin: function () {
      if (this.Register.phone.trim() === "") {
        Toast("请输入手机号");
        return;
      } else if (!validators.mobile(this.Register.phone)) {
        this.Register.phone = "";
        Toast("手机号不正确");
        return;
      } else if (this.Register.sendcode.trim() === "") {
        Toast("请输入验证码");
        return;
      }
      codeLogin(this.Register.phone, this.Register.sendcode)
        .then((res) => {
          if (res.rows) {
            if (res.success === true) {
              console.info("login--用户绑定成功" + JSON.stringify(res.rows));
              this.$store.state.userDate = res.rows;
              localStorage.setItem("userDate", JSON.stringify(res.rows));
              // localStorage.setItem("isBinding", "true");
              setCookie("isBinding", "true")
              this.$router.replace({ path: "/", force: true });
            }
          }
        });
    },
    submitForm() {},
    loadMore() {},
  },
  components: {
    ListTop,
    Scroll,
  },
};
</script>

<style scoped lang="less">
.scroll_c /deep/ .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
  .el-tabs__nav {
    width: 100%;
    display: flex;
    div {
      flex: 1;
      text-align: center;
    }
    .el-tabs__item.is-active {
      border-bottom-color: var(--btn-color1);
      color: var(--btn-color1);
    }
  }
}
form {
  width: 80%;
  margin: auto;
  margin-top: 15px;
  .code {
    .el-input {
      width: 55%;
      border-radius: 0px;
      float: left;
      display: inline-block;
    }
    .el-button {
      width: 45%;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-left: 0px;
      float: left;
      display: inline-block;
    }
  }
  .el-button--primary {
    width: 100%;
    background-color: var(--color-high-text);
    border: none;
    color: #000;
  }
}

.login {
  height: 100vh;
}
.content {
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
}
.card {
  width: 96%;
}
.scroll_con {
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
}
.scroll_c {
  width: 96%;
  margin: 0 auto;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #c3bcbc;
}
</style>

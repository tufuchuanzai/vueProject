<template>
  <el-form
    :model="form"
    status-icon
    :rules="rules"
    ref="form"
    label-width="100px"
    class="login-container"
  >
    <h3 class="login_title">系统登陆</h3>
    <el-form-item
      label="用户名"
      label-width="80px"
      prop="username"
      class="username"
    >
      <el-input
        type="input"
        v-model="form.username"
        auto-complete="off"
        placeholder="请输入账号"
      ></el-input>
    </el-form-item>

    <el-form-item label="密码" label-width="80px" prop="password">
      <el-input
        type="password"
        v-model="form.password"
        auto-complete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item class="login_submit">
      <el-button
        type="primary"
        @click="login(form.username, form.password)"
        class="login_submit"
        >登陆</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            message: "用户名长度不能小于3位",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login(name, password) {
      this.$http
        .get(`/login`, {
          params: {
            name: name,
            password: password,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            return new Promise((resolve) => {
              resolve(res.data);
            });
          } else {
            return new Promise(resolve, (reject) => {
              reject("错误");
            });
          }
        })
        .then(
          (res) => {
            this.$message({
              type: "success",
              message: "登录成功",
            });
            this.$store.state.user.token = res;
            let name = "mycookie";
            let value = "123";
            let exp = new Date();
            exp.setTime(exp.getTime() + 60 * 5000); //过期时间 5分钟
            document.cookie =
              name + "=" + escape(value) + ";expires=" + exp.toGMTString();
            console.log(document.cookie);
            ;

            this.$router.push({
              name: "home",
            });
          },
          () => {
            this.$message({
              type: "error",
              message: "账号和密码输入错误,请重试",
            });
          }
        );

     
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login_submit {
  margin: 10px auto 0 auto;
}
</style>
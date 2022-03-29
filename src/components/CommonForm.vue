<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名:">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="性别:">
      <el-select v-model="form.sex" placeholder="请选择性别">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="宿舍:">
      <el-input v-model="form.room"></el-input>
    </el-form-item>
    <el-form-item label="班级:">
      <el-input v-model="form.class"></el-input>
    </el-form-item>
    <el-form-item label="年龄:">
      <el-input v-model="form.age"></el-input>
    </el-form-item>
    <el-form-item label="电话:">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-button @click="changeisshow()">取消</el-button>
    <el-button type="primary" @click="submits(form)">确定</el-button>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        room: "",
        class: "",
        age: "",
        phone: "",
        sex: "",
      },
    };
  },
  methods: {
    changeisshow() {
      this.$store.state.isshow = false;
      this.empty();
    },
    submits(form) {
      if (this.$store.state.SubmitOrEdit == 1) {
        this.$http
          .get(`/insert`, {
            params: {
              name: form.name,
              room: form.room,
              class: form.class,
              age: form.age,
              phone: form.phone,
              sex: form.sex,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              
            } else {
              alert("插入失败");
            }
            this.changeisshow();
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "插入成功",
            });

            this.$router.go(0);
            this.$store.state.selectedname = "";
          });
      }

      if (this.$store.state.SubmitOrEdit == 2) {
        
        this.$http
          .get(`/change`, {
            params: {
              oldName: this.$store.state.selectedname,
              newName: form.name,
              room: form.room,
              class: form.class,
              age: form.age,
              phone: form.phone,
              sex: form.sex,
            },
          })
          .then((res) => {
            if (res.status == 200) {
            } else {
              alert("修改失败");
            }
            this.changeisshow();
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "修改成功",
            });
            console.log(res);
            this.$router.go(0);
          });
      }
    },
    empty() {
      this.form.name = "";
      this.form.room = "";
      this.form.class = "";
      this.form.age = "";
      this.form.phone = "";
      this.form.sex = "";
    },
  },
};
</script>
<style lang='less' scoped>
.el-input {
  width: 200px;
  float: left;
}
.el-select {
  float: left;
}
.el-form {
  height:450px;
}
</style>
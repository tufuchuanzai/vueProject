<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="this.$store.state.isshow"
      :show-close="false"
    >
      <common-form></common-form>
    </el-dialog>

    <!-- 罪魁祸首 -->

    <div class="manage-header">
      <el-button type="primary" @click="addUser">+新增</el-button>
    </div>

    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></common-table>
  </div>
</template>
<script>
import CommonForm from "@/components/CommonForm.vue";

import CommonTable from "@/components/CommonTable.vue";
export default {
  name: "User",
  components: {
    CommonForm,
    CommonTable,
  },
  data() {
    return {
      operateType: "add",

      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchFrom: {
        keyword: "",
      },
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "class",
          label: "班级",
        },
        {
          prop: "phone",
          label: "电话",
        },
        {
          prop: "room",
          label: "宿舍",
          width: 200,
        },
        {
          prop: "date",
          label: "日期",
          width: 320,
        },
        {
          prop: "age",
          label: "年龄",
          width: 320,
        },
        {
          prop: "sex",
          label: "性别",
          width: 320,
        },
      ],
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    queryData() {
      this.$http.get(`/data`).then((res) => {
        this.tableData = res.data;
        console.log(this.$router.name)
      });
    },

    addUser() {
      this.$store.state.SubmitOrEdit = 1;
      this.$store.state.isshow = !this.$store.state.isshow;
    },
    editUser(row) {
      this.$store.state.selectedname = row.name;
      this.$store.state.selectedclass = row.class;
      this.$store.state.selectedsex = row.sex;
      this.$store.state.selectedroom = row.room;
      this.$store.state.selectedphone = row.phone;
      this.$store.state.selectedage = row.age;
      this.$store.state.SubmitOrEdit = 2;
      this.operateType = "edit";

      this.$store.state.isshow = true;
      this.operateForm = row;
    },
    delUser(row) {
      this.$store.state.selectedname = row.name;

      this.$confirm("此操作将永久删除该数据,是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$http
          .get("/delete", {
            params: { name: this.$store.state.selectedname },
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功",
            });
            this.$router.go(0);
          });
      });
    },
  },
  created() {
    this.queryData();
  },
};
</script>
<style lang="less" >

.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-dialog{
  position: positive;
  left: 400px;
}

</style>

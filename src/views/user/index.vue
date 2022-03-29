<template>
  <div class="manage">
  

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
          prop: "password",
          label: "密码",
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
      this.$http.get(`/root`).then((res) => {
        this.tableData = res.data;
        
      });
    },

    addUser() {
      this.$message({
              type: "error",
              message: "您无权操作此项",
            });
      
    },
    editUser(row) {
      this.$message({
              type: "error",
              message: "您无权操作此项",
            });
    },
    delUser(row) {
     this.$message({
              type: "error",
              message: "您无权操作此项",
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
  position: absolute;
}

</style>

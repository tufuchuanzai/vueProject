<template>
  <div class="common-table">
    <el-table :data="tableData" height="670px" stripe border>
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        align="center"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180" align="center">
        <template slot-scope="scope">
          <!-- scope.row 捕捉到了插入的data数据 而且是每一行的 -->
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style lang="less" scoped>
.common-table {
  // 小bug 窗口大小有问题
  background-color: #fff;
  position: relative;
  top: 2px;
}
.el-table-column {
  width: 15%;
  height: 20px;
}
</style>

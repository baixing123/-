<template>
<div id="box1">
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="user_name"
      label="姓名"
      width="220">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="注册日期"
      width="220">
    </el-table-column>
    <el-table-column
      prop="city"
      label="地址"
       width="220">
    </el-table-column>
  </el-table>
  </div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  #box1 {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>

<script>
  import axios from "axios";
  // import Header from "./header";
  export default {
       methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [],
        list: "",
        currentPage1: 1
      };
    },
    // components: {
    //   Header
    // },
    created() {
      axios.get("https://elm.cangdu.org/admin/all?offset=0&limit=20").then(item => {
          console.log(item.data.data);
          this.tableData = item.data.data;
        });
      // console.log(this.table)
    //   this.list = this.$route.params.headername;
    },
    // methods: {
    //   handleEdit(index, row) {
    //     console.log(index, row);
    //   },
    //   handleDelete(index, row) {
    //     console.log(index, row);
    //   },
    //   handleSizeChange(val) {
    //     console.log(`每页 ${val} 条`);
    //   },
    //   handleCurrentChange(val) {
    //     console.log(`当前页: ${val}`);
    //     axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset"+"="+this.num*20+"&limit=20").then(item => {
    //       console.log(item.data);
    //       this.tableData=item.data
    //     });
    //   }
    // }
  };
</script>
<style scoped>
 
</style>

<template>
  <div id="box1">
    <!--<Header :list="list"></Header>-->
    <el-table :data="table" style="width: 100%">

        <el-table-column label="" width="80">

         <i class="el-icon-arrow-right"></i>
      </el-table-column>

      <el-table-column label="食品名称" width="280" property="name">


      </el-table-column>
      <el-table-column label="食品介绍" width="240" property="address">


      </el-table-column>
      <el-table-column label="评分" width="240" property="rating">




      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button


          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        background
        layout="total,prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>






<script>
  import axios from "axios";
  // import Header from "./header";
  export default {
    data() {
      return {
        table: [],
        list: "",
        currentPage1: 1
      };
    },
    // components: {
    //   Header
    // },
    created() {
      axios.get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined").then(item => {
          console.log(item.data);
          this.table = item.data;
        });
      // console.log(this.table)
      this.list = this.$route.params.headername;
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset"+"="+this.num*20+"&limit=20").then(item => {
          console.log(item.data);
          this.tableData=item.data
        });
      }
    }
  };
</script>






<style>
  #box1 {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container>
          <el-header style="height: 80px; background: #007082; padding: 0"
            ></el-header>
          <el-main>
            <div class="main-container">
              
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  import SideBar from "@/components/Sidebar.vue";


  export default {
    name: "Dashboard",
  
    data() {
      return {
        jobs: [],
        applicants: [],
        candidates: [],
      };
    },
    components: {
      SideBar,
    
    },
   
  };
  </script>
  
  <style lang="scss">
  
  .card-container {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
  }
  .card-info {
    border: 1px solid #e9e9e9;
    width: 32%;
    background: white;
    border-radius: 7px;
    box-shadow: 2px 4px 4px rgb(33 47 63 / 10%);
  }
  .card-info .card-info-header {
    font-size: 27px;
    font-weight: 550;
    background: #088295;
    color: white;
    padding: 15px;
    border-radius: 8px;
  }
  .card-info span.anticon {
    font-size: 100px;
  }
  .card-info-content {
    padding: 30px;
  }
  .card-info-content div {
    padding-top: 20px;
    font-size: 50px;
    font-weight: 550;
    color: #2c3e50;
    padding-bottom: 20px;
  }
  .el-col.el-col-8.name {
    font-size: 30px !important;
    font-weight: 550;
    margin: 20px auto;
  }
  </style>
  
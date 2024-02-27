<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container style="background-color: #f9f8f8;">
          <el-main>
            <div class="main-container">
                <el-row class="title">
                    <el-col :span="17"><h1>Adding words in course</h1></el-col>
                </el-row>
                <el-row style="margin-top: 20px;" v-for="i in num_level" :key="i">
                   <el-col :span="1"></el-col>
                   <el-col :span="22">
                        <el-card>
                            <div class="card-header" >
                                <el-row>
                                    <el-col><span style="font-weight: 600; ">Level 1 : Level Basic</span></el-col>
                                </el-row>
                                <el-row :span="4"><el-button class="button" plain type="success" @click="num_word=num_word+1" style="margin-right: 10px;">Add new word</el-button></el-row>
                                
                            </div>
                            <el-row :gutter="10" style="margin-top: 10px; font-weight: 600; font-family: SVN-Poppins;">
                                <el-col :span="4">Words</el-col>
                                <el-col :span="4">Mean</el-col>
                                <el-col :span="4">Description</el-col>
                                <el-col :span="4">Example</el-col>
                                <el-col :span="4">Image</el-col>
                                <el-col :span="4">Audio</el-col>
                            </el-row>
                            <div v-for="index in num_word" :key="index">
                              
                            <el-row :gutter="10" style="margin-top: 10px;">
                                <el-col :span="4"><el-input ></el-input></el-col>
                                <el-col :span="4"><el-input ></el-input></el-col>
                                <el-col :span="4"><el-input ></el-input></el-col>
                                <el-col :span="4"><el-input ></el-input></el-col>
                                <el-col :span="4"><el-input type="file" ></el-input></el-col>
                                <el-col :span="4"><el-input type="file" ></el-input></el-col>
                            </el-row>
                            </div>
                        </el-card>

                    </el-col>
                    <el-col :span="1"></el-col>

                </el-row>
            
                <el-button type="primary"  @click="num_level = num_level +1" style="margin: 50px;">Add new level</el-button>
                <el-button type="primary"  style="float: right; margin: 50px;">Save</el-button>
              
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
       num_word :1,
       num_level :1,
      };
    },
    components: {
      SideBar,
    
    },
    methods:{
        searchCourse(){
            document.getElementById("search_course").style.borderBottom = "2px solid rgb(0, 0, 139)";
            console.log("hi")
        }
    },
   
  };
  </script>
  
  <style lang="scss">
    #search_course{
        height: 36px;
        padding: 7px 0;
        font-size: 14px!important;
        -webkit-text-fill-color: #495057!important;
        padding-right: 30px;
        display: block;
        flex: 1;
        border: none;
        background: 0 0;
        transition: .4s cubic-bezier(.25,.8,.25,1);
        transition-property: font-size,padding-top,color;
        font-family: inherit;
        font-size: 16px;
        line-height: 32px;
        margin-bottom: 20px;
        outline: none;

      
    }

    .box-card {
        width: 480px;
        background-color: green;
    }

    .avatar-uploader .avatar {
        width: 178px;
        height: 178px;
        display: block;
        }

        .avatar-uploader .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
        }

        .avatar-uploader .el-upload:hover {
        border-color: var(--el-color-primary);
        }

        .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        text-align: center;
        }
    .label-create{
        font-weight: 600;
        font-size: 18px;
        margin-top: 10px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        height: 50px;
        }
  </style>
  
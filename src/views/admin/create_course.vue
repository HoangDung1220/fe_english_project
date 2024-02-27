<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container style="background-color: #f9f8f8;">
          <el-main>
            <div class="main-container">
                <el-row class="title">
                    <el-col :span="17"><h1>Create a Course</h1></el-col>
                </el-row>
                <el-row style="margin-top: 20px;">
                   <el-col :span="3"></el-col>
                   <el-col :span="18">
                        <el-card>
                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center label-create"
                                    >Image</span
                                >
                                </el-row>
                                <el-row>
                                <el-upload
                                    class="avatar-uploader w-50 m-2"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload"
                                >
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                                </el-upload>
                            </el-row>
                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center  label-create "
                                    >Title</span
                                >
                                <el-input
                                    v-model="input1"
                                    class="w-50 m-2"
                                    placeholder="Input title"
                                   
                                />
                            </el-row>
                            <el-row> <el-text tag="p" class="w-50 m-2">Naming your course well will help other learners find it.</el-text></el-row>
                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center label-create"
                                    >Description</span
                                >
                                <el-input
                                    v-model="textarea1"
                                    class="w-50 m-2"
                                    :rows="5"
                                    type="textarea"
                                    placeholder="Please input"
                                />
                            </el-row>
                            <el-row> <el-text tag="p" class="w-50 m-2">Keep the description of the course in the language of what the learners speak.</el-text></el-row>


                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center label-create"
                                    >Tag</span
                                >
                                <el-input
                                    v-model="input1"
                                    class="w-50 m-2"
                                    placeholder="Input tag"
                                   
                                />
                            </el-row>
                            <el-row> <el-text tag="p" class="w-50 m-2">E.g. Spanish vocabulary, learn spanish online, spanish grammar</el-text></el-row>

                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center label-create"
                                    >Status</span
                                >
                               
                            </el-row>
                            <el-row>
                                <el-radio-group v-model="radio1" class="ml-4">
                                    <el-radio label="1" size="large">Public</el-radio>
                                    <el-radio label="2" size="large">Protected</el-radio>
                                    <el-radio label="3" size="large">Private</el-radio>

                                </el-radio-group>
                            </el-row>
                            <el-row>
                                <el-button type="primary" style="margin-top: 20px;">Create Course</el-button>
                            </el-row>

                        </el-card>
                    </el-col>
                    <el-col :span="3"></el-col>

                </el-row>
              
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
  </style>
  
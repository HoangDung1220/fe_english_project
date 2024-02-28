<template>
    <div>
      <el-container class="layout-container-demo">
        <el-container style="background-color: #f9f8f8;min-height:100vh;height: 100%;">
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
                                    :show-file-list="false"
                                    :on-change="handleChange" 
                                >
                                    <img v-if="imageUrl" :src="imageUrl" style="height: 100px; width: 100px;" />
                                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                                </el-upload>
                            </el-row>
                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center  label-create "
                                    >Title</span
                                >
                                <el-input
                                    v-model="title"
                                    class="w-50 m-2"
                                    placeholder="Input title"
                                    maxlength="100"
                                   
                                />
                            </el-row>
                            <el-row> <el-text tag="p" class="w-50 m-2">Naming your course well will help other learners find it.</el-text></el-row>
                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center label-create"
                                    >Description</span
                                >
                                <el-input
                                    v-model="description"
                                    class="w-50 m-2"
                                    :rows="5"
                                    type="textarea"
                                    placeholder="Please input"
                                    maxlength="256"
                                />
                            </el-row>
                            <el-row> <el-text tag="p" class="w-50 m-2">Keep the description of the course in the language of what the learners speak.</el-text></el-row>


                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center label-create">Tag</span>
                                <el-input
                                    v-model="tag"
                                    class="w-50 m-2"
                                    placeholder="Input tag" 
                                    maxlength="255"
                                />

                            </el-row>
                            <el-row> <el-text tag="p" class="w-50 m-2">E.g. Spanish vocabulary, learn spanish online, spanish grammar</el-text></el-row>

                            <el-row>
                                <span class="ml-3 w-35 text-gray-600 inline-flex items-center label-create"
                                    >Status</span
                                >
                               
                            </el-row>
                            <el-row>
                                <el-radio-group v-model="status" class="ml-4">
                                    <el-radio label="public" size="large">Public</el-radio>
                                    <el-radio label="private" size="large">Private</el-radio>
                                </el-radio-group>
                            </el-row>
                            <el-row>
                                <el-button type="primary" style="margin-top: 20px;" @click="create()">Create Course</el-button>
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
  import axios from "axios";


  export default {
    name: "Dashboard",
  
    data() {
      return {
        id_course:0,
        title:"",
        description:"",
        status:"public",
        tag:"",
        imageUrl:"",
        first : true,
        isUpload : false
       
      };
    },
    components: {
      SideBar,
    
    },
    methods:{
        searchCourse(){
            document.getElementById("search_course").style.borderBottom = "2px solid rgb(0, 0, 139)";
        },
        handleChange(file){
            console.log("change file")
            if (this.id_course==0){
            const formData = new FormData();
                formData.append('category',1)
                formData.append('image',file.raw)
                formData.append('user_created',this.$store.state.user.id)

                axios
                    .post(`http://127.0.0.1:8000/api/v1/course/create`,formData)
                    .then((response) => {
                        console.log(response)
                        this.imageUrl = response.data.image
                        this.id_course = response.data.id
                    })
                    .catch((error) => console.log(error));
            } else if (this.isUpload && this.id_course!=0){
                const formData = new FormData();
                formData.append('image',file.raw)
                console.log(formData)
                axios
                .patch(`http://127.0.0.1:8000/api/v1/course/create/${this.id_course}`,formData)
                    .then((response) => {
                        console.log(response)
                        this.imageUrl = response.data.image
                    })
                    .catch((error) => console.log(error));
            }
            this.isUpload  = true
        },
        create(){
                const formData = new FormData();
                formData.append('title',this.title)
                formData.append('description',this.description)
                formData.append('tag',this.tag)
                formData.append('status',this.status)
                console.log("statuss")
                console.log(this.status)
                axios
                .patch(`http://127.0.0.1:8000/api/v1/course/create/${this.id_course}`,formData)
                    .then((response) => {
                        this.$router.push(`/course/create/detail/${this.id_course}`)
                    })
                    .catch((error) => console.log(error));
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
  
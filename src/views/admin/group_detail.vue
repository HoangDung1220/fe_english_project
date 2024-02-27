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
                <el-card style="width: 100%; margin-top: 20px;">
                        <el-row>
                            <el-col :span="3"><img v-bind:src="group.image" style="height: 60px; width: 60px;"/></el-col>
                            <el-col :span="21">
                                <el-row>
                                    <el-col :span="22"><div style="color:black">{{ group.name}}</div></el-col>
                                    <el-col :span="2"><el-button type="info" plain @click="invitePeople()">Invite</el-button></el-col>
                                    
                                </el-row>
                                <el-row style="margin-top: 15px;">
                                    <el-tabs type="border-card" class="demo-tabs" style="width: 100%;">
                                        <el-tab-pane>
                                        <template #label>
                                            <span class="custom-tabs-label">
                                            <el-icon><calendar /></el-icon>
                                            <span>Course</span>
                                            </span>
                                        </template>
                                        <el-row v-for="item1,index1 in courses" :key="index1">
                                            <el-col :span="2">
                                                <div class="index">{{index1+1 }}.</div>
                                            </el-col>
                                            <el-col :span="22">
                                            <div class="card-1">
                                                <el-row>
                                                    <el-col :span="3">
                                                        
                                                    </el-col>
                                                    <el-col :span="18" style="font-size: 16px;font-weight: bold;color: #333;">
                                                        {{ item1.course.title }}
                                                        <el-progress :percentage="item1.percentage" />
                                                    </el-col>
                                                    <el-col :span="3"><el-button type="success">Learn</el-button></el-col>

                                                </el-row>
                                               
                                            </div>
                                            </el-col>
                                        </el-row>

                                        <el-dropdown>
                                        <el-button type="primary">
                                            Choose a course to add list<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                        </el-button>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item disabled>Course common</el-dropdown-item>
                                                <el-dropdown-item v-for="value,key in public_course" :key="key" @click="handleClick(value.id, item.group.id)">{{ value.title }}</el-dropdown-item>
                                                <el-dropdown-item disabled divided>Course personal</el-dropdown-item>
                                                <el-dropdown-item v-for="value1,key1 in private_course" :key="key1" @click="handleClickPrivate(value1.id, item.group.id)">{{ value1.title }}</el-dropdown-item>

                                        </el-dropdown-menu>
                                        </template>
                                        </el-dropdown>

                                        <div style="font-size: 13px;">You can only add courses that you are learning to your group.</div>
                                        <div style="font-size: 13px;">You can also <a>search for a course</a> and start learning it or <a>create your own</a>.
</div>   
                                    </el-tab-pane>
                                        <el-tab-pane label="Members">
                                            <el-scrollbar>
                                                <div class="scrollbar-flex-content">
                                                                                                       
                                            
                                                </div>
                                            </el-scrollbar>
                                        </el-tab-pane>
                                        
                                    </el-tabs>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-card>
              
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
       group:{},
       courses:[],
       public_course:[],
       private_course:[]
      };
    },
    components: {
      SideBar,
    
    },
    async mounted(){
        this.$store.commit('setIsLoading',true)
        var id = this.$route.params.group
            await axios
                .get(`http://127.0.0.1:8000/api/v1/admin/group/${id}`)
                .then((response) => {
                    this.group = response.data.group
                    this.courses = response.data.courses
                    this.public_course = response.data.public_course
                    this.private_course = response.data.private_course
                    console.log(this.group.name)

                })
                .catch((error) => console.log(error));
            
            this.$store.commit('setIsLoading',false)
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
  
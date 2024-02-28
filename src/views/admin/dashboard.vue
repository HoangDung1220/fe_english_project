<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container>
          
          <el-main>
            <div class="main-container">
              <el-row class="title-recommend-public-1" style="color: black;cursor: pointer;">
                    <span @click="Back()">Dashboard ></span> <span>Course</span>
             </el-row>

              <el-row class="title">
                    <el-col :span="17"><h1>Summary</h1></el-col>
                    </el-row>
              <el-row>
                <el-col :span="2"></el-col>
                <el-col :span="10">
                  
                  <div class="table_learned">
                    <div class="header_table">
                        <div class="text_header">
                            Course
                        </div>
                    </div>
                    <div class="content_table">
                      
                        <el-row>
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">Total</el-row>
                                <el-col :span="5" class="number-1" style="color:black">9</el-col>
                            </el-col>
                            <el-col :span="5"></el-col>
                            <el-col :span =7 >
                                <el-row class="point_complete">New</el-row>
                                <el-col :span="9" class="number-1" style="color:black">3<el-icon><Top /></el-icon></el-col>

                                <el-row>
                                    
                                </el-row>
                            </el-col>
                        </el-row>

                        
                    </div>
                </div>


                
                </el-col>
                <el-col :span="10" style="margin-left:20px">
                  <div class="table_learned_1" >
                    <div class="header_table_1">
                        <div class="text_header">
                            Group
                        </div>
                    </div>
                    <div class="content_table">
                        <el-row>
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">Total</el-row>
                                <el-col :span="5" class="number-1" style="color:black">10</el-col>
                            </el-col>
                            <el-col :span="5"></el-col>
                            <el-col :span =7 >
                                <el-row class="point_complete">New</el-row>
                                <el-col :span="9" class="number-1" style="color:black">1<el-icon><Top /></el-icon></el-col>

                                <el-row>
                                    
                                </el-row>
                            </el-col>
                        </el-row>

                        
                    </div>
                    </div>
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px;">
                <el-col :span="2"></el-col>
                <el-col :span="10">
                  <div class="table_learned_1" >
                    <div class="header_table_1">
                        <div class="text_header">
                            Workspace
                        </div>
                    </div>
                    <div class="content_table">
                        <el-row>
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">Total</el-row>
                                <el-col :span="5" class="number-1" style="color:black">20</el-col>
                            </el-col>
                            <el-col :span="5"></el-col>
                            <el-col :span =7 >
                                <el-row class="point_complete">New</el-row>
                                <el-col :span="9" class="number-1" style="color:black">2<el-icon><Top /></el-icon></el-col>

                                <el-row>
                                    
                                </el-row>
                            </el-col>
                        </el-row>

                        
                    </div>
                    </div>
                  
                


                
                </el-col>
                <el-col :span="10" style="margin-left:20px">
                  <div class="table_learned">
                    <div class="header_table">
                        <div class="text_header">
                            User
                        </div>
                    </div>
                    <div class="content_table">
                      
                        <el-row>
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">Total</el-row>
                                <el-col :span="5" class="number-1" style="color:black">6</el-col>
                            </el-col>
                            <el-col :span="5"></el-col>
                            <el-col :span =7 >
                                <el-row class="point_complete">New</el-row>
                                <el-col :span="9" class="number-1" style="color:black">0<el-icon><Top /></el-icon></el-col>

                                <el-row>
                                    
                                </el-row>
                            </el-col>
                        </el-row>

                        
                    </div>
                </div>
                </el-col>
              </el-row>

              <el-row class="title" style="margin:30px">
                    <el-col :span="17"><h1>User, who obtains feature score</h1></el-col>
                    </el-row>

              <el-row style="margin:10px; margin-bottom: 30px;">
                <el-col :span="2"></el-col>
                <el-col :span="13">

                <el-table :data="tableData" style="width: 80%">
                  <el-table-column prop="name" label="Name" width="220" />
                  <el-table-column prop="words" label="Words" width="180" />
                  <el-table-column prop="score" label="Score" />
                </el-table>
                </el-col>
                
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
        jobs: [],
        applicants: [],
        candidates: [],
        tableData : [
           
          ]
      };
    },
    components: {
      SideBar,
    
    },
    mounted(){
      this.$store.state.admin_page = true
      this.getAccount()

    },

    methods:{
      async getAccount(){
            this.$store.commit('setIsLoading',true)
            await axios
                .get("http://127.0.0.1:8000/api/v1/auth/admin/dashboard/account")
                .then((response) => {
                    const list_account = response.data
                    console.log("accouny")
                    console.log(list_account)
                    for (var item in list_account){
                        const data = {
                            
                            "name" : list_account[item].username,
                            "words" : list_account[item].total_vocabulary_learned,
                            "score":list_account[item].total_mark_learned,

                        }
                        this.tableData.push(data)
                    }
                    console.log(this.tableData)

                })
                .catch((error) => console.log(error));
            
            this.$store.commit('setIsLoading',false)
        },

    }
   
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
  
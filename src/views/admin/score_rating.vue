<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container style="background-color: #f9f8f8;">
          <el-main>
            <div class="main-container">
                <el-row>
                    <el-col :span="18">100 members</el-col>
                    <el-col :span="4">
                        <input type="text" id="search_course" placeholder="Search member" @click="searchCourse()"/>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 20px;">
                    <el-col :span="15"></el-col>
                    <el-col :span="6">
                    <el-radio-group v-model="tableLayout">
                        <el-radio-button label="week" />
                        <el-radio-button label="month" />
                        <el-radio-button label="All time" />
                    </el-radio-group>
                    </el-col>
                </el-row>

              <el-row style="margin-top: 30px;">
                <el-col :span="4"></el-col>
                <el-col :span="16">
                <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%;" >
                    <el-table-column label="Order" width="70">
                    <template #default="scope">
                        <span style="line-height: 64px;font-size: 16px;font-weight: 600;color: #213e36;">{{ scope.row.index }}</span>
                    </template>
                    </el-table-column>

                    <el-table-column label="Image" width="100">
                    <template #default="scope">
                        <span>{{ scope.row.image }}</span>
                        <img src="../../assets/img/avatar.png" style="height: 50px; width: 50px; border-radius: 50%;"/>
                    </template>
                    </el-table-column>

                    <el-table-column prop="username" label="Name" width="180" />
                    <el-table-column prop="num_finish_course" label="Courses learned" width="180">
    
                    </el-table-column>
                    <el-table-column prop="num_learned_vocabulary" label="Words learned" width="180"/>
                    <el-table-column  prop="score" label="Score">
                        <template #default="scope">
                            <span style="color: #213e36;text-align: right;font-weight: 600;">{{ scope.row.score }}</span>
                        </template>
                    </el-table-column>
                     
                </el-table>
                </el-col>
                <el-col :span="4"></el-col>
            </el-row>
  <el-pagination background layout="prev, pager, next" :total="100" style="margin-top: 20px;" />

              
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
        tableLayout : 'All time',
        tableData :  [
            {
                id : 1,
                index :1,
                username : 'Hoang Dung',
                num_finish_course : 10,
                num_learned_vocabulary : 1255632,
                score : 10023665
            },

            {
                id : 2,
                index :2,
                username : 'QuangDuy',
                num_finish_course : 10,
                num_learned_vocabulary : 1255632,
                score : 10023665
            },

            {
                id : 3,
                index :3,
                username : 'VanDat',
                num_finish_course : 10,
                num_learned_vocabulary : 1255632,
                score : 10023665
            },

            {
                id : 4,
                index :4,
                username : 'AnhThu',
                num_finish_course : 10,
                num_learned_vocabulary : 1255632,
                score : 10023665
            }
        ]
       
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
  </style>
  
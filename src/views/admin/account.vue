<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container style="background-color: #f9f8f8;">
          <el-main>
            <div class="main-container">
                <el-row>
                    <el-col :span="18">{{tableData.length}} accounts</el-col>
                    <el-col :span="2"><el-button type="primary"><el-icon color="white"><Plus /></el-icon > Add</el-button></el-col>
                    <el-col :span="4">
                        <input type="text" id="search_course" placeholder="Search account" @click="searchCourse()"/>
                    </el-col>
                </el-row>

              
                <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%">
                    <el-table-column
                    prop="date"
                    label="Date"
                    sortable
                    width="120"
                    column-key="date"
                    :filters="[
                        { text: '2016-05-01', value: '2016-05-01' },
                        { text: '2016-05-02', value: '2016-05-02' },
                        { text: '2016-05-03', value: '2016-05-03' },
                        { text: '2016-05-04', value: '2016-05-04' },
                    ]"
                    :filter-method="filterHandler"
                    />
                    <el-table-column label="Image" width="100" >
                    <template  #default="scope">
                        <span>{{ scope.row.image }}</span>
                        <img src="../../assets/img/images.png" style="height: 30px; width: 40px;"/>
                    </template>
                    </el-table-column>
                    <el-table-column prop="name" label="Name" width="200" />
                    <el-table-column label="Gmail" width="230">
                        <template #default="scope">
                            <div><a>{{ scope.row.gmail }}</a></div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="follower" label="Follower" width="100"/>
                    <el-table-column prop="following"  label="Following" />
             <el-table-column label="Operations">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.row.id)"
                >Edit</el-button
                >
                <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
                >
            </template>
            </el-table-column>
  </el-table>

  <el-pagination background layout="prev, pager, next" :total="100" style="margin-top: 20px;" />

              
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
        tableData :  []
       
      };
    },
    components: {
      SideBar,
    
    },
    mounted(){
        this.getAccount()
    },
    methods:{
        async getAccount(){
            this.$store.commit('setIsLoading',true)
            await axios
                .get("http://127.0.0.1:8000/api/v1/auth/admin/account")
                .then((response) => {
                    const list_account = response.data.results
                    console.log(list_account.results)
                    for (var item in list_account){
                        const data = {
                            "id" : list_account[item].id,
                            "date" : list_account[item].created_at,
                            "name" : list_account[item].username,
                            "follower" : list_account[item].number_follower,
                            "following":list_account[item].number_folowing,
                            "gmail":list_account[item].email,

                        }
                        this.tableData.push(data)
                    }
                    console.log(this.tableData)

                })
                .catch((error) => console.log(error));
            
            this.$store.commit('setIsLoading',false)
        },

        searchCourse(){
            document.getElementById("search_course").style.borderBottom = "2px solid rgb(0, 0, 139)";
        },
        handleEdit(id){
            this.$router.push(`/admin/account/${id}`) 
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
  
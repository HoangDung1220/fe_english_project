<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container style="background-color: #f9f8f8;">
          <el-main>
            <div class="main-container">
                <el-row>
                    <el-col :span="18">100 groups</el-col>
                    <el-col :span="2"><el-button type="primary"><el-icon color="white"><Plus /></el-icon > Add</el-button></el-col>
                    <el-col :span="4">
                        <input type="text" id="search_course" placeholder="Search group" @click="searchCourse()"/>
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
                        <img v-bind:src="scope.row.image" style="height: 30px; width: 40px;"/>
                    </template>
                    </el-table-column>
                    <el-table-column prop="name" label="Name" width="200" />
                    <el-table-column prop="author" label="Author" width="150">
                        <template #default="scope">
                            <div><a>{{ scope.row.author }}</a></div>

                        </template>
                    </el-table-column>
                    <el-table-column prop="number_learning" label="Learners" width="80"/>
                    <el-table-column prop="number_course" label="Courses" width="80"/>
                    <el-table-column label="Rating"  width="150">
                        <template #default="scope">
                            
                            <span v-for="index in scope.row.rating" :key="index">
                                <el-icon :size="20" color="yellow"><StarFilled /></el-icon>
                            </span>
                        </template>
                    </el-table-column>

                    <el-table-column
                    prop="tag"
                    label="Tag"
                    
                    :filters="[
                        { text: 'Public', value: 'public' },
                        { text: 'Protected', value: 'protected' },
                        { text: 'Private', value: 'private' },
                    ]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end"
                    >
                    <template #default="scope">
                        <el-tag
                        :type="scope.row.tag === 'public' ? 'success' : '' "
                        disable-transitions
                        >{{ scope.row.tag }}</el-tag
                        >
            </template>
            </el-table-column>

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
        this.getGroup(),
        console.log(this.$store.state.isAuthenticated)
    },
    methods:{
        async getGroup(){
            this.$store.commit('setIsLoading',true)
            await axios
                .get("http://127.0.0.1:8000/api/v1/admin/group")
                .then((response) => {
                    const list_group = response.data
                    for (var item in list_group){
                        const data = {
                            "id" : list_group[item].group.id,
                            "date" : list_group[item].group.created_at,
                            "name" : list_group[item].group.name,
                            "author" : list_group[item].group.create_by.username,
                            "number_learning":list_group[item].number_member,
                            "number_course":list_group[item].number_course,
                            "tag":list_group[item].group.status,
                            "image" : list_group[item].group.image,

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
            console.log("hi")
        },
        handleEdit(id){
            this.$router.push(`/admin/group/${id}`) 
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
  
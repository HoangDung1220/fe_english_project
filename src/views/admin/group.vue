<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container style="background-color: #f9f8f8;">
           
          <el-main>
            <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
            </div>
            <div class="main-container" style="margin-top:30px">
                <el-row class="title">
                    <el-col :span="17"><h1>Management Groups </h1></el-col>
                </el-row>
                <el-row>
                    <el-col :span="18">{{this.tableData.length}} groups</el-col>
                    <el-col :span="2"><el-button type="primary" @click="visible = true"><el-icon color="white"><Plus /></el-icon > Add</el-button></el-col>
                    <el-col :span="4">
                        <input type="text" id="search_course" placeholder="Search group" @change="search()" @click="searchGroup()"/>
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

  <el-dialog v-model="visible" :show-close="false">
            <template #header="{ close, titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">Create new group!</h4>
                <el-button type="danger" @click="close">
                <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                Close
                </el-button>
            </div>

            </template>
            Create new group
            <el-row>
                    <el-col :span="5">Name</el-col>
                    <el-col :span="15" >
                        <el-input v-model="name_group" placeholder="Please input name group" style="justify-content: center; margin: 10px;"/>
                    </el-col>
            </el-row>

            <el-row>
                <el-col :span="5">Image</el-col>
                <el-col :span="15">
                    <input type="file" @change="onFileChange">
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="5"></el-col>
                <el-col :span="15">
                    <el-radio-group v-model="status" class="ml-4">
                        <el-radio label="public" size="large">Share everyone can use group</el-radio>
                        <el-radio label="private" size="large">Share someone who indicated by admin-group</el-radio>
                    </el-radio-group>
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="20"></el-col>
                <el-col :span="2"><el-button type="primary" @click="createGroup()">Create</el-button></el-col>
                <el-col :span="2"></el-col>

            </el-row>
        </el-dialog>



              
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
        tableData :  [],
        visible : false,
        file:{},
        status:'public',
        name_group:'',
       
      };
    },
    components: {
      SideBar,
    },
    mounted(){
        this.getGroup(),
        this.$store.state.admin_page = true
        console.log(this.$store.state.isAuthenticated)
    },

    methods:{
        async createGroup(){
        const id_user = this.$store.state.user.id
        const formData = new FormData()
        var id_group = 0 
        formData.append('name',this.name_group)
        formData.append('status',this.status)
        formData.append('create_by',id_user)
        formData.append('image',this.file)

        await axios
            .post('http://127.0.0.1:8000/api/v1/group',formData)
            .then((response) => {
                id_group = response.data.id
                console.log(response.data)

            })
            .catch((error) => console.log(error));

        const data=
            {
                "user_invite_join": id_user,
                "group": id_group,
                "member": id_user
            }
        
        await axios
            .post('http://127.0.0.1:8000/api/v1/group/member',data)
            .then((response) => {
               this.visible = false
            })
            .catch((error) => console.log(error));
            this.getGroup()
    },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.file = files[0]
        
        },

        async getGroup(){
            this.$store.commit('setIsLoading',true)
            this.tableData=[]
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

        async search(){
            var tmp = document.getElementById("search_course").value
            this.tableData=[]
            this.$store.commit('setIsLoading',true)
            await axios
                .get(`http://127.0.0.1:8000/api/v1/admin/group?search=${tmp}`)
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

        searchGroup(){
            document.getElementById("search_course").style.borderBottom = "2px solid rgb(0, 0, 139)";
            
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

    .lds-dual-ring{
  display: inline-block;
  width : 80px;
  height : 80px
}

.lds-dual-ring:after{
  content : '';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.is-loading-bar {
    height: 0;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    
    &.is-loading {
        height: 80px;
    }
}
  </style>
  
<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container style="background-color: #f9f8f8;">
           
          <el-main>
            <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
            </div>
            <div class="main-container">
                <el-row>
                    <el-col :span="18">{{ this.tableData.length }} course</el-col>
                    <el-col :span="2"><el-button type="primary"><el-icon color="white"><Plus /></el-icon > Add</el-button></el-col>
                    <el-col :span="4">
                        <input type="text" id="search_course" placeholder="Search course" @click="searchCourse()"/>
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
                    <el-table-column prop="name" label="Title" width="250" />
                    <el-table-column prop="author" label="Author" width="180">
                        <template #default="scope">
                            <div><a>{{ scope.row.author }}</a></div>

                        </template>
                    </el-table-column>
                    <el-table-column prop="number_learning" label="Learners" width="100"/>
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
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
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
        this.getCourse();
    },
    methods:{
        async getCourse(){
            this.$store.commit('setIsLoading',true)
            await axios
                .get("http://127.0.0.1:8000/api/v1/course/admin")
                .then((response) => {
                    const list_course = response.data
                    for (var item in list_course){
                        const data = {
                            "id" : list_course[item].course.id,
                            "date" : list_course[item].course.created_at,
                            "name" : list_course[item].course.title,
                            "author" : list_course[item].course.user_name,
                            "number_learning":list_course[item].course.number_user_learn,
                            "rating":list_course[item].rating,
                            "tag":list_course[item].course.status

                        }
                        this.tableData.push(data)
                    }
                    console.log(this.tableData)

                })
                .catch((error) => console.log(error));
            
            this.$store.commit('setIsLoading',false)
        },

        async getCourseDetail(id){
              this.$store.commit('setIsLoading',true)
              this.$router.push(`/course/${id}`)
              this.$store.commit('setIsLoading',false)
        },
        searchCourse(){
            document.getElementById("search_course").style.borderBottom = "2px solid rgb(0, 0, 139)";
        }
    },
   
  };
  </script>
  
  <style lang="scss">
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
  
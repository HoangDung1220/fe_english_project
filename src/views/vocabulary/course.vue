<template>
    <div>
        <div class="header-5">
        <el-row>
            <el-col :span="13"></el-col>
            <el-col :span="5">
              </el-col>
            <el-col :span="4"><el-button class="button-1" color="#ffc000" @click="createCourse()">Create a course</el-button></el-col>
        </el-row>

        </div>

        <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>

        <div class="content-container" style="margin-top:30px;background-color: rgb(255, 255, 255);">
              <div class="container-item">
                     
                     <el-row>
                     <el-col :span="5"></el-col>
                     <el-col :span="12">
                            <div>
                                   <el-checkbox-group v-model="checkboxGroup1" >
                                   <el-checkbox-button v-for="city in cities" :key="city" :label="city" @click="choiceValue(city)">
                                          {{ city }}
                                   </el-checkbox-button>
                                   </el-checkbox-group>
                            </div>
                     </el-col>
                     <el-col :span="5">  
                            <el-input v-model="search" class="w-50 m-2" placeholder="Type something" @change="searchCourse()">
                                   <template #prefix>
                                   <el-icon class="el-input__icon"><search /></el-icon>
                                   </template>
                            </el-input>
                     </el-col>
              </el-row>
              <el-row class="title" style="margin-top: -15px;">
                     <el-col :span="5"></el-col>
                    <el-col :span="17"><h1>Course I've created</h1></el-col>
                </el-row>
                     <div class="vocabulary-container" v-for="(item, index) in m_courses" :key="index">
                            <el-row :gutter="20" style="margin-bottom: 20px;" v-if="index%4==0">
                                   <el-col :span="5"></el-col>
                                   <el-col :span="4" v-if="index<m_courses.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(m_courses[index].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="m_courses[index].title" v-bind:src="m_courses[index].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{m_courses[index].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ m_courses[index].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+1<m_courses.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(m_courses[index+1].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="m_courses[index+1].title" v-bind:src="m_courses[index+1].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{m_courses[index+1].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ m_courses[index+1].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+2<m_courses.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(m_courses[index+2].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="m_courses[index+2].title" v-bind:src="m_courses[index+2].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{m_courses[index+2].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ m_courses[index+2].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+3<m_courses.length" >
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(m_courses[index+3].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="m_courses[index+3].title" v-bind:src="m_courses[index+3].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{m_courses[index+3].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ m_courses[index+3].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>

                                  
                                   <el-col :span="5"></el-col>
                            </el-row>                           
                     </div>    
                     
              <el-row class="title" style="margin-top: -15px;">
                     <el-col :span="5"></el-col>
                    <el-col :span="17"><h1>Course I learning</h1></el-col>
              </el-row>

              <div class="vocabulary-container" v-for="(item, index) in courses" :key="index">
                            <el-row :gutter="20" style="margin-bottom: 20px;" v-if="index%4==0">
                                   <el-col :span="5"></el-col>
                                   <el-col :span="4" v-if="index<courses.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(courses[index].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="courses[index].title" v-bind:src="courses[index].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{courses[index].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ courses[index].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+1<courses.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(courses[index+1].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="courses[index+1].title" v-bind:src="courses[index+1].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{courses[index+1].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ courses[index+1].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+2<courses.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(courses[index+2].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="courses[index+2].title" v-bind:src="courses[index+2].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{courses[index+2].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ courses[index+2].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+3<courses.length" >
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(courses[index+3].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="courses[index+3].title" v-bind:src="courses[index+3].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{courses[index+3].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ courses[index+3].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>

                                  
                                   <el-col :span="5"></el-col>
                            </el-row>                           
                     </div>    
              </div>
                    
                    
              </div>
      
    </div>
</template>

<script>
import { Calendar, Search } from '@element-plus/icons-vue'
import axios from "axios";

export default{
    data(){
        return{
              id_user:0,
              checkboxGroup1 :  ['All'],
              cities : ['All','TO DO', 'DOING', 'COMPLETE'],
              m_courses:[],
              courses:[],
              search:""
        }
    },
    components:{
        Search,
    },
    mounted(){
        const nav = {
            "is_home" : false,
            "is_course": true
        }
        this.id_user = this.$store.state.user.id
        this.$store.commit('setNav',nav)
        this.getCourse()
    },
    methods:{
        async getCourse(){
            this.$store.commit('setIsLoading',true)
            axios
                .get(`http://127.0.0.1:8000/api/v1/course/search/${this.id_user}?flag=1`)
                .then((response) => {
                    this.m_courses = response.data
                    console.log(this.m_courses)
                })
                .catch((error) => console.log(error));

             axios
             .get(`http://127.0.0.1:8000/api/v1/course/search/${this.id_user}?flag=0`)
                .then((response) => {
                     this.courses = response.data
                    console.log(this.courses)
                })
                .catch((error) => console.log(error));
            
            this.$store.commit('setIsLoading',false)
        },

        async getCourseDetail(id){
              this.$store.commit('setIsLoading',true)
              this.$router.push(`/course/${id}`)
              this.$store.commit('setIsLoading',false)
        },
        createCourse(){
              this.$router.push("/course/create")
        },
        choiceValue(value){
              this.checkboxGroup1 = [value] 
              this.searchCourse()
       },
       searchCourse(){
              var url = `http://127.0.0.1:8000/api/v1/course/search/${this.id_user}?flag=1&status=${this.checkboxGroup1[0]}&input=${this.search}`
             
              axios
                .get(`${url}`)
                .then((response) => {
                    this.m_courses = response.data
                })
                .catch((error) => console.log(error));

              axios
                .get(`http://127.0.0.1:8000/api/v1/course/search/${this.id_user}?flag=0&status=${this.checkboxGroup1[0]}&input=${this.search}`)
                .then((response) => {
                    this.courses = response.data
                })
                .catch((error) => console.log(error));
       }
   
    }
}
</script>

<style lang = "scss">
    @import "../../assets/css/vocabulary.scss";
    
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
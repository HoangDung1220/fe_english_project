<template>
   <div>
                  
       <div class="content-container" style="margin-top:0px;background-color: rgb(252, 250, 242);">
        <el-row style="margin-bottom: 15px;">
            <el-col :span="3"></el-col>
            <el-col :span="18" class="title-recommend-public">Recommended lesson </el-col>
            <el-col :span="3"></el-col>

        </el-row>
        <el-row>
              <el-col :span="3"></el-col>
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
        
      
        <div class="container-item" style="margin-bottom: 30px;">
            <div class="vocabulary-container" style="background-color: rgb(252, 250, 242)">
              <div v-for="item,index in courses" :key="index">
                <el-row :gutter="20"  style="margin-top:15px" v-if="index%4==0" >
                                   <el-col :span="3"></el-col>
                                   <el-col :span="5" v-if="index<courses.length">
                                          <el-card class="card_public" :body-style="{ padding: '0px' }" style="height:350px" @click="choiceLesson(courses[index].id)">
                                                <div class="image-card">
                                                 <img 
                                                 v-bind:src="courses[index].image"
                                                 class="image"
                                                 />
                                                </div>
                                                <div class="description-4">
                                                       {{ courses[index].title }}
                                                 </div>
                                                 <div class="description-3">
                                                        <el-row>
                                                               <el-col :span="12">{{ courses[index].number_vocabulary }} words</el-col>
                                                               <el-col :span="12"><a style="float:right">by {{ courses[index].user_name }}</a></el-col>
                                                        </el-row>
                                                 </div>

                                                 <div class="lesson_detail">
                                                        Lesson Detail
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>

                                   <el-col :span="5" v-if="index+1<courses.length">
                                          <el-card class="card_public" :body-style="{ padding: '0px' }" style="height:350px" @click="choiceLesson(courses[index+1].id)">
                                                <div class="image-card">
                                                 <img 
                                                 v-bind:src="courses[index+1].image"
                                                 class="image"
                                                 />
                                                </div>
                                                <div class="description-4">
                                                       {{ courses[index+1].title }}
                                                 </div>
                                                 <div class="description-3">
                                                        <el-row>
                                                               <el-col :span="12">{{ courses[index+1].number_vocabulary }} words</el-col>
                                                               <el-col :span="12"><a style="float:right">by {{ courses[index+1].user_name }}</a></el-col>
                                                        </el-row>
                                                 </div>

                                                 <div class="lesson_detail">
                                                        Lesson Detail
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>

                                   <el-col :span="5" v-if="index+2<courses.length">
                                          <el-card class="card_public" :body-style="{ padding: '0px' }" style="height:350px" @click="choiceLesson(courses[index+2].id)">
                                                <div class="image-card">
                                                 <img 
                                                 v-bind:src="courses[index+2].image"
                                                 class="image"
                                                 />
                                                </div>
                                                <div class="description-4">
                                                       {{ courses[index+2].title }}
                                                 </div>
                                                 <div class="description-3">
                                                        <el-row>
                                                               <el-col :span="12">{{ courses[index+2].number_vocabulary }} words</el-col>
                                                               <el-col :span="12"><a style="float:right">by {{ courses[index+2].user_name }}</a></el-col>
                                                        </el-row>
                                                 </div>

                                                 <div class="lesson_detail">
                                                        Lesson Detail
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>

                                   <el-col :span="5" v-if="index+3<courses.length">
                                          <el-card class="card_public" :body-style="{ padding: '0px' }" style="height:350px" @click="choiceLesson(courses[index+3].id)">
                                                <div class="image-card">
                                                 <img 
                                                 v-bind:src="courses[index+3].image"
                                                 class="image"
                                                 />
                                                </div>
                                                <div class="description-4">
                                                       {{ courses[index+3].title }}
                                                 </div>
                                                 <div class="description-3">
                                                        <el-row>
                                                               <el-col :span="12">{{ courses[index+3].number_vocabulary }} words</el-col>
                                                               <el-col :span="12"><a style="float:right">by {{ courses[index+3].user_name }}</a></el-col>
                                                        </el-row>
                                                 </div>

                                                 <div class="lesson_detail">
                                                        Lesson Detail
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>
                        <el-col :span="2"></el-col>
                </el-row>
              </div>
             
            </div>
        </div>
      
    </div>
             
        </div>
       
        
</template>
  
<script>
import axios from "axios";
import { Calendar, Search } from '@element-plus/icons-vue'

export default {
   name: "Home",
   data(){
       return{
              name : this.$store.state.user.username,
              courses : [],
              checkboxGroup1 :  ['All'],
              cities : ['All','toeic', 'education', 'practice', 'job'],
              search:""
       }
   },
   mounted(){
       const nav = {
            "is_home" : true,
            "is_course": false,
            "is_group":false,
            "is_space" : false,
        }
       this.$store.commit('setNav',nav)
       
       this.$store.state.user.username = this.$store.state.user.username
       axios
                .get(`http://127.0.0.1:8000/api/v1/course/home/${this.$store.state.user.id}`)
                .then((response) => {
                    this.courses = response.data
                })
                .catch((error) => console.log(error));
      
   },
   methods:{
       choiceLesson(id){
              this.$router.push(`/course/${id}`)
       },
       choiceValue(value){
              this.checkboxGroup1 = [value] 
              this.searchCourse()
       },
       searchCourse(){
              var url = `http://127.0.0.1:8000/api/v1/course/home/${this.$store.state.user.id}?tag=${this.checkboxGroup1[0]}&search=${this.search}`
              if (this.checkboxGroup1[0]=="All")
              {
                     url = `http://127.0.0.1:8000/api/v1/course/home/${this.$store.state.user.id}?search=${this.search}`
              }
              axios
                .get(`${url}`)
                .then((response) => {
                    this.courses = response.data
                })
                .catch((error) => console.log(error));
       }
   }
    
}
</script>

<style lang="scss">
   @import "../assets/css/header.scss";
   @import "../assets/css/content_home.scss";
   .demo-button-style {
  margin-top: 24px;
}
</style>
  
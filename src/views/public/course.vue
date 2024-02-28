<template>
    <div>
        <div class="header-4">
        <el-row  >
            <el-col :span="20"></el-col>
            <el-col :span="1" style="margin-top:20px"><el-button class="button-1" color="#ffc000" style="width:100px; float:right">Sign up</el-button></el-col>
            <el-col :span="2" style="margin-top:20px"><el-button class="button-1" color="#ffc000" style="width:100px;background-color: white;" @click="login()">Log in</el-button></el-col>
        </el-row>
        <el-row class="title-public-course">
           <el-col :span="2"></el-col> 
           Memrise Online {{category.name}} Course
        </el-row>
        <el-row>
            <el-col :span="2"></el-col>
           

        </el-row>
    </div>
    <div class="content-container" style="margin-top:0px;background-color: rgb(252, 250, 242);">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18" class="title-content-public-course">Speak everyday {{category.name}} with our free online {{category.name}} course</el-col>
            <el-col :span="3"></el-col>

        </el-row>

        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18" class="title-recommend-public">Recommended lesson plan for beginners</el-col>
            <el-col :span="3"></el-col>

        </el-row>
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18" class="title-recommend-public-1">Start with these lessons designed around real-life scenarios</el-col>
            <el-col :span="3"></el-col>
        </el-row>
        <div class="container-item">
            <div class="vocabulary-container" style="background-color: rgb(252, 250, 242)">
              <div v-for="index in num_course" :key="index">
                <el-row :gutter="20"  style="margin-top:15px" v-if="index-1<courses.length && (index-1)%4==0" >
                                   <el-col :span="3"></el-col>
                                   <el-col :span="5" v-if="index-1<courses.length">
                                          <el-card class="card_public" :body-style="{ padding: '0px' }" style="height:350px" @click="choiceLesson(courses[index-1].id)">
                                                <div class="image-card">
                                                 <img 
                                                 v-bind:src="courses[index-1].image"
                                                 class="image"
                                                 />
                                                </div>
                                                <div class="description-4">
                                                       {{ courses[index-1].title }}
                                                 </div>
                                                 <div class="description-3">
                                                        {{ courses[index-1].number_vocabulary }} words
                                                 </div>

                                                 <div class="lesson_detail">
                                                        Lesson Detail
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>

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
                                                        {{ courses[index].number_vocabulary }} words
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
                                                        {{ courses[index+1].number_vocabulary }} words
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
                                                        {{ courses[index+2].number_vocabulary }} words
                                                 </div>

                                                 <div class="lesson_detail">
                                                        Lesson Detail
                                                 </div>
                                                
                                          </el-card>
                                   </el-col>
                        <el-col :span="2"></el-col>
                </el-row>
              </div>
             

                <el-row style="margin-top: 20px;">
                     <el-col :span="12"></el-col>
                     <el-col :span="2" style="cursor: pointer;" @click="increateLimit()" v-if="num_course<courses.length">
                            <el-row><b>See more</b></el-row>
                            <el-row style="float:center; margin-left: 30px;"><el-icon size="20"><Bottom /></el-icon></el-row>
                     </el-col>
                     <el-col :span="2" style="cursor: pointer;" @click="descendantLimit()" v-else>
                            <el-row><b>See less</b></el-row>
                            <el-row style="float:center; margin-left: 30px;"><el-icon size="20"><Top /></el-icon></el-row>
                     </el-col>
                     <el-col :span="11"></el-col>
              </el-row>
            </div>
        </div>

        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18" class="title-recommend-public">Browse other topics that fit your needs</el-col>
            <el-col :span="3"></el-col>
        </el-row>

        <div v-for="item,index in tags" :key="index">
        <el-row v-if="index % 5 == 0" style="margin-top: 15px;">
              <el-col :span="4"></el-col>
              <el-col :span="3" v-if="index<tags.length">
                     <div class="tag-course" @click="choiceTag(tags[index].tags)">{{ tags[index].tags }}</div>
              </el-col>
              <el-col :span="3" v-if="index+1<tags.length">
                     <div class="tag-course" @click="choiceTag(tags[index+1].tags)">{{ tags[index+1].tags }}</div>
              </el-col>
              <el-col :span="3" v-if="index+2<tags.length">
                     <div class="tag-course" @click="choiceTag(tags[index+2].tags)">{{ tags[index+2].tags }}</div>
              </el-col>
              <el-col :span="3" v-if="index+3<tags.length">
                     <div class="tag-course" @click="choiceTag(tags[index+3].tags)">{{ tags[index+3].tags }}</div>
              </el-col>
              <el-col :span="3" v-if="index+4<tags.length">
                     <div class="tag-course" @click="choiceTag(tags[index+4].tags)">{{ tags[index+4].tags }}</div>
              </el-col>
        </el-row>

       </div>
       <div style="margin-bottom: 50px;"></div>

       
    </div>
        
    </div>
</template>

<script>
import axios from "axios";

export default {
       data(){
              return{
                     id_category : 0,
                     courses : [],
                     num_course : 4,
                     limit_row :1,
                     index : 0,
                     category:{},
                     tags: []
              }
       },
    async mounted(){
       this.id_category = this.$route.params.id
       this.$store.state.isManupulation = true
       await axios
                .get(`http://127.0.0.1:8000/api/v1/course/category/${this.id_category}`)
                .then((response) => {
                    this.category = response.data
                })
                .catch((error) => console.log(error));
       this.getCourse()
       await axios
                .get(`http://127.0.0.1:8000/api/v1/course/tag/${this.id_category}`)
                .then((response) => {
                    this.tags = response.data
                })
                .catch((error) => console.log(error));

    },
    methods:{
       async login(){
                     this.$store.commit('setIsLoading',true)
                     this.$router.push('/login')
              },
       getCourse(){
              axios
                .get(`http://127.0.0.1:8000/api/v1/course/dictionary/${this.id_category}`)
                .then((response) => {
                    this.courses = response.data
                })
                .catch((error) => console.log(error));
       },
       increateLimit(){
              this.num_course = this.num_course +4      
       },
       descendantLimit(){
              this.num_course = 4
       },
       choiceTag(name){
              axios
                .get(`http://127.0.0.1:8000/api/v1/course/dictionary/${this.id_category}?tag=${name}`)
                .then((response) => {
                    this.courses = response.data
                    console.log(this.courses)
                })
                .catch((error) => console.log(error));
       },
       choiceLesson(id){
              this.$router.push(`/en/learn/lesson/${id}`)
       }
    }
}
</script>

<style>
@import "../../assets/css/header.scss";


</style>
<template>
    <div>
        <div class="header-2">
        <el-row>
            <el-col :span="13"></el-col>
            <el-col :span="5"><el-input
                v-model="input2"
                placeholder="Search course"
            /></el-col>
            <el-col :span="2"><el-icon color="white" size="25" style="vertical-align: middle;"><Search /></el-icon></el-col>
            <el-col :span="4"><el-button class="button-1" color="#ffc000">Create a course</el-button></el-col>
        </el-row>

        </div>

        <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>

        <div class="content-container" style="margin-top:30px;background-color: rgb(255, 255, 255);">
              <div class="container-item">
                     <div class="vocabulary-container" v-for="(item, index) in list_course" :key="index">
                            <el-row :gutter="20" style="margin-bottom: 20px;" v-if="index%4==0">
                                   <el-col :span="5"></el-col>
                                   <el-col :span="4" v-if="index<list_course.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(list_course[index].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="list_course[index].title" v-bind:src="list_course[index].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{list_course[index].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ list_course[index].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 <div class="description-2">
                                                        <el-row>
                                                               <el-col :span="2"></el-col>
                                                               <el-col :span="12" class="quantity"><el-icon :size="20" style="vertical-align: middle;"><Avatar /></el-icon>   {{ list_course[index].number_user_learn }}</el-col>
                                                               <el-col :span="8" style=" float: right; border-left: 1px solid #808080; padding-left: 5px;"><el-icon :size="20" color="red" style="vertical-align: middle; "><MostlyCloudy /></el-icon>{{ list_course[index].number_vocabulary }}</el-col>
                                                               <el-col :span="2"></el-col>
                                                        </el-row>
                                                 </div>
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+1<list_course.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(list_course[index+1].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="list_course[index+1].title" v-bind:src="list_course[index+1].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{list_course[index+1].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ list_course[index+1].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 <div class="description-2">
                                                        <el-row>
                                                               <el-col :span="2"></el-col>
                                                               <el-col :span="12" class="quantity"><el-icon :size="20" style="vertical-align: middle;"><Avatar /></el-icon>   {{ list_course[index+1].number_user_learn }}</el-col>
                                                               <el-col :span="8" style=" float: right; border-left: 1px solid #808080; padding-left: 5px;"><el-icon :size="20" color="red" style="vertical-align: middle; "><MostlyCloudy /></el-icon>{{ list_course[index+1].number_vocabulary }}</el-col>
                                                               <el-col :span="2"></el-col>
                                                        </el-row>
                                                 </div>
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+2<list_course.length">
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(list_course[index+2].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="list_course[index+2].title" v-bind:src="list_course[index+2].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{list_course[index+2].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ list_course[index+2].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 <div class="description-2">
                                                        <el-row>
                                                               <el-col :span="2"></el-col>
                                                               <el-col :span="12" class="quantity"><el-icon :size="20" style="vertical-align: middle;"><Avatar /></el-icon>   {{ list_course[index+2].number_user_learn }}</el-col>
                                                               <el-col :span="8" style=" float: right; border-left: 1px solid #808080; padding-left: 5px;"><el-icon :size="20" color="red" style="vertical-align: middle; "><MostlyCloudy /></el-icon>{{ list_course[index+2].number_vocabulary }}</el-col>
                                                               <el-col :span="2"></el-col>
                                                        </el-row>
                                                 </div>
                                          </el-card>
                                   </el-col>

                                   <el-col :span="4" v-if="index+3<list_course.length" >
                                          <el-card class="card" :body-style="{ padding: '0px' }" style="cursor:pointer" @click="getCourseDetail(list_course[index+3].id)">
                                                <div class="image-card">
                                                    <img v-bind:alt="list_course[index+3].title" v-bind:src="list_course[index+3].image" class="image"/>

                                                </div>
                                                        <el-row class="title-course" style="height: 80px;">
                                                               {{list_course[index+3].title}}
                                                        </el-row>
                                                <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>{{ list_course[index+3].user_name }}</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 <div class="description-2">
                                                        <el-row>
                                                               <el-col :span="2"></el-col>
                                                               <el-col :span="12" class="quantity"><el-icon :size="20" style="vertical-align: middle;"><Avatar /></el-icon>   {{ list_course[index+3].number_user_learn }}</el-col>
                                                               <el-col :span="8" style=" float: right; border-left: 1px solid #808080; padding-left: 5px;"><el-icon :size="20" color="red" style="vertical-align: middle; "><MostlyCloudy /></el-icon>{{ list_course[index+3].number_vocabulary }}</el-col>
                                                               <el-col :span="2"></el-col>
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
            list_course:{}
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
        this.$store.commit('setNav',nav)
        this.getCourse()
    },
    methods:{
        async getCourse(){
            this.$store.commit('setIsLoading',true)
            await axios
                .get("http://127.0.0.1:8000/api/v1/course")
                .then((response) => {
                    this.list_course = response.data.results
                    console.log(this.list_course)
                })
                .catch((error) => console.log(error));
            
            this.$store.commit('setIsLoading',false)
        },

        async getCourseDetail(id){
              this.$store.commit('setIsLoading',true)
              this.$router.push(`/course/${id}`)
              this.$store.commit('setIsLoading',false)
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
<template>
    <div>
    <div class="header-1" style="height: 75px;">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="2">
                <img class="image-course" style="height: 50px;width: 50px;" v-bind:src="course.course.image" >
            </el-col>
            <el-col :span="10">
            <el-row class="title-course" style="color:  #fff;"><h3>{{ course.course.title }}</h3></el-row>
            </el-col>
            <el-col :span="7">
                <el-row><el-button class="button-1" color="#ffc000"><span>Created by <a>{{ course.course.user_name }} </a></span></el-button></el-row>
            </el-col>
        </el-row>

    </div>

    <div class="nav">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="10" class="level">
                <el-button round color="#b9d7e3">Vocabulary: {{ vocabulary.length }}</el-button>
            </el-col>
        </el-row>
    </div>


    <div class="content-level">
        <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>

        <el-row>
            <el-col :span="5"></el-col>
            <el-col :span="14">
                <el-card class="card-progress">
                    <el-row>
                        <el-col :span="5" class="level-number">Level {{ course.level.indexing }}</el-col>
                        <el-col :span="19">
                            <el-row>{{ course.level.title }}</el-row>
                            <el-row class="demo-progress">
                                <el-progress :text-inside="true" :stroke-width="26" style="width: 600px;" :percentage="course.percentage" color="#ffda3e" />
                            </el-row>
                            <el-row class="group-button" @click="goToDetailWord()">
                                <el-button type="success" v-if="course.percentage==parseFloat(0) && vocabulary.length>0">Learn these words</el-button>
                                <el-button type="success" v-if="course.percentage!=parseFloat(100) && course.percentage!=parseFloat(0) && vocabulary.length>0">Countinue these words</el-button>
                                <el-button type="success" v-if="vocabulary.length>0">Review words</el-button>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="5">
                <el-button style="margin-top: 50px; margin-left: 10px; font-size: 20px; height: 50px;" color="#ffc000" v-if="course.level.indexing+1<=course.num_level" @click="goToNextLevel()">Next to Level {{ course.level.indexing+1 }}</el-button>
            </el-col>
        </el-row>
        <el-row style="margin-bottom: -50px;">
            <el-col :span="5"></el-col>
            <el-col :span="14" class="number-word">{{ vocabulary.length }} words</el-col>
            <el-col :span="5"></el-col>
        </el-row>
        <el-row>
            <el-col :span="5"></el-col>
            <el-col :span="14">
                <el-card class="card-progress">
                    <el-table :data="vocabulary" height="100%" style="width: 100%;">
                        <el-table-column prop="vocabulary" label="Vocabulary" width="250"/>
                        <el-table-column prop="mean" label="Mean" width="250" />
                        <el-table-column  width="250" >
                            <template #default="scope">
                                    <img v-bind:alt="vocabulary[scope.$index].mean" v-bind:src="vocabulary[scope.$index].image" style="height: 30px; width: 30px;"/>
                                   
                            </template>
                        </el-table-column>
                        
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="5"></el-col>
        </el-row>
       
    </div> 
</div>
</template>

<script>
import axios from "axios";

export default {
   name: "DetailVocabularyLevel",
   data() {
    return{
        vocabulary :[],
        id_course : "",
        id_level : "",
        course: {
            course:{},
            level:{},
            percentage:0,
            num_level:0,
            next_level:{}
        }
    }
   },

   created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      
      { immediate: true }
    )
  },

   async mounted(){
        this.fetchData()
   },
   methods:{
    async goToDetailWord(){
        const id_user = this.$store.state.user.id
        const data = {
            "user" : id_user,
            "course" : this.id_course,
        }
        var id_user_course = 0
        await axios
            .post(`http://127.0.0.1:8000/api/v1/study`, data)
            .then((response) => {
                console.log(response)
                id_user_course = response.data.data
            })
            .catch((error) => console.log(error));
        if (id_user_course!="0"){
            const data = {
            "user_course" : id_user_course,
            "level" : this.id_level,
        }
            await axios
                .post(`http://127.0.0.1:8000/api/v1/study/level`, data)
                .then((response) => {
                    this.$router.push(`/learning/course/${this.id_course}/${this.id_level}`)
                })
                .catch((error) => console.log(error));
            }
        },

        goToNextLevel(){
            this.$store.commit('setIsLoading',true)
            this.$router.push(`/course/${this.id_course}/level/${this.course.next_level.id}`)
            this.$store.commit('setIsLoading',false)
        },
        async fetchData(){
            this.$store.commit('setIsLoading',true)
            const nav = {
                "is_home" : false,
                "is_course": true
            }
            this.$store.commit('setNav',nav)
            this.id_course = this.$route.params.id_course
            this.id_level = this.$route.params.id_level
            const id_user = this.$store.state.user.id
            await axios
                        .get(`http://127.0.0.1:8000/api/v1/course/${this.id_course}/level/${this.id_level}`)
                        .then((response) => {

                            this.vocabulary = response.data
                            console.log(response.data)
                        })
                        .catch((error) => console.log(error));

            await axios
                        .get(`http://127.0.0.1:8000/api/v1/course/detail/${this.id_course}/${this.id_level}/${id_user}`)
                        .then((response) => {
                            this.course = response.data
                            console.log(this.course.course.title)
                        })
                        .catch((error) => console.log(error));
            this.$store.commit('setIsLoading',false)
   },
        
   }
}
</script>

<style lang="scss" setup>
       @import "../../assets/css/content_home.scss";
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
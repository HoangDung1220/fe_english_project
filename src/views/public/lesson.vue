<template>
    <div>
        <div class="header-4">
        <el-row  >
            <el-col :span="20"></el-col>
            <el-col :span="1" style="margin-top:20px"><el-button class="button-1" color="#ffc000" style="width:100px; float:right">Sign up</el-button></el-col>
            <el-col :span="2" style="margin-top:20px"><el-button class="button-1" color="#ffc000" style="width:100px;background-color: white;" @click="login()">Log in</el-button></el-col>
        </el-row>
        <el-row class="title-recommend-public-1" style="color: white;cursor: pointer;">
            <el-col :span="2"></el-col> 
                <span @click="Back()">Course ></span> <span>{{ course.course.title }}</span>
        </el-row>
        <el-row class="title-public-course">
           <el-col :span="2"></el-col> 
         {{ course.course.title }}
        </el-row>
        <el-row>
            <el-col :span="2"></el-col>
           <el-button class="button-1" color="#ffc000" style="width:250px; height:40px;     z-index: 100;
    position: relative;  font-size: 24px;" @click="learn()">Start lesson</el-button>

        </el-row>
    </div>
    <div class="content-container" style="margin-top:0px;background-color: rgb(252, 250, 242);">

        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18" class="title-recommend-public">Lesson overview</el-col>
            <el-col :span="3"></el-col>

        </el-row>
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18" class="title-recommend-public-1">{{ course.course.description }}</el-col>
            <el-col :span="3"></el-col>
        </el-row>

        <el-row> 
            <el-col :span="3"></el-col>
            <el-col :span="18">
            <div class="table_learned" style="width: 100%;">
                    <div class="header_table">
                        <div class="text_header">
                            Vocabulary
                        </div>
                    </div>
                    <div class="content_table" style="font-size: 20px;">
                        <el-row>
                            <el-col :span="4"></el-col>
                            <el-col :span="6" class="point_complete">Vocabulary</el-col>
                            <el-col :span="6" class="point_complete">Mean</el-col>
                            <el-col :span="4" class="point_complete">Image</el-col>
                            <el-col :span="4"></el-col>
                        </el-row>
                        <el-row v-for="item, index in vocabularys" :key="index" style="margin-top: 10px;">
                            <el-col :span="4"></el-col>
                            <el-col :span="6" class="point_complete">{{ item.vocabulary }}</el-col>
                            <el-col :span="6" class="point_complete">{{item.mean}}</el-col>
                            <el-col :span="4"><img v-bind:src="item.image" style="width: 100px; height: 70px;"/></el-col>
                            <el-col :span="4"></el-col>
                        </el-row>

                        
                    </div>
                </div>
                </el-col>

                <el-col :span="3"></el-col>

        </el-row>
     
        <div style="margin-bottom: 50px;"></div>

       
    </div>
        
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            id_course : 0,
            vocabularys:[],
            course : {

                course:{
                    title:"",
                    description:"",
                }
            }
        }
    },
    mounted(){
       this.$store.state.isManupulation = true
       this.id_course = this.$route.params.id
       this.getVocabulary()
       axios
                .get(`http://127.0.0.1:8000/api/v1/course/${this.id_course}`)
                .then((response) => {
                    this.course = response.data
                   this.course.course.title = response.data.course.title
                   this.course.course.description = response.data.course.description

                })
                .catch((error) => console.log(error));

    },
    methods:{
        async login(){
                     this.$store.commit('setIsLoading',true)
                     this.$router.push('/login')
              },
        getVocabulary(){
            axios
                .get(`http://127.0.0.1:8000/api/v1/course/vocabulary/en/${this.id_course}`)
                .then((response) => {
                    this.vocabularys = response.data
                })
                .catch((error) => console.log(error));
        },
        learn(){
            this.$router.push(`/course/${this.id_course}`)
        },
        Back(){
            this.$router.push(`/en/learn/1`)
        }
    }
}
</script>

<style>
@import "../../assets/css/header.scss";


</style>
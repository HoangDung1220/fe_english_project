<template>
    <div>
       
        <div style="background-color: #f9f8f8; ">
        <div class="header-3">
            <el-row>
                <el-col :span="4"></el-col>
                <el-col :span="5">
                    <img src="../../assets/img/avatar.png" style="height: 200px; width: 200px; margin-top: 30px; border: 1px solid white; border-radius: 5px;"/>
                </el-col>
                <el-col :span="15" style="margin-top: 30px;">
                    <el-row  class="name_account">
                        <el-col :span="20">{{account.username}}</el-col>
                        <el-col :span="4" v-if="this.$route.params.user!=this.$store.state.user.id">
                            <el-button type="primary" @click="follow()" v-if="!isFollow">Follow</el-button>
                            <el-button type="primary" @click="follow()" v-else>Unfollow</el-button>

                        </el-col>
                    </el-row>
                    <hr style="margin-right: 10px; background-color:gray; height: 1px;"/>
                    <el-row>
                        <el-col :span="5" class="number-1">{{ account.number_follower }}</el-col>
                        <el-col :span="5" class="number-1">{{ account.number_folowing }}</el-col>
                        <el-col :span="5" class="number-1">{{account.total_vocabulary_learned}}</el-col>
                        <el-col :span="9" class="number-1">{{account.total_mark_learned}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5" class="number-2">Follower</el-col>
                        <el-col :span="5" class="number-2">Following</el-col>
                        <el-col :span="5" class="number-2">Words</el-col>
                        <el-col :span="9" class="number-2">Points</el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>  
 
            <el-row style="margin-top:20px; margin-left: 200px;">
                <el-radio-group v-model="tableLayout" @change="Change()">
                        <el-radio-button label="Follower" />
                        <el-radio-button label="Following" />
                        <el-radio-button label="Course" />
                </el-radio-group>
            </el-row>
           <el-row v-if="choice==1" style="margin-bottom:200px">
                <el-col :span="3"></el-col>
                <el-col :span="18">
                <div class="table_learned" style="margin-top: 20px;">
                    <div class="header_table">
                        <div class="text_header">
                            Follower
                        </div>
                    </div>
                    <div class="content_table">
                        <el-row v-for="item,index in follower" :key="index" style="cursor: pointer;" @click="goToAccountDetail(item.id)">
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">{{ index+1 }} .</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12>
                                <el-row class="point_complete">{{ item.username }}</el-row>
                            </el-col>
                        </el-row>

                      

                        
                    </div>
                </div>
                </el-col>
                <el-col :span="3"></el-col>
            </el-row>

            <el-row v-if="choice==2">
                <el-col :span="3"></el-col>
                <el-col :span="18">
                <div class="table_learned" style="margin-top: 20px;">
                    <div class="header_table">
                        <div class="text_header">
                            Following
                        </div>
                    </div>
                    <div class="content_table">
                        <el-row v-for="item,index in following" :key="index" style="cursor: pointer;" @click="goToAccountDetail(item.id)">
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">{{ index+1 }} .</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12>
                                <el-row class="point_complete">{{ item.username }}</el-row>
                            </el-col>
                        </el-row>
                        
                    </div>
                </div>
                </el-col>
                <el-col :span="3"></el-col>
            </el-row>

            <el-row v-if="choice==3" :gutter="20" style="margin-top: 20px; margin-bottom:50px;width: 100%;">
                <el-col :span="2"></el-col>
                <el-col :span="20">
                    <div class="content-container" style="margin-bottom: 30px; background-color: #f9f8f8;">
                    <div class="vocabulary-container" style="background-color: #f9f8f8;">
                        <div v-for="item,index in courses" :key="index">
                            <el-row :gutter="20"  v-if="index%3==0" style="margin-top:20px">
                                        <el-col :span="6" v-if="index<courses.length">
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
                                                                </el-row>
                                                        </div>

                                                        <div class="lesson_detail">
                                                                Lesson Detail
                                                        </div>
                                                        
                                                </el-card>
                                        </el-col>

                                        <el-col :span="6" v-if="index+1<courses.length">
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
                                                                </el-row>
                                                        </div>

                                                        <div class="lesson_detail">
                                                                Lesson Detail
                                                        </div>
                                                        
                                                </el-card>
                                        </el-col>

                                        <el-col :span="6" v-if="index+2<courses.length">
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
                                                                </el-row>
                                                        </div>

                                                        <div class="lesson_detail">
                                                                Lesson Detail
                                                        </div>
                                                        
                                                </el-card>
                                        </el-col>

                            </el-row>
                        </div>
                    </div>
                    </div>
              </el-col>
            </el-row>
       </div>
       
    </div>
  </template>
  
  <script>
  import SideBar from "@/components/Sidebar.vue";
  import axios from "axios";


  export default {
    name: "Dashboard",
  
    data() {
      return {
        tableLayout : 'Follower',
        choice : 1,
        account:{},
        courses:[],
        follower:[],
        following:[],
        isFollow:false
      };
    },
    components: {
      SideBar,
    
    },
    async mounted(){
        this.$store.commit('setIsLoading',true)
        this.getAccount()
        this.getFollower()
        this.$store.commit('setIsLoading',false)
    },
    methods:{
        goToAccountDetail(id){
            this.$router.push(`/account/${id}`)
        },
        getAccount(){
            var id = this.$route.params.user

            axios
                .get(`http://127.0.0.1:8000/api/v1/auth/admin/account/${id}`)
                .then((response) => {
                    this.account = response.data
                })
                .catch((error) => console.log(error));
        },

        getCourse(){
            var id = this.$route.params.user

            axios
                .get(`http://127.0.0.1:8000/api/v1/course/admin/${id}`)
                .then((response) => {
                    this.courses = response.data
                })
                .catch((error) => console.log(error));
            
        },

        getFollower(){
            var id = this.$route.params.user

            axios
                .get(`http://127.0.0.1:8000/api/v1/auth/follower/list/${id}`)
                .then((response) => {
                    console.log(response.data)
                    this.follower =  response.data['follower']
                    this.following = response.data.following
                     for (var i =0;i<response.data['follower'].length;i++){
                        if (this.follower[i].id == this.$store.state.user.id){
                            this.isFollow = true
                        }
                    }
                })
                .catch((error) => console.log(error));

               
        },

        Change(){
            if (this.tableLayout=="Course"){
                this.choice = 3
                this.getCourse()
            }

            else if (this.tableLayout=="Follower"){
                this.choice = 1
            } 
            else this.choice =2
        },

        follow(){
            const id_user = this.$route.params.user
            const data = {
                "user" : id_user,
                "user_follow": this.$store.state.user.id
            }
            axios
                .post(`http://127.0.0.1:8000/api/v1/auth/follower`,data)
                .then((response) => {
                    this.getAccount()
                    this.getFollower()
                })
                .catch((error) => console.log(error));
        }
      
    },
   
  };
  </script>
  
  <style lang="scss">
   
  </style>
  
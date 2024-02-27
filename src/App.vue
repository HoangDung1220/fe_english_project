<template>
  <div>
       <div v-if="!this.$store.state.isManupulation">
  <template v-if="this.$store.state.isAuthenticated">
   <div class="header" v-if="!this.$store.state.isWorkspace">
         <div class="menu"  >
            <div class="menu-item"  @click="goToHome()">
                   <span>Home</span>
                   <div class="marked" v-if="this.$store.state.nav.is_home"></div>
            </div>
            <div class="menu-item" @click="goToCourse()">
                   <span>Course</span>
                   <div class="marked" v-if="this.$store.state.nav.is_course" ></div>
            </div>
           
            <div class="menu-item" @click="goToGroup()">
                   <span>Group</span>
                   <div class="marked" v-if="this.$store.state.nav.is_group" ></div>

            </div>

            <div class="menu-item" @click="goToSpace()">
                   <span>Workspace</span>
                   <div class="marked" v-if="this.$store.state.nav.is_space" ></div>
            </div>

            <div class="menu-item-1" >
              <el-row :gutter="5"><el-col :span="15"></el-col>
                     <el-col :span="3" ><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" style="height: 50px; width: 50px; border-radius: 50%;"/></el-col>
                     <el-col :span="6" style="text-align: left;">
                            <el-dropdown @command="handleCommand" style="border: none; outline: none;">
                                   <span class="menu-item-1">
                                   Welcome, {{ $store.state.user.username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                   </span>
                                   <template #dropdown>
                                   <el-dropdown-menu>
                                          <el-dropdown-item command="a">Profile</el-dropdown-item>
                                          <el-dropdown-item command="b">Leader board</el-dropdown-item>
                                          <el-dropdown-item command="c" divided @click="logout()">Log out</el-dropdown-item>
                                   </el-dropdown-menu>
                                   </template>
                                   </el-dropdown>
                     </el-col>
              </el-row>
              
            </div>
         </div>
       </div>
       </template>

         <template v-else>
              <div class="promo-banner-fixed">
                     <div class="container" v-if="!is_login_ing">
                            <el-row>
                                   <el-col :span="22"></el-col>
                                   <el-col :span="2"><a class="login-button" @click="login()"> Login</a></el-col>
                            </el-row>
                     </div>
              </div>

              <div class="header-login">
                     <div class="menu-login">
                            <div class="menu-item-login">
                                   <el-row><el-button class="button-1" color="#ffc000">Start learning</el-button></el-row>
                            </div>
                            <div class="menu-item-login">
                                   <el-popover
                                          placement="bottom-start"
                                          
                                          :width="400"
                                          trigger="hover"
                                          >
                                          <template #reference>
                                                 <span>Course</span>
                                          </template>
                                          <div v-for="item,index in languages" :key="index">
                                          <el-row v-if="index%3==0">
                                                 <el-col :span="8" class="language" v-if="index<languages.length" @click="goToCoursePublic(languages[index].id)">{{ languages[index].name }}</el-col>
                                                 <el-col :span="8" class="language" v-if="index+1<languages.length" @click="goToCoursePublic(languages[index+1].id)">{{ languages[index+1].name }}</el-col>
                                                 <el-col :span="8" class="language" v-if="index+2<languages.length" @click="goToCoursePublic(languages[index+2].id)">{{ languages[index+2].name }}</el-col>
                                          </el-row>
                                          </div>
                                         
                                          </el-popover>
                                   <div class="marked"></div>
                            </div>

                            <div class="menu-item-login">
                                   <span>Group</span>
                                   <div class="marked"></div>
                            </div>
                            
                     </div>
                    
              </div>
       
       </template>
       </div>
      
  <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
       data() {
       return{
              is_login :  false,
              username : "",
              is_login_ing : false,
              languages : []
       }
       },

       mounted(){
                     this.$store.commit('initializeStore')
                     if (this.$store.state.token){
                     axios.defaults.headers.common['Authorization'] = 'Token '+ this.$store.state.token.access
                     this.username = this.$store.state.user.username
                     } else {
                     axios.defaults.headers.common['Authorization'] = ""
                     }

                     axios
                            .get("http://127.0.0.1:8000/api/v1/course/category")
                            .then((response) => {
                            this.languages = response.data.results
                            console.log(this.languages)
                            })
                            .catch((error) => console.log(error));
                     this.$store.state.isManupulation = false
       },
       
       methods: {
              fetchData(){
                     this.$store.commit('initializeStore')
                     if (this.$store.state.token){
                     axios.defaults.headers.common['Authorization'] = 'Token '+ this.$store.state.token.access
                     } else {
                     axios.defaults.headers.common['Authorization'] = ""
                     }
              },
              async login(){
                     this.$store.commit('setIsLoading',true)
                     this.$router.push('/login')
              },
              goToHome(){
                     this.$router.push('/') 
              },
              goToCourse(){
                     this.$router.push('/course') 
              },
              goToGroup(){
                     this.$router.push('/m-group') 
              },
              goToSpace(){
              
                     this.$router.push('/group') 
              },
              logout(){
                     axios.defaults.headers.common["Authorization"] = "";
                     localStorage.removeItem("token_access");
                     localStorage.removeItem("token_refresh");
                     localStorage.removeItem("userid");
                    // localStorage.removeItem("role");
                     localStorage.removeItem("username");
                     this.$store.commit('removeToken')
                     this.$store.commit('removeUser')
                     this.$router.push('/home')
              
              },
              goToCoursePublic(id){
                     this.$store.state.isManupulation = true
                     this.$router.push(`en/learn/${id}`) 

              },
       }
}
</script>

<style lang="scss">
@import "../node_modules/bulma";
@import "assets/css/header.scss";
@import "assets/css/home.scss";


</style>

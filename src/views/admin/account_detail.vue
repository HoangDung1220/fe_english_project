<template>
    <div>
      <el-container class="layout-container-demo">
        <SideBar />
        <el-container style="background-color: #f9f8f8; ">
        <div class="header-3">
            <el-row>
                <el-col :span="4"></el-col>
                <el-col :span="5">
                    <img src="../../assets/img/avatar.png" style="height: 200px; width: 200px; margin-top: 30px; border: 1px solid white; border-radius: 5px;"/>
                </el-col>
                <el-col :span="15" style="margin-top: 30px;">
                    <el-row  class="name_account">
                        <el-col :span="20">{{account.username}}</el-col>
                        <el-col :span="4"><el-button type="primary" >Follow</el-button></el-col>
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
            <el-row style="margin-top:100px; margin-left: 20px;">
                <el-radio-group v-model="tableLayout">
                        <el-radio-button label="Follower" />
                        <el-radio-button label="Following" />
                        <el-radio-button label="Course" />
                </el-radio-group>
            </el-row>
            <el-row v-if="choice==1">
                <el-col :span="3"></el-col>
                <el-col :span="18">
                <div class="table_learned" style="margin-top: 20px;">
                    <div class="header_table">
                        <div class="text_header">
                            Follower
                        </div>
                    </div>
                    <div class="content_table">
                        <el-row>
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">01.</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12>
                                <el-row class="point_complete">HoangDung_2002</el-row>
                            </el-col>
                        </el-row>

                        <el-row style="margin-top: 10px;">
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">02.</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12>
                                <el-row class="point_complete">HoangDung_2002</el-row>
                            </el-col>
                        </el-row>

                        <el-row style="margin-top: 10px;">
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">03.</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12>
                                <el-row class="point_complete">HoangDung_2002</el-row>
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
                        <el-row>
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">01.</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12>
                                <el-row class="point_complete">HoangDung_2002</el-row>
                            </el-col>
                        </el-row>

                        <el-row style="margin-top: 10px;">
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">02.</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12>
                                <el-row class="point_complete">HoangDung_2002</el-row>
                            </el-col>
                        </el-row>

                        <el-row style="margin-top: 10px;">
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">03.</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12>
                                <el-row class="point_complete">{{account.user_name}}</el-row>
                            </el-col>
                        </el-row>

                        
                    </div>
                </div>
                </el-col>
                <el-col :span="3"></el-col>
            </el-row>

            <el-row v-if="choice==3" :gutter="20" style="margin-top: 20px;">
                <el-col :span="2"></el-col>
                                <el-col :span="5">
                                          <el-card :body-style="{ padding: '0px' }" class="card">
                                                 <div class="image-card" style="height: 200px; margin: 10px;">
                                                 <img class="image"
                                                 src="../../assets/img/image3.png"  style="height: 200px; width: 300px;"
                                                 /></div>
                                                 <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>Hoang Dung</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>

                                                 </div>
                                                 <div class="description-2">
                                                        <el-row>
                                                               <el-col :span="2"></el-col>
                                                               <el-col :span="10" class="quantity"><el-icon :size="20"><Avatar /></el-icon>   256k</el-col>
                                                               <el-col :span="10"><font-awesome-icon icon="fa-light fa-heart" style="color: #ee1b1b;" /></el-col>
                                                               <el-col :span="2"></el-col>
                                                        </el-row>
                                                 </div>
                                          </el-card>
                                   </el-col>
                                   <el-col :span="5">
                                          <el-card :body-style="{ padding: '0px' }" class="card">
                                                 <div class="image-card" style="height: 200px; margin: 10px;">
                                                 <img class="image"
                                                 src="../../assets/img/image3.png"   style="height: 200px; width: 300px;"
                                                 /></div>
                                                 <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>Hoang Dung</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 <div class="description-2">
                                                        <el-row>
                                                               <el-col :span="2"></el-col>
                                                               <el-col :span="10" class="quantity"><el-icon :size="20"><Avatar /></el-icon>   256k</el-col>
                                                               <el-col :span="10"><font-awesome-icon icon="fa-light fa-heart" style="color: #ee1b1b;" /></el-col>
                                                               <el-col :span="2"></el-col>
                                                        </el-row>
                                                 </div>
                                          </el-card>
                                   </el-col>
                                   <el-col :span="5">
                                          <el-card :body-style="{ padding: '0px' }" class="card">
                                                 <div class="image-card" style="height: 200px; margin: 10px;">
                                                 <img class="image"
                                                 src="../../assets/img/image3.png" style="height: 200px; width: 300px;"
                                                 /></div>
                                                 <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>Hoang Dung</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 <div class="description-2">
                                                        <el-row>
                                                               <el-col :span="2"></el-col>
                                                               <el-col :span="10" class="quantity"><el-icon :size="20"><Avatar /></el-icon>   256k</el-col>
                                                               <el-col :span="10"><font-awesome-icon icon="fa-light fa-heart" style="color: #ee1b1b;" /></el-col>
                                                               <el-col :span="2"></el-col>
                                                        </el-row>
                                                 </div>
                                          </el-card>
                                   </el-col>
                                   <el-col :span="5">
                                          <el-card :body-style="{ padding: '0px' }" class="card">
                                                 <div class="image-card" style="height: 200px; margin: 10px;">
                                                 <img class="image"
                                                 src="../../assets/img/image3.png"  style="height: 200px; width: 300px;"
                                                 /></div>
                                                 <div class="description-1">
                                                        <el-row>
                                                               <el-col :span="8"></el-col>
                                                               <el-col :span="15" style="font-size: 13px;"> <span style="float: right;">by <a>Hoang Dung</a></span></el-col>
                                                               <el-col :span="1"></el-col>
                                                        </el-row>
                                                 </div>
                                                 <div class="description-2">
                                                        <el-row>
                                                               <el-col :span="2"></el-col>
                                                               <el-col :span="10" class="quantity"><el-icon :size="20"><Avatar /></el-icon>   256k</el-col>
                                                               <el-col :span="10"><font-awesome-icon icon="fa-light fa-heart" style="color: #ee1b1b;" /></el-col>
                                                               <el-col :span="2"></el-col>
                                                        </el-row>
                                                 </div>
                                          </el-card>
                                   </el-col>
            </el-row>
        </div>  
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
        tableLayout : 'Follower',
        choice : 3,
        account:{}
       
      };
    },
    components: {
      SideBar,
    
    },
    async mounted(){
        this.$store.commit('setIsLoading',true)
        var id = this.$route.params.user

            await axios
                .get(`http://127.0.0.1:8000/api/v1/auth/admin/account/${id}`)
                .then((response) => {
                    this.account = response.data
                })
                .catch((error) => console.log(error));
            
            this.$store.commit('setIsLoading',false)
    },
    methods:{
      
    },
   
  };
  </script>
  
  <style lang="scss">
   
  </style>
  
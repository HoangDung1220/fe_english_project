<template>
    <div>
   
    <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>

    <div class="content-course" style="margin:30px;">
        <el-row>
            <el-col :span="4"></el-col>
            <el-col :span = "16">
                <el-card style="width: 100%;">
                    <div class="title-leader-board">Leader board </div>
                    <ul>
                        <li v-for="item,index in leader_boards" :key="index" >
                            <div class="leader-board-row" v-if="item.id!=this.id_user" @click="goToAccount(item.id)">
                                <span class="row-pic"><img src="../../assets/img/avatar.png" class="row-pic"/></span>
                                <span class="row-username" style="font-size: 20px;">{{ index +1 }}. </span>
                                <span class="row-username" style="font-size: 20px;"> {{ item.username }}</span>
                                <span class="row-point" style="font-size: 20px;">{{item.total_mark_learned}}</span>
                            </div>
                            <div class="leader-board-row" v-else style="background-color: #2b3648; color:white" @click="goToAccount(item.id)">
                                <span class="row-pic"><img src="../../assets/img/avatar.png" class="row-pic"/></span>
                                <span class="row-username" style="font-size: 20px; ">{{ index +1 }}. </span>
                                <span class="row-username" style="font-size: 20px; width: 200px;"> {{ item.username }}</span>
                                <span class="row-point" style="font-size: 20px;">{{item.total_mark_learned}}</span>
                            </div>
                        </li>
                    </ul>
                </el-card>
            </el-col>
            <el-col :span="4"></el-col>    
        </el-row>
      
      
       
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
   name: "LeaderBoard",
   data(){
    return{
      
        leader_boards:[],

    }
   },
   async mounted(){
    this.$store.commit('setIsLoading',true)
    this.id_user = this.$store.state.user.id
   
    
    await axios
                .get(`http://127.0.0.1:8000/api/v1/auth/leader-board/${this.id_user}`)
                .then((response) => {
                    this.leader_boards = response.data
                    console.log(this.leader_boards)                    
                })
                .catch((error) => console.log(error));


    this.$store.commit('setIsLoading',false)
   },

   methods:{


    goToAccount(id){
        this.$router.push(`/account/${id}`)
    }

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
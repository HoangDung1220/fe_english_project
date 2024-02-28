<template>
    <div>
        <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>

        <div class="complete-div-1">
            <div class="complete-text">You completed the session!</div>
        </div>

        <el-row style="margin-top: 50px;">
            <el-col :span="3"></el-col>
            <el-col :span="9">
                <div class="table_learned">
                    <div class="header_table">
                        <div class="text_header">
                            Your progess
                        </div>
                    </div>
                    <div class="content_table">
                        <el-row>
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">Point earned</el-row>
                                <el-row class="score_complete">{{ score }}</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =12 v-if="!isRatingBf">
                                <el-row class="point_complete">Rating for course</el-row>
                                <el-row>
                                    <div v-for="i in 5" :key="i">
                                        <el-icon style="color: yellow; border-color: black;" size="25" v-if="i<=mark" @click="rating(i)"><StarFilled /></el-icon>
                                        <el-icon  size="25" style="cursor: pointer;" @click="rating(i)" v-else><Star /></el-icon>

                                    </div>

                                    
                                </el-row>
                            </el-col>
                        </el-row>

                        
                    </div>
                </div>


                <div class="table_learned_1" style="margin-top: 20px;">
                    <div class="header_table_1">
                        <div class="text_header">
                            You just learned
                        </div>
                    </div>
                    <!-- <div class="table_vocabulary">
                        <ul class="content_vocabulary">
                            <li class="item_vocabulary" v-for="item in vocabularies" :key="item">
                                <div class="item">
                                    <h3 style="font-size: 1rem;">{{ item.vocabulary }}</h3>
                                    <img class="image_vocabulary" v-bind:src="item.image" />
                                </div>
                            </li>
                        </ul>
                        
                    </div> -->
                    </div>
            </el-col>
            <el-col :span="10">
                
                <div style="margin-left: 50px;" >
                    <h4 class="text_choice">Or choose your session</h4>

                    <el-row :gutter="20">
                        <el-col span="5"><a class="button_1" :href="url_learn_word"><el-icon size="30"><Pointer /></el-icon></a><span class="item_choice">Learn new word</span></el-col>
                        <el-col span="5"><a class="button_2"><el-icon size="30"><Aim /></el-icon></a><span class="item_choice">Speed review</span></el-col>
                    </el-row>
                    
                </div>

               
                <div class="table_learned_2" style="margin:50px">
                    <div class="header_table_2">
                        <div class="text_header">
                            The leader board of course
                        </div>
                    </div>
                    <div class="table_vocabulary">
                        <ul class="content_vocabulary_1">
                            <li v-for="item,index in leader_boards" :key="index" >
                            <div class="leader-board-row" v-if="item.user.id!=this.id_user" @click="goToAccount(item.user.id)">
                                <span class="row-pic"><img src="../../assets/img/avatar.png" class="row-pic"/></span>
                                <span class="row-username">{{ index +1 }}. </span>
                                <span class="row-username"> {{ item.user.username }}</span>
                                <span class="row-point">{{item.total_score}}</span>
                            </div>
                            <div class="leader-board-row" v-else style="background-color: #2b3648; color:white" @click="goToAccount(item.user.id)">
                                <span class="row-pic"><img src="../../assets/img/avatar.png" class="row-pic"/></span>
                                <span class="row-username">{{ index +1 }}. </span>
                                <span class="row-username"> {{ item.user.username }}</span>
                                <span class="row-point">{{item.total_score}}</span>
                            </div>
                        </li>

                        </ul>
                        
                    </div>
                    </div>
            </el-col>
            <el-col :span="2"></el-col>
        </el-row>


    </div>
    
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            id_course : "",
            id_level : "",
            score : 0,
            vocabularies:[],
            url_learn_word : "",
            mark :0,
            leader_boards:[],
            isRatingBf:false
        }
    },

    async mounted(){
        this.$store.commit('setIsLoading',true)
        const nav = {
                "is_home" : false,
                "is_course": true
        }

        this.$store.commit('setNav',nav)
        this.id_level = this.$route.params.id_level
        const id_vocabulary = this.$route.params.id_vocabulary
        this.score = this.$route.params.score
        const id_user = this.$store.state.user.id
        this.id_course = this.$route.params.id_course

        // await axios
        //             .get(`http://127.0.0.1:8000/api/v1/course/learn?level=${this.id_level}&user=${id_user}&course=${this.id_course}`)
        //             .then((response) => {
        //                 this.vocabularies = response.data.data
        //                 console.log(this.vocabularies)
        //             })
        //             .catch((error) => console.log(error));

        const data={
                        "user" : id_user,
                        "level" : this.id_level,
                        "vocabulary" : id_vocabulary,
                        "score": this.score
                    }
        await axios
            .patch('http://127.0.0.1:8000/api/v1/study/exam_review',data)
            .then((response) => {               
                    this.url_learn_word=`http://localhost:8080/course/${this.id_course}/level/${this.id_level}`
                
            })
            .catch((error) => console.log(error));

            await axios
                .get(`http://127.0.0.1:8000/api/v1/leader-board/${this.id_course}`)
                .then((response) => {
                    this.leader_boards = response.data
                    console.log(this.leader_boards)                    
                })
                .catch((error) => console.log(error));

            await axios
                .get(`http://127.0.0.1:8000/api/v1/course/rating/${this.id_course}/${this.$store.state.user.id}`)
                .then((response) => {

                    if (response.data != null)   {
                        this.isRatingBf = true
                    }             
                })
                .catch((error) => console.log(error));


        this.$store.commit('setIsLoading',false)
    },
    methods:{
        rating(i){
            this.mark = i
            const data = {
                "user":this.$store.state.user.id,
                "course":this.id_course,
                "rating":this.mark
            }
            axios
                .post(`http://127.0.0.1:8000/api/v1/course/rating`,data)
                .then((response) => {
                               
                })
                .catch((error) => console.log(error));
        },
        
    }
}
</script>

<style lang="scss">

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

.is_right{
    background-color: green;
}

.is_wrong{
    background: red;
}

.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 100%;
}

</style>
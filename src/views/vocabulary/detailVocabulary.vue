<template>
    <div>
    <div class="header-1">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="4">
                <img class="image-course" style="height: 120px;width: 200px;" v-bind:src="course.image" >
            </el-col>
            <el-col :span="10">
            <el-row class="title-course-1"><h3>{{ course.title }}</h3></el-row>
            <el-row class="description" style=" margin-bottom:3px">{{ course.description }}</el-row>
            </el-col>
            <el-col :span="7">
                <el-row><el-button class="button-1" color="#ffc000">Get started now</el-button></el-row>
            </el-col>
        </el-row>

    </div>

    <div class="nav">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="10" class="level">
                <el-button round color="#b9d7e3" v-if="level.length>0">Levels: {{ this.level.length }}</el-button>
                <el-button round color="#b9d7e3" v-else>Words</el-button>
            </el-col>
        </el-row>
    </div>
    
    <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>

    <div class="content-course">
        <el-row v-if="level.length">
            <el-col :span="3"></el-col>
            <el-col :span="15" v-for="(item, index) in level" :key="index" >
                <el-row :gutter="20" class="row-item" v-if="index%5==0">
                    <el-col :span="4" v-if="index<level.length">
                        <el-card :body-style="{ padding: '0px' }" class="card card-1" shadow="hover" style="cursor: pointer;" @click="goToLevel(level[index].id)">
                               <div class="image-1">
                                    <div class="level-index">{{ index+1 }}</div>
                                    
                                    <div >
                                        <el-row>
                                            <el-col :span="5"></el-col>
                                            <el-col :span="14" style="margin-top:30px">
                                                <el-icon :size="60" color="#32CD32" v-if="status_user_level[level[index].id]=='done'"><CircleCheck /></el-icon>  
                                                <el-icon :size="70" color="yellow" v-if="status_user_level[level[index].id]=='doing'"><Opportunity /></el-icon>  
                                                <el-icon :size="70"  v-if="status_user_level[level[index].id]=='todo'"><Opportunity /></el-icon>  
                                            </el-col>
                                            <el-col :span="5"></el-col>
                                        </el-row>
                                        
                                    </div>
                               </div>
                               
                               
                               <div class="level-title">
                                    {{ level[index].title }}
                               </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" v-if="index+1<level.length">
                        <el-card :body-style="{ padding: '0px' }" class="card card-1" shadow="hover" style="cursor: pointer;" @click="goToLevel(level[index+1].id)">
                               <div class="image-1">
                                    <div class="level-index">{{ index+2 }}</div>
                                    
                                    <div >
                                        <el-row>
                                            <el-col :span="5"></el-col>
                                            <el-col :span="14" style="margin-top:30px">
                                                <el-icon :size="60" color="#32CD32" v-if="status_user_level[level[index+1].id]=='done'"><CircleCheck /></el-icon>  
                                                <el-icon :size="70" color="yellow" v-if="status_user_level[level[index+1].id]=='doing'"><Opportunity /></el-icon>  
                                                <el-icon :size="70"  v-if="status_user_level[level[index+1].id]=='todo'"><Opportunity /></el-icon>  
                                            </el-col>
                                            <el-col :span="5"></el-col>
                                        </el-row>
                                        
                                    </div>
                               </div>
                               
                               
                               <div class="level-title">
                                {{ level[index+1].title }}
                               </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" v-if="index+2<level.length">
                        <el-card :body-style="{ padding: '0px' }" class="card card-1" shadow="hover" style="cursor: pointer;" @click="goToLevel(level[index+2].id)">
                               <div class="image-1">
                                    <div class="level-index">{{ index+3 }}</div>
                                    
                                    <div >
                                        <el-row>
                                            <el-col :span="5"></el-col>
                                            <el-col :span="14" style="margin-top:30px">
                                                <el-icon :size="60" color="#32CD32" v-if="status_user_level[level[index+2].id]=='done'"><CircleCheck /></el-icon>  
                                                <el-icon :size="70" color="yellow" v-if="status_user_level[level[index+2].id]=='doing'"><Opportunity /></el-icon> 
                                                <el-icon :size="70" v-if="status_user_level[level[index+2].id]=='todo'"><Opportunity /></el-icon>
                                            </el-col>
                                            <el-col :span="5"></el-col>
                                        </el-row>
                                        
                                    </div>
                               </div>
                               
                               
                               <div class="level-title">
                                {{ level[index+2].title }}
                               </div>
                        </el-card></el-col>
                    <el-col :span="4" v-if="index+3<level.length">
                        <el-card :body-style="{ padding: '0px' }" class="card card-1" shadow="hover" style="cursor: pointer;" @click="goToLevel(level[index+3].id)">
                               <div class="image-1">
                                    <div class="level-index">{{ index+4 }}</div>
                                    
                                    <div>
                                        <el-row>
                                            <el-col :span="5"></el-col>
                                            <el-col :span="14" style="margin-top:30px">
                                                <el-icon :size="60" color="#32CD32" v-if="status_user_level[level[index+3].id]=='done'"><CircleCheck /></el-icon>  
                                                <el-icon :size="70" color="yellow" v-if="status_user_level[level[index+3].id]=='doing'"><Opportunity /></el-icon>  
                                                <el-icon :size="70"  v-if="status_user_level[level[index+3].id]=='todo'"><Opportunity /></el-icon> 
                                            </el-col>
                                            <el-col :span="5"></el-col>
                                        </el-row>
                                        
                                    </div>
                               </div>
                               
                               
                               <div class="level-title">
                                {{ level[index+3].title }}
                               </div>
                        </el-card></el-col>
                    <el-col :span="4" v-if="index+4<level.length">
                        <el-card :body-style="{ padding: '0px' }" class="card card-1" shadow="hover" style="cursor: pointer;" @click="goToLevel(level[index+4].id)">
                               <div class="image-1">
                                    <div class="level-index">{{ index+5 }}</div>
                                    
                                    <div>
                                        <el-row>
                                            <el-col :span="5"></el-col>
                                            <el-col :span="14" style="margin-top:30px">
                                                <el-icon :size="60" color="#32CD32" v-if="status_user_level[level[index+4].id]=='done'"><CircleCheck /></el-icon>  
                                                <el-icon :size="70" color="yellow" v-if="status_user_level[level[index+4].id]=='doing'"><Opportunity /></el-icon>  
                                                <el-icon :size="70"  v-if="status_user_level[level[index+4].id]=='todo'"><Opportunity /></el-icon> 
                                            </el-col>
                                        </el-row>
                                        
                                    </div>
                               </div>
                               
                               
                               <div class="level-title">
                                {{ level[index+4].title }}
                               </div>
                        </el-card></el-col>
                </el-row>
              
            </el-col>
        </el-row>
        <div v-else>
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
                        <el-table-column prop="vocabulary" label="Vocabulary" width="230"/>
                        <el-table-column prop="mean" label="Mean" width="170" />
                        <el-table-column prop="sample" label="Sample" width="280" />
                        <el-table-column fixed="right" label="" width="50">
                        <template #default>
                            <el-button link type="primary" size="large" @click="handleClick"
                            >Detail</el-button
                            >
                        
                        </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="5"></el-col>
        </el-row>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
   name: "DetailVocabulary",
   data(){
    return{
        course:{},
        level : [],
        vocabulary : [],
        id_course : "",
        level_course :[],
        status_user_level : [],

    }
   },
   async mounted(){
    this.$store.commit('setIsLoading',true)
    const nav = {
            "is_home" : false,
            "is_course": true
        }
    this.$store.commit('setNav',nav)
    this.id_course = this.$route.params.id
    const id_user = this.$store.state.user.id
    await axios
                .get(`http://127.0.0.1:8000/api/v1/course/${this.id_course}`)
                .then((response) => {
                    this.course = response.data.course
                    this.level = response.data.level
                    this.vocabulary = response.data.vocabulary
                    console.log(response.data)
                })
                .catch((error) => console.log(error));

    await axios
                .get(`http://127.0.0.1:8000/api/v1/self/course?user=${id_user}&course=${this.id_course}`)
                .then((response) => {
                    this.level_course = response.data.data
                    this.initialStatus()
                    
                })
                .catch((error) => console.log(error));


    this.$store.commit('setIsLoading',false)
   },

   methods:{
     goToLevel(id_level){
        this.$store.commit('setIsLoading',true)
        this.$router.push(`/course/${this.id_course}/level/${id_level}`)
        this.$store.commit('setIsLoading',false)

    },

    initialStatus(){
        for (var i =0; i<this.level.length; i++){
            this.status_user_level[this.level[i].id] = "todo"
        }

        for (var i = 0; i<this.level_course.length; i++){
            if (this.level_course[i].is_complete) this.status_user_level[this.level_course[i].level] = 'done'
            if (!this.level_course[i].is_complete) this.status_user_level[this.level_course[i].level] = 'doing'
        }
        console.log("plessss")
        console.log(this.status_user_level)
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
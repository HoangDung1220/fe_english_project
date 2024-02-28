<template>
    <div>
      <el-container class="layout-container-demo">
        <el-container style="background-color: #f9f8f8; min-height:100vh;height: 100%;">
          <el-main>
            <div class="main-container">
                <el-row class="title">
                    <el-col :span="17"><h1>Adding words in course</h1></el-col>
                </el-row>
                <el-row style="margin-top: 20px;" v-for="it,i in levels_save" :key="i">
                   <el-col :span="1"></el-col>
                   <el-col :span="22">
                        <el-card>
                            <div class="card-header" >
                                <el-row>
                                    <el-col>
                                      <span style="font-weight: 600; ">Level {{ it.indexing }} : 
                                        
                                      <span v-if="!is_edit[i]">  {{ it.name }}</span>
                                      <el-input v-else v-model="tmp" @change="changeLevelName(i,it)"> </el-input>
                                      </span> 
                                      <el-icon style="cursor: pointer;" @click="clickEdit(i,it)"><EditPen /></el-icon>
                                    </el-col>
                                </el-row>
                                <el-row :span="4"><el-button class="button" plain type="success" @click="createNewWord(i)" style="margin-right: 10px;">Add new word</el-button></el-row>
                                
                            </div>
                            <el-row :gutter="10" style="margin-top: 10px; font-weight: 600; font-family: SVN-Poppins;">
                                <el-col :span="4">Words</el-col>
                                <el-col :span="4">Mean</el-col>
                                <el-col :span="4">Description</el-col>
                                <el-col :span="4">Example</el-col>
                                <el-col :span="4">Image</el-col>
                                <el-col :span="4">Audio</el-col>
                            </el-row>
                            <div v-for="index in num_word[i]" :key="index">
                              
                            <el-row :gutter="10" style="margin-top: 10px;">
                                <el-col :span="4"><el-input v-model="words[index-1+default_record[i]]" @click="getIndex(index-1+default_record[i])"></el-input></el-col>
                                <el-col :span="4"><el-input v-model="means[index-1+default_record[i]]" type="textarea"
                                  autosize="true"></el-input></el-col>
                                <el-col :span="4"><el-input v-model="descriptions[index-1+default_record[i]]" type="textarea" 
                                  autosize="true"></el-input></el-col>
                                <el-col :span="4"><el-input v-model="examples[index-1+default_record[i]]" type="textarea"
                                  autosize="true"></el-input></el-col>
                                <el-col :span="4"><input type="file" @change="onFileChange" /></el-col>
                                <el-col :span="4"><input type="file" @change="onFileChangeAudio"/></el-col>
                            </el-row>
                            </div>
                        </el-card>

                    </el-col>
                    <el-col :span="1"></el-col>

                </el-row>
            
                <el-button type="primary"  @click="addNewLevel()" style="margin: 50px;">Add new level</el-button>
                <el-button type="primary"  style="float: right; margin: 50px;" @click="SaveData()">Save</el-button>
              
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  import SideBar from "@/components/Sidebar.vue";
  import axios from "axios";
  import { ElMessage } from 'element-plus'


  export default {
    name: "Dashboard",
  
    data() {
      return {
       default_record : [0],
       num_word :[1],
       num_level :1,
       words:[],
       means:[],
       descriptions:[],
       examples:[],
       images:[],
       audios:[],
       levels :[0],
       current_id :0,
       tmp:"",
       levels_save :[
        {
          "id":0,
          "indexing": 1,
          "name": "Basic 1"
        }
       ],
       id_course : 0,
       is_edit:[false]
      };
    },
    components: {
      SideBar,
    
    },
    mounted(){
      this.id_course = this.$route.params.course
    },
    methods:{
        clickEdit(index,it){
          console.log(it)
          this.is_edit[index]=true
          this.tmp = it.name
          console.log(this.tmp)

        },
        searchCourse(){
            document.getElementById("search_course").style.borderBottom = "2px solid rgb(0, 0, 139)";
            console.log("hi")
        },

        createNewWord(index_level){
          if (this.audios[index_level]!=null && this.images[index_level]!=null || this.levels.indexOf(index_level)==-1){
            if (this.num_word[index_level] < 20){
                this.levels[this.num_word[index_level]+this.default_record[index_level]] = index_level
                this.num_word[index_level]=this.num_word[index_level]+1
            }
          } else
          {
            const message = "You must upload image and audio to continue"
            ElMessage.error(message)
          }
        },

        addNewLevel(){
          this.num_word.push(0)
          const name_index = this.levels_save[this.levels_save.length-1].indexing +1
          const value = {
            "indexing": this.levels_save[this.levels_save.length-1].indexing +1 ,
            "name": "Basic" + name_index
          }
          this.levels_save.push(value)
          this.is_edit.push(false)
          this.num_level = this.num_level +1
          this.default_record.push(this.default_record[this.default_record.length-1]+20)
        },

        async SaveData(){
          for (var index in this.levels_save){
            const data = {
                "course" : this.id_course,
                "title":this.levels_save[index].name,
                "indexing":this.levels_save[index].indexing
            }
            await axios
                    .post(`http://127.0.0.1:8000/api/v1/course/level/`,data)
                    .then((response) => {
                        this.levels_save[index].id = response.data.id
                    })
                    .catch((error) => console.log(error));
          }
         

          for (var index in this.words){
            if (this.words[index].length>0){
              const formData = new FormData();
              formData.append('vocabulary',this.words[index])
              formData.append('course',this.id_course)
              formData.append('mean',this.means[index])
              formData.append('sample',this.examples[index])
              formData.append('description',this.descriptions[index])
              formData.append('image',this.images[index])
              formData.append('audio',this.audios[index])
              formData.append('level',this.levels_save[this.levels[index]].id)

            
            await axios
                    .post(`http://127.0.0.1:8000/api/v1/vocabulary/create`,formData)
                    .then((response) => {
                      this.$router.push("/course")
                    })
                    .catch((error) => console.log(error));
                  }
          }
        },

        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.images[this.current_id] = files[0]      
        },

        getIndex(index){
          this.current_id = index
          console.log(this.current_id)

        },

        onFileChangeAudio(e){
            var files = e.target.files || e.dataTransfer.files;
            this.audios[this.current_id] = files[0]
        },

        changeLevelName(index,level){
          this.levels_save[index].name = this.tmp
          // const data = {
          //   "title" : this.tmp
          // }
          // axios
          //           .patch(`http://127.0.0.1:8000/api/v1/course/update-level/${level.id}`,data)
          //           .then((response) => {
          //             this.levels[index].name = this.tmp
          //           })
          //           .catch((error) => console.log(error));
                    this.is_edit[index] = false
                  },

        },
   
  };
  </script>
  
  <style lang="scss">
    #search_course{
        height: 36px;
        padding: 7px 0;
        font-size: 14px!important;
        -webkit-text-fill-color: #495057!important;
        padding-right: 30px;
        display: block;
        flex: 1;
        border: none;
        background: 0 0;
        transition: .4s cubic-bezier(.25,.8,.25,1);
        transition-property: font-size,padding-top,color;
        font-family: inherit;
        font-size: 16px;
        line-height: 32px;
        margin-bottom: 20px;
        outline: none;

      
    }

    .box-card {
        width: 480px;
        background-color: green;
    }

    .avatar-uploader .avatar {
        width: 178px;
        height: 178px;
        display: block;
        }

        .avatar-uploader .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
        }

        .avatar-uploader .el-upload:hover {
        border-color: var(--el-color-primary);
        }

        .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        text-align: center;
        }
    .label-create{
        font-weight: 600;
        font-size: 18px;
        margin-top: 10px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        height: 50px;
        }
  </style>
  
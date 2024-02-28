<template>
    <div>
        
        <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>
        <el-row>
            <el-col :span="6" style="z-index: 3;position: relative" >
                <div class="nav" style="min-height:100vh;height: 100%;">
                        <el-row class="group" style="cursor: pointer;">Group</el-row>
                       

                        <el-row style="margin-top: 10px;" class="item_card_group_1" v-if="is_suggest && id_group ==0" >
                            <el-col :span="2"></el-col>
                            <el-col :span="20" >
                                 <div><el-icon size="20" style="margin-top:10px; margin-right: 10px;"><Operation /></el-icon> Khám phá </div>
                            </el-col>
                            <el-col :span="2"></el-col>
                        </el-row>

                        <el-row style="margin-top: 10px;" class="item_card_group" v-else @click="goToSuggest()">
                            <el-col :span="2"></el-col>
                            <el-col :span="20" >
                                 <div><el-icon size="20" style="margin-top:10px; margin-right: 10px;"><Operation /></el-icon> Khám phá </div>
                            </el-col>
                            <el-col :span="2"></el-col>
                        </el-row>
                        <div>
                        <el-row style="margin-top: 10px;" class="item_card_group_1" v-if="!is_suggest && id_group ==0">
                            <el-col :span="2"></el-col>
                            <el-col :span="20">
                                <div><el-icon size="20" style="margin-top:10px; margin-right: 10px;"><Coordinate /></el-icon> Nhóm của bạn</div>
                            </el-col>
                            <el-col :span="2"></el-col>
                        </el-row>

                        <el-row style="margin-top: 10px;" class="item_card_group" v-else @click="goToMyGroup()">
                            <el-col :span="2"></el-col>
                            <el-col :span="20">
                                <div><el-icon size="20" style="margin-top:10px; margin-right: 10px;"><Coordinate /></el-icon> Nhóm của bạn</div>
                            </el-col>
                            <el-col :span="2"></el-col>
                        </el-row>
                        </div>
                       
                        <hr/>
                        <el-row style="cursor: pointer;">
                            <el-col :span="16" class="group">Group had joined</el-col>
                        </el-row>

                        <div v-for="item, index in groups" :key="index" style="margin:2px">
                        <el-row style="margin-top: 10px; margin-right:10px" :gutter="20" class="group-joined" v-if="id_group!=item.group.id" @click="choiceGroup(item.group.id)" >
                            <el-col :span="1"></el-col>
                            <el-col :span="5">
                                <img  style="height: 50px;width: 80px;" v-bind:src="item.group.image" >
                            </el-col>
                            <el-col :span="15">
                                <el-row style="color:black; font-weight: 700;">{{ item.group.name }}</el-row>
                                <el-row style="font-family: SVN-Poppins; font-size: 14px; margin-top: 5px;">{{ item.number_member }} members joined</el-row>

                            </el-col>
                        </el-row>

                        <el-row style="margin-top: 10px;background-color: #E6E7EB;  margin-right:10px" :gutter="20"  class="group-joined" v-if="id_group==item.group.id" @click="choiceGroup(item.group.id)">
                            <el-col :span="1"></el-col>
                            <el-col :span="5">
                                <img  style="height: 50px;width: 80px;" v-bind:src="item.group.image" >
                            </el-col>
                            <el-col :span="15">
                                <el-row style="color:black; font-weight: 700;">{{ item.group.name }}</el-row>
                                <el-row style="font-family: SVN-Poppins; font-size: 14px; margin-top: 5px;">{{ item.number_member }} members joined</el-row>

                            </el-col>
                        </el-row>

                        </div>
                     
                       
                                  
                </div>
            </el-col>

            <el-col :span="18" v-if="is_suggest && mode==1" style="background-color: #EBEDF0;;">
                <div class="suggest">SUGGEST</div>
                <div v-for="item, index in groups_other" :key="index">
                <el-row :gutter="20" v-if ="index% 2 ==0">
                    <el-col :span="2"></el-col>
                    <el-col :span="10" class="group-item">
                        <el-card v-if="index<groups_other.length">
                            <el-row>
                                <el-col :span="10"><img v-bind:src="groups_other[index].group.image" class="image_group"/></el-col>
                                <el-col :span="14">
                                    <div class="group_name">{{ groups_other[index].group.name }}</div>
                                    <div class="description">{{groups_other[index].number_course}} course/{{groups_other[index].number_member}} member</div>
                                    <el-button type="primary" style="margin-top: 50px;" @click="joinGroup(groups_other[index].group.id)">Join now</el-button>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :span="10" class="group-item">
                        <el-card v-if="index+1<groups_other.length">
                            <el-row>
                                <el-col :span="10"><img v-bind:src="groups_other[index+1].group.image" class="image_group"/></el-col>
                                <el-col :span="14">
                                    <div class="group_name">{{groups_other[index+1].group.name }}</div>
                                    <div class="description">{{groups_other[index+1].number_course}} course/{{groups_other[index+1].number_member}} member</div>
                                    <el-button type="primary" style="margin-top: 50px;" @click="joinGroup(groups_other[index].group.id)">Join now</el-button>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                    
                </el-row>
                </div>
             
                  
              
            </el-col>

            <el-col :span="18" v-if="mode==1 && !is_suggest">
                <div class="suggest">All group joined</div>
                <div v-for="item, index in groups" :key="index">
                <el-row :gutter="20" v-if ="index% 2 ==0">
                    <el-col :span="2"></el-col>
                    <el-col :span="10" class="group-item">
                        <el-card v-if="index<groups.length">
                            <el-row>
                                <el-col :span="10"><img v-bind:src="groups[index].group.image" class="image_group"/></el-col>
                                <el-col :span="14">
                                    <div class="group_name">{{ groups[index].group.name }}</div>
                                    <div class="description">{{groups[index].number_course}} course/{{groups[index].number_member}} member</div>
                                    <el-button type="primary" style="margin-top: 50px;" @click="goToGroup()">View now</el-button>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :span="10" class="group-item">
                        <el-card v-if="index+1<groups.length">
                            <el-row>
                                <el-col :span="10"><img v-bind:src="groups[index+1].group.image" class="image_group"/></el-col>
                                <el-col :span="14">
                                    <div class="group_name">{{groups[index+1].group.name }}</div>
                                    <div class="description">{{groups[index+1].number_course}} course/{{groups[index+1].number_member}} member</div>
                                    <el-button type="primary" style="margin-top: 50px;" @click="goToGroup()">View now</el-button>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                    
                </el-row>
                </div>
              
            </el-col>

            <el-col :span="18" v-if="mode==2" style="background-color: #EBEDF0;">
                        <el-row class="header_group" style="width: 100%;">
                              <el-col :span="2"></el-col>
                                <el-col :span="5">
                                    <img v-bind:src="this.group.image" alt="" style="height: 200px;width: 100%;border: 1px solid white;margin-top:15px">
                                </el-col>
                                <el-col :span="10" style="margin:20px">
                                    <el-row  class="title">{{ group.name }}</el-row>
                                    <el-row  style="font-size: 13px; margin-top:-22px" v-if="group.status=='public'"><font-awesome-icon icon="globe"  /><span style="margin-left:5px;margin-top:-5px">Public group</span></el-row>
                                    <el-row  style="font-size: 13px; margin-top:-22px" v-else>Private group</el-row>

                                </el-col>
                        </el-row>
                        <el-row>
                            <el-tabs v-model="activeName" class="demo-tabs tab_group" @click="handleClick()">
                                <el-tab-pane label="Post" name="post">
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <el-card class="box-card post" style="width: 100%;">
                                                <el-row >
                                                        <el-col :span="1">
                                                            <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                                                        </el-col>
                                                        <el-col :span="18" style="margin-left: 10px;">
                                                            <el-row class="text_name">{{ this.username }}</el-row>
                                                        </el-col>
                                                        <el-col :span="1" style="cursor: pointer; align-items: center; justify-content: center;" @click="is_attach=true">
                                                            <font-awesome-icon icon="paperclip"  style=" height: 20px; width: 20px;" />
                                                        </el-col>
                                                        <el-col :span="2" style="cursor: pointer; align-items: center; justify-content: center;">
                                                            <el-button plain type="primary" disabled v-if="!is_post">Post</el-button>
                                                            <el-button plain type="primary" v-else @click="savePost()">Post</el-button>
                                                        </el-col>
                                                    </el-row>

                                                <el-row>
                                                    <el-input v-model="content" style="border:0px solid green" placeholder="You write anything..." type="textarea" autosize @input="changeText()"></el-input>
                                                </el-row>


                                                <el-row v-if="is_attach" style="margin-top:15px;">
                                                        <el-upload
                                                            class="upload-demo"
                                                            :auto-upload="false" 
                                                            action="https://jsonplaceholder.typicode.com/posts/"    
                                                            :on-preview="handlePreview"  
                                                            :on-remove="handleRemove" 
                                                            :on-change="handleChange" 
                                                            :file-list="fileList" 
                                                            list-type="picture-card"
                                                            >
                                                            <el-icon><Plus /></el-icon>
                                                            
                                                        </el-upload>

                                                    </el-row>
                                            </el-card>

                                            <el-card class="box-card post" style="margin-top:20px; width: 100%;" v-for="item,index in lstPost" :key="index">
                                                <template #header>
                                                <div>
                                                    <el-row >
                                                        <el-col :span="1">
                                                            <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                                                        </el-col>
                                                        <el-col :span="17" style="margin-left: 10px;">
                                                            <el-row class="text_name">{{ item.post.user.username }}</el-row>
                                                            <el-row class="text_time">{{item.post.created_at}}</el-row>
                                                        </el-col>
                                                        <el-col :span="5" v-if="item.post.user.id == this.$store.state.user.id">
                                                            <el-button type="danger" @click="deletePost(item.post.id)">Remove</el-button>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                                </template>
                                                <div class="content_post" >
                                                    <el-row>{{ item.post.content }}</el-row>
                                                    <div v-for="item1,index1 in item.pictures" :key="index1" style="margin-top: 10px;">
                                                    <el-row :gutter="10" v-if="index1%3==0" >
                                                        <el-col :span="6" v-if="index1<item.pictures.length">
                                                            <img alt="Avatar" class="image_post" v-bind:src="item.pictures[index1].image" >
                                                        </el-col>

                                                        <el-col :span="6"  v-if="index1+1<item.pictures.length">
                                                            <img alt="Avatar" class="image_post" v-bind:src="item.pictures[index1+1].image" >
                                                        </el-col>

                                                        <el-col :span="6"  v-if="index1+2<item.pictures.length">
                                                            <img alt="Avatar" class="image_post" v-bind:src="item.pictures[index1+2].image" >
                                                        </el-col>

                                                        


                                                    </el-row>
                                                    </div>
                                                    <hr>
                                                    <el-row style="margin-top:-5px" >
                                                        
                                                        <el-col :span="1">
                                                            <div class="motation" @click="changeMotation(index,item.post.id)">
                                                                <font-awesome-icon icon="heart" style="color:red" v-if="lst_motation[index]=='1'" />
                                                                <font-awesome-icon icon="heart" v-else />
                                                            <span style="margin-left: 2px;">{{ item.number_motation }}</span>
                                                            </div>
                                                        </el-col>
                                                        
                                                        <el-col :span="5" @click="clickDialogComment(item.post.id)">
                                                            <div class="comment">
                                                                <el-icon><ChatSquare size="20"/></el-icon>
                                                            <span>{{ item.number_comment }} comments</span>
                                                            </div>
                                                        </el-col>
                                                    </el-row>    
                                                </div>
                                
                                            </el-card>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane label="Member" name="member">
                                    <el-row>
                                        <el-col :span="3"></el-col>
                                        <el-col :span="18">
                                        <el-card>
                                            <hr>
                                            <el-row class="title-1">
                                                Admin Group - Management Group
                                            </el-row>

                                            <div v-for="it1,id1 in members" :key="id1">
                                                    <el-row style="font-size:20px; cursor: pointer;" v-if="it1.role=='admin_group'">
                                                        <el-col :span="2"></el-col>
                                                        <el-col :span="2">
                                                            <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                                                        </el-col>
                                                        <el-col :span="18" style="margin-left: 30px; margin-top:7px">
                                                            <el-row class="text_name">{{ it1.member.username }}</el-row>
                                                        </el-col>
                                                    </el-row>
                                                </div>

                                            <hr>
                                            <el-row class="title-1">
                                                Member
                                            </el-row>

                                            <div v-for="it,id in members" :key="id">
                                                <div v-if="it.member.id==this.$store.state.user.id && it.role!='admin_group'">
                                                    <el-row style="font-size:20px; cursor: pointer; width:100%" >
                                                        <el-col :span="2"></el-col>
                                                        <el-col :span="2">
                                                            <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                                                        </el-col>
                                                        <el-col :span="15" style="margin-left: 30px; margin-top:7px">
                                                            <el-row class="text_name">{{ it.member.username }}</el-row>
                                                        </el-col>
                                                        <el-col :span="3">
                                                            <el-dropdown>
                                                                <span class="el-dropdown-link">
                                                                    <el-icon><More /></el-icon>
                                                                </span>
                                                                <template #dropdown>
                                                                <el-dropdown-menu>
                                                                    <el-dropdown-item class="clearfix" @click="outGroup(it.member.id)">
                                                                    Out group
                                                                    </el-dropdown-item>
                                                                    
                                                                </el-dropdown-menu>
                                                                </template>
                                                            </el-dropdown>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </div>

                                            <div v-for="it,id in members" :key="id">
                                                <div v-if="it.role!='admin_group' && it.member.id!=this.$store.state.user.id">
                                                    <el-row style="font-size:20px; cursor: pointer;">
                                                        <el-col :span="2"></el-col>

                                                        <el-col :span="2">
                                                            <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                                                        </el-col>
                                                        <el-col :span="15" style="margin-left: 30px; margin-top:7px">
                                                            <el-row class="text_name">{{ it.member.username }}</el-row>
                                                        </el-col>
                                                        <el-col :span="3" v-if="this.is_admin_group">
                                                            <el-dropdown>
                                                                <span class="el-dropdown-link">
                                                                    <el-icon><More /></el-icon>
                                                                </span>
                                                                <template #dropdown>
                                                                <el-dropdown-menu>
                                                                    <el-dropdown-item class="clearfix"  @click="outGroup(it.member.id)">
                                                                    Out group
                                                                    </el-dropdown-item>
                                                                    
                                                                </el-dropdown-menu>
                                                                </template>
                                                            </el-dropdown>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </div>
                                            <hr>
                                            <el-row class="title-1">
                                                Browse other member that fit your known
                                            </el-row>

                                            <div v-for="it2,id2 in suggest_member" :key="id2">
                                                    <el-row style="font-size:20px; cursor: pointer;">
                                                        <el-col :span="2"></el-col>
                                                        <el-col :span="2">
                                                            <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                                                        </el-col>
                                                        <el-col :span="15" style="margin-left: 30px; margin-top:7px">
                                                            <el-row class="text_name">{{ it2.username }}</el-row>
                                                        </el-col>
                                                        <el-col :span="3"><el-button @click="inviteSuggest(it2.id)">Invite</el-button></el-col>
                                                    </el-row>
                                                </div>

                                            <hr>

                                        </el-card>
                                        </el-col>
                                        <el-col :span="3"></el-col>
                                    </el-row>
                                </el-tab-pane>
                            </el-tabs>
                        </el-row>
                       
            </el-col>

        </el-row>

        <!-- Comment-->
       
        <el-dialog
            v-model="commentDialog"
            width="60%"
        >
        <el-scrollbar height="500px">
        <el-row>
                    <el-card class="box-card post" style="width: 100%; margin-left: 10px; margin-right: 20px;">
                        <template #header>
                            <div >
                            <el-row>
                                <el-col :span="1">
                                    <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                                </el-col>
                                <el-col :span="19" style="margin-left: 10px;">
                                    <el-row class="text_name">{{ post.post.user.username }}</el-row>
                                    <el-row class="text_time">{{ post.post.created_at }}</el-row>
                                </el-col>
                                <el-col>
                                    
                                </el-col>
                            </el-row>
                            </div>
                        </template>
                            <div class="content_post">
                                <el-row>{{ post.post.content }}</el-row>
                                <div v-for="item1,index1 in post.pictures" :key="index1" style="margin-top: 10px;">
                                                    <el-row :gutter="10" v-if="index1%4==0" >
                                                        <el-col :span="5" v-if="index1<post.pictures.length">
                                                            <img alt="Avatar" class="image_post" v-bind:src="post.pictures[index1].image" >
                                                        </el-col>

                                                        <el-col :span="5"  v-if="index1+1<post.pictures.length">
                                                            <img alt="Avatar" class="image_post" v-bind:src="post.pictures[index1+1].image" >
                                                        </el-col>

                                                        <el-col :span="5"  v-if="index1+2<post.pictures.length">
                                                            <img alt="Avatar" class="image_post" v-bind:src="post.pictures[index1+2].image" >
                                                        </el-col>

                                                        <el-col :span="5"  v-if="index1+3<post.pictures.length">
                                                            <img alt="Avatar" class="image_post" v-bind:src="post.pictures[index1+3].image" >
                                                        </el-col>


                                                    </el-row>
                                                    </div>
                            </div>
                    </el-card>
                    </el-row>
            <el-divider />
                <el-row>
                    <el-col :span="1">
                                    <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                    </el-col>
                    <el-col :span="20" style="margin-left: 10px;">
                        <el-input placeholder="Write comment to post" v-model="contentComment" @change="createComment(0, contentComment)"/>
                    </el-col>
                    
                    <el-col :span="2" style="margin-left:10px; margin-top: 5px; cursor: pointer;">
                    </el-col>
                </el-row>

                <div v-for="item,index in comments" :key="index">
                <el-row style="margin-top: 10px;" v-if="item.comment!=null">
                    <el-col :span="1">
                                    <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                    </el-col>
                    <el-col :span="20" style="margin-left: 10px;">
                        <el-row class="text_name">{{ item.comment.user.username }}</el-row>
                        <el-row class="text_content">{{ item.comment.content }}</el-row>
                        <el-row class="text_time" style="cursor: pointer;">
                            <el-col @click="reply(item.comment.id)">Reply</el-col>
                        </el-row>
                        <el-row v-if="lst_is_reply[item.comment.id]">
                            <el-input v-model="contentSubComment" @change="createComment(item.comment.id,contentSubComment)"></el-input>
                        </el-row>
                    </el-col>
                </el-row>

                <el-row style="margin-left: 35px; margin-top: 7px;" v-for="item1,index1 in item.sub_comments" :key="index1">
                    <el-col :span="1">
                                    <img src="../../assets/img/avatar.png" alt="Avatar" style="border-radius: 50%;"/>
                    </el-col>
                    <el-col :span="20" style="margin-left: 10px;">
                        <el-row class="text_name">{{ item1.user.username }}</el-row>
                        <el-row class="text_content">{{ item1.content }}</el-row>
                    </el-col>
                </el-row>
                <hr>
                
                </div>
            </el-scrollbar>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";

import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import faSpinner from "@fortawesome/fontawesome-free-solid/faHeart"; 
import faAttach from "@fortawesome/fontawesome-free-solid/faPaperclip"; 
import faGlobe from "@fortawesome/fontawesome-free-solid/faGlobe"; 
import { ElMessage } from 'element-plus'


fontawesome.library.add(brands, faSpinner);
fontawesome.library.add(brands, faAttach);
fontawesome.library.add(brands, faGlobe);

export default{
    name : "Group",
    data(){
        return{
            is_attach:false,
            groups:[],
            id_user:"",
            is_suggest:false,
            mode:1,
            commentDialog:false,
            fileList: [],
            content:"",
            is_post : false,
            id_group:0,
            id_post:0,
            storeFile : [],
            lstPost :  [],
            username:'',
            lst_motation : [],
            post:"",
            comments : [],
            contentComment:"",
            lst_is_reply : [],
            contentSubComment:"",
            activeName:"post",
            group:{},
            members:[],
            is_admin_group:false,
            suggest_member:[],
            groups_other:[]

        }
    },

    async mounted(){
        this.$store.commit('setIsLoading',true)
        const nav = {
            "is_home" : false,
            "is_course": false,
            "is_group" : false,
            "is_space" : true,
        }
        this.$store.commit('setNav',nav)
        this.id_user = this.$store.state.user.id
        await axios
                .get(`http://127.0.0.1:8000/api/v1/group/space/${this.id_user}`)
                .then((response) => {
                    this.groups = response.data
                })
                .catch((error) => console.log(error));
        await axios
                .get(`http://127.0.0.1:8000/api/v1/group/space/suggest/${this.id_user}`)
                .then((response) => {
                    this.groups_other = response.data
                })
                .catch((error) => console.log(error));

        this.$store.commit('setIsLoading',false)

    },
    methods:
    {
        goToGroup(){
            this.$router.push("/m-group")
        },
        
        deletePost(id){
            axios
            .delete(`http://127.0.0.1:8000/api/v1/post/delete/${id}`)
            .then((response) => {
                ElMessage.success("Delete course successful")
                this.getListPost()
            })
            .catch((error) => ElMessage.error("Delete course fail"))
        },

        inviteSuggest(id_user){
        const data = {
                "group" : this.id_group,
                "member" : id_user,
                "user_invite_join": this.$store.state.user.id
            }
            axios
                .post(`http://127.0.0.1:8000/api/v1/group/member`,data)
                .then((response) => {
                    ElMessage.success("You invite member successful")
                    axios
                    .get(`http://127.0.0.1:8000/api/v1/group/member/${this.id_group}`)
                    .then((response) => {
                        this.members = response.data
                        for (var item in this.members){
                            if (this.members[item].role=="admin_group" && this.members[item].member.id==this.$store.state.user.id){
                                this.is_admin_group = true
                            }
                        }})

                })
                .catch((error) => {
                    ElMessage.error("Can't invite member to group")
            })
            this.isInvite=false
    },
        outGroup(id){
            axios
                .delete(`http://127.0.0.1:8000/api/v1/group/member/${this.id_group}/${id}`)
                .then((response) => {
                    ElMessage.success("Member out group successful")
                    axios
                    .get(`http://127.0.0.1:8000/api/v1/group/member/${this.id_group}`)
                    .then((response) => {
                        this.members = response.data
                        for (var item in this.members){
                            if (this.members[item].role=="admin_group" && this.members[item].member.id==this.$store.state.user.id){
                                this.is_admin_group = true
                            }
                        }
            })
            .catch((error) => console.log(error));

                })
                .catch((error) => 
                ElMessage.error("Can't delete member to group")
                );
        },

        goToSuggest(){
            this.is_suggest = true
            this.id_group = 0
            this.mode = 1
        },
        goToMyGroup(){
            this.is_suggest = false;
            this.id_group =0;
            this.mode = 1
        },

        async clickDialogComment(id_post){
        
            this.id_post = id_post

            await axios
            .get(`http://127.0.0.1:8000/api/v1/post/detail/${this.id_post}`)
            .then((response) => {
                this.post = response.data
            })
            .catch((error) => {
                toast({
                message: "Can't create course. Please check again",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "top-right",
              })
            });

            await axios
            .get(`http://127.0.0.1:8000/api/v1/post/comment/${this.id_post}`)
            .then((response) => {
                this.comments = response.data
                this.initialReply()
            })
            .catch((error) => console.log(error));

            this.commentDialog = true

        },
        handleRemove(file, fileList) {
            for (var i = 0; i<this.fileList.length;i++){
                if (file.name==(this.fileList[i].name) && file.size==(this.fileList[i].size)){
                    var index = i;
                    this.lstPost.splice(index, 1);
                    break;
                }
            }
           ;
          
            
        },
        handlePreview(file) {
            console.log(file);
        },
        handleChange(file) {
           this.storeFile.push(file)
           console.log(file)
      },

      changeText(){
        if (this.content.length>0)
            this.is_post = true;
        else this.is_post = false;
        console.log(this.content)
      },
      choiceGroup(id){
        this.activeName = "post"
        this.mode = 2
        this.id_group = id
        this.getListPost()

        axios
            .get(`http://127.0.0.1:8000/api/v1/auth/user/${this.$store.state.user.id}`)
            .then((response) => {
                this.username = response.data.username
            })
            .catch((error) => console.log(error));

        axios
            .get(`http://127.0.0.1:8000/api/v1/group/detail/${this.id_group}`)
            .then((response) => {
                this.group = response.data
            })
            .catch((error) => console.log(error));

      },
      async savePost(){
        this.$store.commit('setIsLoading',true)
        const id_group = this.id_group
        const id_user = this.$store.state.user.id
        var id_post = 0;
        const post = {
            "group" : id_group,
            "user" : id_user,
            "content": this.content
        }

        await axios
            .post(`http://127.0.0.1:8000/api/v1/post`,post)
            .then((response) => {
                id_post = response.data.id
            })
            .catch((error) => console.log(error));
       
        if (this.storeFile.length>0){
            for (var i =0;i <this.storeFile.length;i++ ){
                const formData = new FormData();
                formData.append('post',id_post)
                formData.append('image',this.storeFile[i].raw)

                await axios
                    .post(`http://127.0.0.1:8000/api/v1/post/picture`,formData)
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => console.log(error));
            }
        }

        this.getListPost();
        this.content = ""
        this.fileList=[]
        this.is_attach=false
        this.lst_motation[this.lst_motation.length]="0"
        this.$store.commit('setIsLoading',false)

      },

      async getListPost(){
        await axios
            .get(`http://127.0.0.1:8000/api/v1/post/${this.id_group}`)
            .then((response) => {
                this.lstPost = response.data
            })
            .catch((error) => console.log(error));

            for (var i =0; i<this.lstPost.length;i++){
                var isCheck = false;
                for (var j = 0; j<this.lstPost[i].motations.length;j++){
                    if (this.lstPost[i].motations[j].user.id==this.$store.state.user.id){
                         this.lst_motation.push("1");
                         isCheck = true;
                         break;
                    }
                    
                }
                if (!isCheck) this.lst_motation.push("0")
            }
      },
      async createComment(parent_comment, content){
        var formData = new FormData()
        formData.append('post',this.id_post)
        formData.append('user',this.$store.state.user.id)
        formData.append('parent_comment',parent_comment)
        formData.append('content',content)
        
     //   formData.append('image',image)

        await axios
                    .post(`http://127.0.0.1:8000/api/v1/post/comment`,formData)
                    .then((response) => {
                        console.log(response)
                        this.contentComment=""
                        this.contentSubComment=""
                    })
                    .catch((error) => console.log(error));

        await axios
            .get(`http://127.0.0.1:8000/api/v1/post/comment/${this.id_post}`)
            .then((response) => {
                this.comments = response.data
                this.initialReply()
                this.lst_is_reply[parent_comment] = false
                this.getListPost();
            })
            .catch((error) => console.log(error));
        
      },
    
    reply(id){
        this.lst_is_reply[id] = true
    },

    initialReply(){
        for (var i =0;i<this.comments.length;i++){
            this.lst_is_reply[this.comments[i].id] = false
        }
    },
    changeMotation(index,id_post){
        console.log(this.lst_motation)
        if (this.lst_motation[index]=="0") 
        {
            this.lst_motation[index]="1"
        }
        else 
        {
            this.lst_motation[index]="0"
    }
    var formData = new FormData()
    formData.append('user',this.$store.state.user.id)
    formData.append('post',id_post) 
    formData.append('group',this.id_group)
    
    

    axios
            .post(`http://127.0.0.1:8000/api/v1/motation`,formData)
            .then((response) => {
                this.getListPost();
            })
            .catch((error) => console.log(error));
        },

    async handleClick(){
        this.$store.commit('setIsLoading',true)

        console.log(this.activeName)
        if (this.activeName=="member"){
            axios
            .get(`http://127.0.0.1:8000/api/v1/group/member/${this.id_group}`)
            .then((response) => {
                this.members = response.data
                for (var item in this.members){
                    if (this.members[item].role=="admin_group" && this.members[item].member.id==this.$store.state.user.id){
                        this.is_admin_group = true
                    }
                }
            })
            .catch((error) => console.log(error));

            await axios
                .get(`http://127.0.0.1:8000/api/v1/auth/suggest?user=${this.$store.state.user.id}&group=${this.id_group}`)
                .then((response) => {
                    this.suggest_member = response.data
                    console.log(this.suggest_member)
                })
                .catch((error) => console.log(error));
        }
        this.$store.commit('setIsLoading',false)

    },
    async joinGroup(id){
        const data = {
                "group" : id,
                "member" : this.$store.state.user.id,
                "user_invite_join": parseInt(this.$store.state.user.id)

            }
            await axios
                .post(`http://127.0.0.1:8000/api/v1/group/member`,data)
                .then((response) => {
                    this.options = response.data
                })
                .catch((error) => {
                    toast({
                        message: "Can't join group. Please try again",
                        type: "is-danger",
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: "top-right",
              })
            })

            await axios
                .get(`http://127.0.0.1:8000/api/v1/group/space/suggest/${this.id_user}`)
                .then((response) => {
                    this.groups_other = response.data
                })
                .catch((error) => console.log(error));

            await axios
                .get(`http://127.0.0.1:8000/api/v1/group/space/${this.id_user}`)
                .then((response) => {
                    this.groups = response.data
                })
                .catch((error) => console.log(error));

        
    },
    }
    
}
</script>

<style lang="scss" setup>
       @import "../../assets/css/content_home.scss";
       @import "../../assets/css/group.scss";

       .lds-dual-ring{
  display: inline-block;
  width : 80px;
  height : 80px
}

.title-1{
    display: inline-block;
    max-width: 100%;
    margin-top: 0px;
    padding-right: 10px;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 45px;
    font-size: 25px;
    color: #2b3648;
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
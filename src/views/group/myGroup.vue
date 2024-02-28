<template>
    <div>
        <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="15">
                <el-row class="title">
                    <el-col :span="17"><h1>Groups I've created</h1></el-col>
                
                    <el-col :span="7">
                        <el-button class="button-1" color="#ffc000" @click="visible = true">Create new group</el-button>
                    </el-col>
                </el-row>
                <el-row  v-for="(item,index) in groups" :key="index">
                    <el-card style="width: 100%; margin-top: 20px;">
                        <el-row>
                            <el-col :span="3"><img src="../../assets/img/group_main.png" style="height: 60px; width: 60px;"/></el-col>
                            <el-col :span="21">
                                <el-row>
                                    <el-col :span="22"><div style="color:black">{{ groups[index].group.name }}</div></el-col>
                                    <el-col :span="2"><el-button type="info" plain @click="invitePeople(item.group.id)">Invite</el-button></el-col>
                                    
                                </el-row>
                                <el-row style="margin-top: 15px;">
                                    <el-tabs type="border-card" class="demo-tabs" style="width: 100%;">
                                        <el-tab-pane>
                                        <template #label>
                                            <span class="custom-tabs-label">
                                            <el-icon><calendar /></el-icon>
                                            <span>Course</span>
                                            </span>
                                        </template>
                                        <el-row v-for="(item1,index1) in item.courses" :key="index1">
                                            <el-col :span="2">
                                                <div class="index">{{index1+1 }}.</div>
                                            </el-col>
                                            <el-col :span="22">
                                            <div class="card-1">
                                                <el-row>
                                                    <el-col :span="3">
                                                        <div class="btn_holder" v-if="item1.course.user_created == user" @click="deleteCourse(item1.course.id, item.group.id)">
                                                            <el-icon size="13"><CloseBold /></el-icon>
                                                        </div>
                                                        <img v-bind:alt="item1.course.title" v-bind:src="item1.course.image" style="height: 60px; width: 60px;"/>
                                                    </el-col>
                                                    <el-col :span="18" style="font-size: 16px;font-weight: bold;color: #333;">
                                                        {{ item1.course.title }}
                                                    </el-col>
                                                    <el-col :span="3"><el-button type="success" @click="GoToLearn(item1.course.id)">Learn</el-button></el-col>

                                                </el-row>
                                               
                                            </div>
                                            </el-col>
                                        </el-row>

                                        <el-dropdown>
                                        <el-button type="primary">
                                            Choose a course to add list<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                        </el-button>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item disabled>Course common</el-dropdown-item>
                                                <el-dropdown-item v-for="value,key in item.public_course" :key="key" @click="handleClick(value.id, item.group.id)">{{ value.title }}</el-dropdown-item>
                                                <el-dropdown-item disabled divided>Course personal</el-dropdown-item>
                                                <el-dropdown-item v-for="value1,key1 in item.private_course" :key="key1" @click="handleClickPrivate(value1.id, item.group.id)">{{ value1.title }}</el-dropdown-item>

                                        </el-dropdown-menu>
                                        </template>
                                        </el-dropdown>

                                        <div style="font-size: 13px;">You can only add courses that you are learning to your group.</div>
                                        <div style="font-size: 13px;">You can also <a>search for a course</a> and start learning it or <a @click="createCourse()">create your own</a>.
</div>   
                                    </el-tab-pane>
                                        <el-tab-pane label="Members">
                                            <el-scrollbar>
                                                <div class="scrollbar-flex-content">
                                                <div v-for="item3,index3 in members" :key="index3" >
                                                        <div v-if="item3.group==item.group.id" class="scrollbar-demo-item" style="height: 300px;display: block;">
                                                            <el-row style="font-size:20px; margin:5px">{{ item3.course_name }}</el-row>
                                                            <div v-if="item3.members.length>0">
                                                                <el-row v-for="it4,id4 in item3.members" :key="id4" >
                                                                    <div class="leader-board-row" >
                                                                        <el-row>
                                                                            <el-col :span="5">
                                                                                <span class="row-username">{{ id4 +1 }}. </span>
                                                                            </el-col>
                                                                            <el-col :span="10">
                                                                                <span class="row-username"> {{ it4.username }}</span>
                                                                            </el-col>
                                                                            <el-col :span="9">
                                                                                <span class="row-username"> {{ it4.score }}</span>
                                                                            </el-col>
                                                                        </el-row>
                                                                        <el-row>
                                                                            <div style="width: 60%; margin-left:20px; margin-top:-20px">
                                                                            <el-progress :text-inside="true" :stroke-width="15" :percentage="it4.percentage"       status="warning"/>
                                                                            </div>
                                                                        </el-row>
                                                                    </div>
                                                                
                                                                </el-row>
                                                                </div>
                                                                <div v-else>No data</div>
                                                        </div>
                                                </div>
                                                </div>
                                            </el-scrollbar>
                                        </el-tab-pane>
                                        
                                    </el-tabs>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-row>

                <el-row class="title" style="margin-top:30px; "><h1>Groups I'm enrolled in</h1></el-row>
                <el-row  v-for="(item,index) in other_group" :key="index">
                    <el-card style="width: 100%; margin-top: 20px;">
                        <el-row>
                            <el-col :span="3"><img src="../../assets/img/group_main.png" style="height: 60px; width: 60px;"/></el-col>
                            <el-col :span="21">
                                <el-row>
                                    <el-col :span="22"><div style="color:black">{{ other_group[index].group.name }}</div></el-col>
                                    <el-col :span="2"><el-button type="info" plain @click="invitePeople(item.group.id)" >Invite</el-button></el-col>
                                    
                                </el-row>
                                <el-row style="margin-top: 15px;">
                                    <el-tabs type="border-card" class="demo-tabs" style="width: 100%;">
                                        <el-tab-pane>
                                        <template #label>
                                            <span class="custom-tabs-label">
                                            <el-icon><calendar /></el-icon>
                                            <span>Course</span>
                                            </span>
                                        </template>
                                        <el-row v-for="(item1,index1) in item.courses" :key="index1">
                                            <el-col :span="2">
                                                <div class="index">{{index1+1 }}.</div>
                                            </el-col>
                                            <el-col :span="22">
                                            <div class="card-1">
                                                <el-row>
                                                    <el-col :span="3">
                                                        <div class="btn_holder" v-if="item1.course.user_created == user" @click="deleteCourse(item1.course.id, item.group.id)">
                                                            <el-icon size="13"><CloseBold /></el-icon>
                                                        </div>
                                                        <img v-bind:alt="item1.course.title" v-bind:src="item1.course.image" style="height: 60px; width: 60px;"/>
                                                    </el-col>
                                                    <el-col :span="18" style="font-size: 16px;font-weight: bold;color: #333;">
                                                        {{ item1.course.title }}
                                                    </el-col>
                                                    <el-col :span="3"><el-button type="success" @click="GoToLearn(item1.course.id)">Learn</el-button></el-col>

                                                </el-row>
                                               
                                            </div>
                                            </el-col>
                                        </el-row>

                                        <el-dropdown>
                                        <el-button type="primary">
                                            Choose a course to add list<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                        </el-button>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item disabled>Course common</el-dropdown-item>
                                                <el-dropdown-item v-for="value,key in item.public_course" :key="key" @click="handleClick(value.id, item.group.id)">{{ value.title }}</el-dropdown-item>
                                                <el-dropdown-item disabled divided>Course personal</el-dropdown-item>
                                                <el-dropdown-item v-for="value1,key1 in item.private_course" :key="key1" @click="handleClickPrivate(value1.id, item.group.id)">{{ value1.title }}</el-dropdown-item>

                                        </el-dropdown-menu>
                                        </template>
                                        </el-dropdown>

                                        <div style="font-size: 13px;">You can only add courses that you are learning to your group.</div>
                                        <div style="font-size: 13px;">You can also <a>search for a course</a> and start learning it or <a @click="createCourse()">create your own</a>.
</div>   
                                    </el-tab-pane>
                                        <el-tab-pane label="Members">
                                            <el-scrollbar>
                                                <div class="scrollbar-flex-content">
                                                <div v-for="item3,index3 in other_members" :key="index3" >
                                                        <div v-if="item3.group==item.group.id" class="scrollbar-demo-item" style="height: 300px;display: block;">
                                                            <el-row style="font-size:20px; margin:5px">{{ item3.course_name }}</el-row>
                                                            <div v-if="item3.members.length>0">
                                                                <el-row v-for="it4,id4 in item3.members" :key="id4" >
                                                                    <div class="leader-board-row" >
                                                                        <el-row>
                                                                            <el-col :span="5">
                                                                                <span class="row-username">{{ id4 +1 }}. </span>
                                                                            </el-col>
                                                                            <el-col :span="10">
                                                                                <span class="row-username"> {{ it4.username }}</span>
                                                                            </el-col>
                                                                            <el-col :span="9">
                                                                                <span class="row-username"> {{ it4.score }}</span>
                                                                            </el-col>
                                                                        </el-row>
                                                                        <el-row>
                                                                            <div style="width: 60%; margin-left:20px; margin-top:-20px">
                                                                            <el-progress :text-inside="true" :stroke-width="15" :percentage="it4.percentage"       status="warning"/>
                                                                            </div>
                                                                        </el-row>
                                                                    </div>
                                                                
                                                                </el-row>
                                                                </div>
                                                                <div v-else>No data</div>
                                                        </div>
                                                </div>
                                                </div>
                                            </el-scrollbar>
                                        </el-tab-pane>
                                        
                                    </el-tabs>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-row>
                <div style="margin-bottom: 30px;"></div>

            </el-col>
           
        </el-row>


        <el-dialog v-model="visible" :show-close="false">
            <template #header="{ close, titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">Create new group!</h4>
                <el-button type="danger" @click="close">
                <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                Close
                </el-button>
            </div>

            </template>
            <el-row>
                    <el-col :span="5">Name</el-col>
                    <el-col :span="15" >
                        <el-input v-model="name_group" placeholder="Please input name group" style="justify-content: center; margin: 10px;"/>
                    </el-col>
            </el-row>

            <el-row>
                <el-col :span="5">Image</el-col>
                <el-col :span="15">
                    <input type="file" @change="onFileChange">
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="5"></el-col>
                <el-col :span="15">
                    <el-radio-group v-model="status" class="ml-4">
                        <el-radio label="public" size="large">Share everyone can use group</el-radio>
                        <el-radio label="private" size="large">Share someone who indicated by admin-group</el-radio>
                    </el-radio-group>
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="20"></el-col>
                <el-col :span="2"><el-button type="primary" @click="createGroup()">Create</el-button></el-col>
                <el-col :span="2"></el-col>

            </el-row>
        </el-dialog>



        <el-dialog
            v-model="confirmAddCourse"
            width="30%"
        >
            <span>This is personnal course. You want to share people in group</span>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="confirmAddCourse = false">Cancel</el-button>
                <el-button type="primary" @click="addPrivateCourse()">
                Confirm
                </el-button>
            </span>
            </template>
        </el-dialog>

        <el-dialog
            v-model="confirmDeleteCourse"
            title="Delete Course"
            width="30%"
        >
            <span>Do you want to remove coure </span>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="confirmDeleteCourse = false">Cancel</el-button>
                <el-button type="primary" @click="deleteCourse1()">
                Confirm
                </el-button>
            </span>
            </template>
        </el-dialog>


        <el-dialog
            v-model="isInvite"
            title="Invite people to join group"
            width="50%"
        >
            <el-row>
                <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="color:black; font-weight:500">Gmail/username</span>
            </el-row>
            <el-row style="margin-top:10px">
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <el-select v-model="value" filterable placeholder="Select" style="width:500px">
                <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.username"
                :value="item.id"
                />
            </el-select></el-col>
            </el-row>

            <el-row>
                <span class="ml-3 w-35 text-gray-600 inline-flex items-center" style="margin-top:20px;color:black; font-weight:500">Suggest User for you: </span>
            </el-row>
            <div v-for="item, index in suggest_member" :key="index">
            <el-row style="margin-top:10px" v-if="index%2==0">
                <el-card class="box-card" style="width:320px;margin-left:20px" v-if="index<suggest_member.length">
                    <div class="item">
                                    <img class ="image_vocabulary" src="../../assets/img/avatar.png"/>
                                    <p class="name" style="font-size: 14px;">{{ index+1 }}. {{ suggest_member[index].username }}</p>
                                    <el-button type="primary" plain @click="inviteSuggest(suggest_member[index].id)">Invite</el-button>
                    </div>
                </el-card>
                <el-card class="box-card" style="width:320px; margin-left:20px" v-if="index+1<suggest_member.length">
                    <div class="item">
                                    <img class ="image_vocabulary" src="../../assets/img/avatar.png"/>
                                    <p class="name" style="font-size: 14px;">{{ index+2 }}. {{  suggest_member[index+1].username  }}</p>
                                    <el-button type="primary" plain @click="inviteSuggest(suggest_member[index+1].id)">Invite</el-button>
                    </div>
                </el-card>
            </el-row>
            </div>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="isInvite = false">Cancel</el-button>
                <el-button type="success" @click="invite()">
                Invite
                </el-button>
            </span>
            </template>
        </el-dialog>

    </div>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";


export default{
    name : "MyGroup",

    data(){
        return{
            file:{},
            status:'public',
            name_group:'',
            visible : false,
            groups:[],
            len_course:[],
            members:[],
            course:{
                public:[],
                private:[]
            },
            select_course: "",
            imageUrl:"",
            confirmAddCourse : false,
            group_course_private :{
                group:"",
                course:""
            },
            user:"",
            confirmDeleteCourse: false,
            isInvite : false,
            group_choice:"",
            suggest_member:[],
            value : "",
            options:[],
            other_group:[],
            other_members:[]
        }
    },

    async mounted(){
        const nav = {
            "is_home" : false,
            "is_course": false,
            "is_group" : true
        }
        this.$store.commit('setNav',nav)

        this.$store.commit('setIsLoading',true)
        const id_user = this.$store.state.user.id
        this.user = id_user

        await axios
            .get(`http://127.0.0.1:8000/api/v1/group/${id_user}`)
            .then((response) => {
                this.groups = response.data
                this.createMembers()
            })
            .catch((error) => console.log(error));

        await axios
            .get(`http://127.0.0.1:8000/api/v1/group/other/${id_user}`)
            .then((response) => {
                this.other_group = response.data
                console.log("hi")
                console.log(this.other_group )
                this.createMembers1()
            })
            .catch((error) => console.log(error));

        this.$store.commit('setIsLoading',false)

    },

    methods:{
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.file = files[0]
        
        },

    async createGroup(){
        this.$store.commit('setIsLoading',true)

        const id_user = this.$store.state.user.id
        const formData = new FormData()
        var id_group = 0 
        formData.append('name',this.name_group)
        formData.append('status',this.status)
        formData.append('create_by',id_user)
        formData.append('image',this.file)

        await axios
            .post('http://127.0.0.1:8000/api/v1/group',formData)
            .then((response) => {
                id_group = response.data.id
                console.log(response.data)

            })
            .catch((error) => console.log(error));
        
        const data1=
            {
                "user": id_user,
                "group_id": id_group,
                "role": 3
            }
        

        await axios
            .post('http://127.0.0.1:8000/api/v1/auth/user-role',data1)
            .then((response) => {
            })
            .catch((error) => console.log(error));

        const data=
            {
                "user_invite_join": id_user,
                "group": id_group,
                "member": id_user
            }
        
            console.log(data)

        await axios
            .post('http://127.0.0.1:8000/api/v1/group/member',data)
            .then((response) => {
               this.visible = false
            })
            .catch((error) => console.log(error));
        
        await axios
            .get(`http://127.0.0.1:8000/api/v1/group/${id_user}`)
            .then((response) => {
                this.groups = response.data
            })
            .catch((error) => console.log(error));
        this.$store.commit('setIsLoading',false)

    },

    choiceValue(){
        console.log(this.select_course)
    },

    createCourse(){
        this.$router.push("/course/create")
    },

    async handleClick(id_course, id_group){
        const id_user = this.$store.state.user.id
        var result = true
        const data = {
            "member_add":id_user,
            "group":id_group,
            "course":id_course
        }
        await axios
            .post('http://127.0.0.1:8000/api/v1/group/course',data)
            .then((response) => {
               
            })
            .catch((error) => {
                result = false
                toast({
                message: "Can't add course. Please check again",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "top-right",
              })
            })
        if (result){
            await axios
                .get(`http://127.0.0.1:8000/api/v1/group/${id_user}`)
                .then((response) => {
                    this.groups = response.data
                })
                .catch((error) => console.log(error));
        }


    },

    handleClickPrivate(id_course, id_group){
        this.confirmAddCourse = true
        this.group_course_private.group = id_group
        this.group_course_private.course = id_course
    },

    async addPrivateCourse(){
        const id_user = this.$store.state.user.id
        var result = true
        const data = {
            "member_add":id_user,
            "group":this.group_course_private.group,
            "course":this.group_course_private.course
        }
        await axios
            .post('http://127.0.0.1:8000/api/v1/group/course',data)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                result = false
                toast({
                message: "Can't add course. Please check again",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "top-right",
              })
            })
        if (result){
            await axios
                .get(`http://127.0.0.1:8000/api/v1/group/${id_user}`)
                .then((response) => {
                    this.groups = response.data
                })
                .catch((error) => console.log(error));
        }
        this.confirmAddCourse = false
    },

    deleteCourse(course_id, group_id){
        this.confirmDeleteCourse = true
        this.group_course_private.group = group_id
        this.group_course_private.course = course_id
    },

    async deleteCourse1(){
        var result = true
        await axios
            .delete(`http://127.0.0.1:8000/api/v1/group/course/remove?user=${this.user}&group=${this.group_course_private.group}&course=${this.group_course_private.course}`)
            .then((response) => {
                if (response.data.status==400)
                {
                    result = false
                    console.log(result)
                }
            })
            .catch((error) => {
            })
        if (result){
            await axios
                .get(`http://127.0.0.1:8000/api/v1/group/${this.user}`)
                .then((response) => {
                    this.groups = response.data
                })
                .catch((error) => console.log(error));
        }
        this.confirmDeleteCourse = false
    },

    async invitePeople(id_group){
        this.isInvite=true
        this.group_choice = id_group
        await axios
                .get(`http://127.0.0.1:8000/api/v1/auth/suggest?user=${this.user}&group=${this.group_choice}`)
                .then((response) => {
                    this.suggest_member = response.data
                })
                .catch((error) => console.log(error));

        await axios
                .get(`http://127.0.0.1:8000/api/v1/auth/user/all?group=${this.group_choice}`)
                .then((response) => {
                    this.options = response.data
                })
                .catch((error) => console.log(error));
    },

    invite(){
        if (String(this.value).length>0){
            const data = {
                "group" : this.group_choice,
                "member" : this.value,
                "user_invite_join": parseInt(this.user)
            }
            axios
                .post(`http://127.0.0.1:8000/api/v1/group/member`,data)
                .then((response) => {
                    this.options = response.data
                })
                .catch((error) => {
                    toast({
                message: "Can't add member. Please try again",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "top-right",
              })
            })
            this.isInvite=false
        } else{
            toast({
                message: "Can't add member. Please choice user",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "top-right",
              })
        }
        this.value = ""
    },

    inviteSuggest(id_user){
        const data = {
                "group" : this.group_choice,
                "member" : id_user,
                "user_invite_join": parseInt(this.user)
            }
            axios
                .post(`http://127.0.0.1:8000/api/v1/group/member`,data)
                .then((response) => {
                    this.options = response.data
                })
                .catch((error) => {
                    toast({
                message: "Can't add member. Please try again",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "top-right",
              })
            })
            this.isInvite=false
    },

    createMembers(){
        var sum =0
        for (let i in this.groups){
            const item = this.groups[i]
            this.len_course[i+1] = sum
            sum = sum + item.courses.length
            for (var i1 in item.members_course){
                const item1 = item.members_course[i1]
                var members = []
                if (item1.members.length>0){
                for (var i2 in item1.members){
                    const d ={
                        "id":item1.members[i2].user.id,
                        "username":item1.members[i2].user.username,
                        "score":item1.members[i2].total_score,
                        "percentage":item1.members[i2].percentage,
                    }
                    members.push(d)
                }
                for (var k = 0; k<members.length-1;k++){
                for (var j = k+1;j<members.length;j++)
                if (members[j].score>members[k].score){
                    var tmp = members[j];
                    members[j] = members[k];
                    members[k] = tmp;
                }
            }

            } else members = []
            
                const data = {
                    "course_name":item1.course.title,
                    "group" : item.group.id,
                    "course" : item1.course.id,
                    "members" : members
                }
                this.members.push(data)
            }
        }
        console.log(this.groups.length)

    },

    createMembers1(){
        var sum =0
        for (let i in this.other_group){
            const item = this.other_group[i]
            this.len_course[i+1] = sum
            sum = sum + item.courses.length
            for (var i1 in item.members_course){
                const item1 = item.members_course[i1]
                var members = []
                if (item1.members.length>0){
                for (var i2 in item1.members){
                    const d ={
                        "id":item1.members[i2].user.id,
                        "username":item1.members[i2].user.username,
                        "score":item1.members[i2].total_score,
                        "percentage":item1.members[i2].percentage,
                    }
                    members.push(d)
                }
                for (var k = 0; k<members.length-1;k++){
                for (var j = k+1;j<members.length;j++)
                if (members[j].score>members[k].score){
                    var tmp = members[j];
                    members[j] = members[k];
                    members[k] = tmp;
                }
            }

            } else members = []
            
                const data = {
                    "course_name":item1.course.title,
                    "group" : item.group.id,
                    "course" : item1.course.id,
                    "members" : members
                }
                this.other_members.push(data)
            }
        }

    },

    GoToLearn(id){
        this.$router.push(`course/${id}`)
    }
},
}
</script>

<style lang="scss" setup>
       @import "../../assets/css/content_home.scss";
       @import "../../assets/css/group.scss";

       .demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}  
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

       .my-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .avatar-uploader .avatar {
            width: 30px;
            height: 30px;
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
            width: 50px;
            height: 50px;
            text-align: center;
            }

</style>
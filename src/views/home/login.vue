<template>
    <div>
    <div>
        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="8" class="title-login" >Log in to have fun and learn faster</el-col>
            <el-col :span="8"></el-col>     
        </el-row>

        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="8" class="title-form" >Gmail:</el-col>
            <el-col :span="8"></el-col>    
        </el-row>
        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="8" ><input id="username" placeholder="dungnnh@gmail.com" v-model="username" class="input"  /></el-col>
            <el-col :span="8"></el-col>    
        </el-row>

        <el-row style="margin-top: 20px;">
            <el-col :span="8"></el-col>
            <el-col :span="8" class="title-form" >Password:</el-col>
            <el-col :span="8"></el-col>    
        </el-row>
        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="8" ><input id="username" placeholder="........." v-model="password"  type="password" name="password" class="input"  /></el-col>
            <el-col :span="8"></el-col>    
        </el-row>
        <el-row>
            <el-col :span="13"></el-col>
            <el-col :span="4" >
                <a href="" style="color: black;font-size: 0.75rem;">I forgot my password!</a>
            </el-col>
            <el-col :span="7"></el-col>    
        </el-row>

        <el-row style="margin-top: 30px;">
            <el-col :span="9"></el-col>
            <el-col :span="6" >
                <button class="login-button-1" @click="login()">Login</button>
            </el-col>
            <el-col :span="9"></el-col>    
        </el-row>

        <el-row>
            <el-col :span="10"></el-col>
            <el-col :span="5" style="align-items: center;">
                <a href="" class="register-require">Don’t have an account? Sign up now!</a>
            </el-col>
            <el-col :span="9"></el-col>    
        </el-row>

    </div>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import axios from "axios";
import { ElMessage } from 'element-plus'


export default {
    data() {
       return{
            username:"",
            password:""
       }},
    components : {
        Footer,
    },
    mounted(){
        this.$store.state.isManupulation = false

    },
    methods: {
        async login(){
            this.$store.commit('setIsLoading',true)
            const formData={
                "email" : this.username,
                "password" : this.password
            }
            await axios
                .post("http://127.0.0.1:8000/api/v1/auth/login",formData)
                .then((response) => {
                    this.$store.commit('setToken',response.data.tokens.access,response.data.tokens.refresh)
                    this.$store.commit('setUser',response.data.id,response.data.username,response.data.roles)
                    axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.tokens.access
                    localStorage.setItem('token_access',response.data.tokens.access)
                    localStorage.setItem('token_refresh',response.data.tokens.refresh)
                    localStorage.setItem('username',response.data.username)
                    localStorage.setItem('userid',response.data.id)
                    this.$router.push('/')
                })
                .catch((error) => {
                    const message = error.response.data.detail 
                    ElMessage.error(message)
                    this.username = ""
                    this.password = ""
                })
            
            this.$store.commit('setIsLoading',false)
        }
        },
              
       
    

}
</script>

<style lang="scss" setup>
@import "../../assets/css/login.scss";
@import "../../assets/css/footer.scss";

</style>
<template>
    <div class="sidebar">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        style="
          position: relative;
          background-color: rgb(0, 112, 130);
          color: white;
          min-height:100vh;
          height: 100%;
        "
        :collapse="isCollapse"
      >
      

        <el-menu-item index="2" @click="Dashboard()">
                
                 <i class="fas fa-home" color="black" v-if="this.$store.state.sidebar.dashboard"></i>
                 <span style="margin-left:10px;color:black; font-weight: 600;" v-if="this.$store.state.sidebar.dashboard">Dashboard</span>

                 <i class="fas fa-home" color="white" v-if="!this.$store.state.sidebar.dashboard"></i>
                 <span style="margin-left:10px;color:white;" v-if="!this.$store.state.sidebar.dashboard">Dashboard</span>
                 
        </el-menu-item>
  
        <el-menu-item index="3" @click="Course()">
          <font-awesome-icon icon="book-open" size="xl" color="black" v-if="this.$store.state.sidebar.course"/>
            <span style="margin-left:10px;color:black;font-weight: 600;" v-if="this.$store.state.sidebar.course">Course</span>

            <font-awesome-icon icon="book-open" size="xl" color="white" v-if="!this.$store.state.sidebar.course" />
            <span style="margin-left:10px;color:white" v-if="!this.$store.state.sidebar.course" >Course</span>

        </el-menu-item>
  
        <el-menu-item index="4" @click="Group()">
          <font-awesome-icon :icon="['fas', 'user-friends']"  size="xl" color="black" v-if="this.$store.state.sidebar.group"/>
            <span style="margin-left:10px;color:black;font-weight: 600;" v-if="this.$store.state.sidebar.group">Group</span>

            <font-awesome-icon :icon="['fas', 'user-friends']" size="xl" color="white" v-if="!this.$store.state.sidebar.group"/>
            <span style="margin-left:10px;color:white" v-if="!this.$store.state.sidebar.group">Group</span>

        </el-menu-item>
  
        <el-menu-item index="5" @click="Workspace()">
          <font-awesome-icon icon="globe"  size="xl" color="white" v-if="!this.$store.state.sidebar.workspace"/>
            <span style="margin-left:10px;color:white" v-if="!this.$store.state.sidebar.workspace">Workspace</span>

            <font-awesome-icon icon="globe" size="xl" color="black" v-if="this.$store.state.sidebar.workspace"/>
            <span style="margin-left:10px;color:black;font-weight: 600;" v-if="this.$store.state.sidebar.workspace">Workspace</span>

        </el-menu-item>
  
       
        <el-menu-item index="6" @click="Account()" >
          <font-awesome-icon icon="user" size="xl" color="black" v-if="this.$store.state.sidebar.account"/>
           <span style="margin-left:10px;color:black;font-weight: 600;" v-if="this.$store.state.sidebar.account">Account Management </span>

           <font-awesome-icon icon="user" size="xl" color="white" v-if="!this.$store.state.sidebar.account"/>
           <span style="margin-left:10px;color:white" v-if="!this.$store.state.sidebar.account">Account Management</span>

        </el-menu-item>
       
  
        <el-menu-item index="7" @click="UserView()">
          <font-awesome-icon icon="book-open" size="xl" color="white"/>
          <span style="margin-left:10px;color:white">User View</span>
        </el-menu-item>
        <div style="text-align: right">
          <div v-if="isCollapse == true" style="">
            <el-button @click="changeCollapse()">
              <el-icon><Expand /></el-icon
            ></el-button>
          </div>
          <div v-else>
            <el-button @click="changeCollapse()" type="primary"
              ><el-icon><Fold /></el-icon
            ></el-button>
          </div>
        </div>
      </el-menu>
    </div>
  
  </template>
  
  <script>
    import fontawesome from "@fortawesome/fontawesome";
    import brands from "@fortawesome/fontawesome-free-brands";
    import faHome from "@fortawesome/fontawesome-free-solid/faHome"; 
    import faUser from "@fortawesome/fontawesome-free-solid/faUser"; 
    import faGroup from "@fortawesome/fontawesome-free-solid/faUserFriends"; 
    import faSpace from "@fortawesome/fontawesome-free-solid/faSpaceShuttle"; 
    import faBook from "@fortawesome/fontawesome-free-solid/faBookOpen"; 
    import faStar from "@fortawesome/fontawesome-free-solid/faStar"; 
    import faGlobe from "@fortawesome/fontawesome-free-solid/faGlobe"; 

    fontawesome.library.add(brands, faHome);
    fontawesome.library.add(brands, faUser);
    fontawesome.library.add(brands, faGroup);
    fontawesome.library.add(brands, faSpace);
    fontawesome.library.add(brands, faBook);
    fontawesome.library.add(brands, faStar);
    fontawesome.library.add(brands, faGlobe);

  export default {
    name: "SideBar",
    data() {
      return {
        isCollapse: false,
       
      };
    },
   
    methods: {
      changeCollapse() {
        this.isCollapse = !this.isCollapse;
      },
      Dashboard(){
        const sidebar = {
            "dashboard" : true,
            "course": false,
            "group" : false,
            "workspace" : false,
            "account" : false

        }
        this.$store.commit('setSideBar',sidebar)
        this.$router.push('/admin') 
      },

      Course(){
        const sidebar = {
            "dashboard" : false,
            "course": true,
            "group" : false,
            "workspace" : false,
            "account" : false

        }
        this.$store.commit('setSideBar',sidebar)
        this.$router.push('/admin/course') 
      },
    
      Group(){
        const sidebar = {
            "dashboard" : false,
            "course": false,
            "group" : true,
            "workspace" : false,
            "account" : false

        }
        this.$store.commit('setSideBar',sidebar)
        this.$router.push('/admin/group') 
      },
      
    
      Account(){
        const sidebar = {
            "dashboard" : false,
            "course": false,
            "group" : false,
            "workspace" : false,
            "account" : true

        }
        this.$store.commit('setSideBar',sidebar)
        this.$router.push('/admin/account')
    },
    UserView(){
      
      this.$router.push('/')
      this.$store.state.admin_page = false
    }
  }
  };
  </script>
  
  <style lang="scss">

.marked {
        display: block;
        height: 0.3rem;
        width: 50%;
        transform: rotate(-4deg);
        background-color:white ;
    }

  .el-menu-vertical-demo {
    width: 280px;
    height: 1000px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
  .el-menu-vertical-demo
    ul.el-menu.el-menu--vertical.el-menu-vertical-demo.v-enter-to {
    position: relative;
    top: 64px;
    background-color: #f9f8f8;
  }
  .layout-user {
    display: flex;
  }
  .layout-user li.ant-menu-item,
  .layout-user span.ant-menu-title-content {
    min-height: 64px;
    padding-top: 0.3rem !important;
    border-bottom: 1px solid #e9e9e9;
  }
  
  .layout-user span.anticon.anticon-user {
    margin-right: 15px;
    margin: auto;
  }
  hr {
    border-top: 1px solid #e9e9e9;
  }
  .layout-account {
    padding: 12px 0;
    text-align: left;
    padding-left: 5px;
  }
  .layout-account span.user-name {
    line-height: 17px;
    display: block;
  }
  .layout-account a {
    font-weight: 550;
    color: black !important;
  }
  .layout-account span.user-role {
    line-height: 17px;
    font-size: 12px;
    display: block;
  }
  .layout-account span.user-role.user-company {
    color: rgb(188, 71, 108);
    font-weight: 550;
  }
  .sidebar
    ul.el-menu.el-menu--vertical.el-menu--collapse.el-menu-vertical-demo.v-enter-to
    .layout-account {
    display: none;
  }
  </style>
  
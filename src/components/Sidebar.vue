<template>
    <div class="sidebar">
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        style="
          position: relative;
          background-color: white;
          color: black;
          
        "
        :collapse="isCollapse"
      >
        <el-menu-item
          style="
            min-height: 80px;
            padding-top: 0.3rem !important;
            border-bottom: 1px solid #e9e9e9;
          "
        >
          <div class="layout-user">
            <div class="layout-account">
              <span class="user-name"
                ><a href="">Hoang Dung</a></span
              >
              <span class="user-role">Admin</span>
            </div>
          </div>
        </el-menu-item>
        <el-menu-item index="0" @click="Dashboard()">
           
                 <i class="fas fa-home"></i>
                 <span style="margin-left:10px">Dashboard</span>
        </el-menu-item>
  
        <el-menu-item index="1" @click="Course()">
            <font-awesome-icon icon="book-open" size="xl"/>
            <span style="margin-left:10px">Course</span>
        </el-menu-item>
  
        <el-menu-item index="2" @click="Group()">
            <font-awesome-icon icon="book-open" size="xl"/>
            <span style="margin-left:10px">Group</span>
        </el-menu-item>
  
        <el-menu-item index="3" @click="Workspace()">
            <font-awesome-icon icon="book-open" size="xl"/>
            <span style="margin-left:10px">Workspace</span>
        </el-menu-item>
  
        <el-menu-item index="4" @click="Score()">
            <font-awesome-icon icon="star" />
            <span style="margin-left:10px"> Score Rating</span>
        </el-menu-item>
  
        <el-menu-item index="5" @click="Account()">
            <el-icon><UserFilled /></el-icon>
           <span style="margin-left:10px">Account Management</span>
        </el-menu-item>
        <el-menu-item index="6" @click="Information()">
          <el-icon><Calendar /></el-icon>
          <span>Information</span>
        </el-menu-item>
  
        <el-menu-item index="7" @click="UserView()">
          <el-icon><setting /></el-icon>
          <span>User View</span>
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

    fontawesome.library.add(brands, faHome);
    fontawesome.library.add(brands, faUser);
    fontawesome.library.add(brands, faGroup);
    fontawesome.library.add(brands, faSpace);
    fontawesome.library.add(brands, faBook);
    fontawesome.library.add(brands, faStar);

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
      Course(){
        this.$router.push('/admin/course') 
      },
    
      Group(){
        this.$router.push('/admin/group') 
      },
      Score(){
        this.$router.push('/admin/score-rating')
    },
      Account(){
        this.$router.push('/admin/account')
    }
  }
  };
  </script>
  
  <style lang="scss">
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
  
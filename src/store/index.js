import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading : false,
    isLogin : false,
    is_login_ing : false,
    token : {
      access: "",
      refresh:""
    },
    isAuthenticated : false,
    isManupulation : false,
    user : {
      username : '',
      id : 0,
      roles:""
    },
    nav: {
      is_home : true,
      is_course : false,
      is_group:false,
      is_space:false,
    },
    isWorkspace : false,
  },
  getters: {
   
  },
  mutations: {
    initializeStore(state){
      if (localStorage.getItem('token_access')){
        state.token.access = localStorage.getItem('token_access')
        state.token.refresh = localStorage.getItem('token_refresh')
        state.isAuthenticated = true
        state.user.id = localStorage.getItem('userid')
        state.user.username = localStorage.getItem('username')

      } else{
        state.token.access = '',
        state.token.refresh = '',
        state.isAuthenticated = false
        state.user.id =0
        state.user.username=''
      }
    },

    setIsLoading(state,status){
      state.isLoading = status
    },

    setToken(state,access,refresh){
      state.token.access = access
      state.token.refresh = refresh
      state.isAuthenticated = true
    },

    removeToken(state){
      state.token.access = ''
      state.token.refresh = ''
      state.isAuthenticated = false
    },

    setUser(state,id, username, roles){
      state.user.id = id
      state.user.username = username
      state.user.roles = roles
    },

    removeUser(state){
      state.user.id = 0
      state.user.username = ""
      state.user.roles = ""
    },

    setNav(state, nav){
      state.nav.is_course = nav.is_course
      state.nav.is_home = nav.is_home
      state.nav.is_group = nav.is_group
      state.nav.is_space = nav.is_space
    }

  },
  actions: {
  },
  modules: {
  }
})

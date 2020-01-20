import router from "./router";

router.beforeEach(async(to, from, next) => {
  let token = window.localStorage.getItem('access_token')
  if(to.path == '/login'){
    if(token){
      router.push('/')
    }else{
      next()
    }
  }else{
    if(token){
      next()
    }else{
      router.push('/login')
    }
  }
})
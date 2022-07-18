<template>
  <div @click="stateClick">
    <div class="user-info" v-if="state">
      <img class="avatar" src="~assets/img/profile/avatar.svg" alt="">
    <div class="info">
      <div class="login" @click="goLogin">登录/注册</div>
      <!-- <router-view/> -->
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
        <!-- <span>{{username}}</span> -->
      </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
    </div>  
    </div>
    <div v-else class="user-info1">
      <img class="avatar1" src="~assets/img/profile/collect.png" alt="">
    <div class="info1">
      <div class="login1">欢迎您！</div>
      <!-- <router-view/> -->
      <div class="phone1">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>{{username}}</span>
      </div>
    <div class="arrow1">
      <img src="~assets/img/profile/phone.svg" alt="">
    </div>
    </div>  
    </div>
  </div>
</template>

<script>
	export default {
		name: "UserInfo",
    data(){
      return{
        username:'',
        state:true
        // state:false
      }
    },
    created(){
      this.btn();
    },
    methods:{
      btn(){
        this.$bus.$on('loclick',(name)=>{
          this.username = name;
        })
      },
      goLogin(){
        this.$router.push('/login');

        console.log(this.username)
      },
      stateClick(){
        this.state = !this.state
      }
    }
	}
</script>

<style scoped>
  .user-info {
    height: 85px;
    background-color: var(--color-tint);
    padding: 6px 15px;

    display: flex;
    color: #fff;
  }
  
  .user-info .avatar {
    width: 70px;
    height: 70px;
  }

  .info {
    padding-left: 15px;
    flex: 1;
  }

  .info .login {
    margin-top: 15px;
  }

  .phone img {
    width: 20px;
    height: 30px;
    vertical-align: middle;
    margin-left: -5px;
  }

  .phone span {
    font-size: 13px;
  }

  .arrow {
    width: 20px;
    line-height: 85px;
  }

  .arrow img {
    width: 20px;
  }

  .user-info1 {
    height: 85px;
    background-color: var(--color-tint);
    padding: 6px 15px;

    display: flex;
    color: #fff;
  }
  
  .user-info1 .avatar1 {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .info1 {
    padding-left: 15px;
    flex: 1;
  }

  .info1 .login1 {
    margin-top: 15px;
  }

  .phone1 img {
    width: 20px;
    height: 30px;
    vertical-align: middle;
    margin-left: -5px;
  }

  .phone1 span {
    font-size: 13px;
  }

  .arrow1 {
    width: 20px;
    line-height: 85px;
  }

  .arrow1 img {
    width: 20px;
  }
</style>
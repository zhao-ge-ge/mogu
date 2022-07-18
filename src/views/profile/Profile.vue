<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">我的档案</div></nav-bar>
    <div v-if="loginState"> 
     <user-info/>
    <account-info/>
    <normal-list-view :list-data="orderList"/>
    <div class="item">
        <span class="icon">
          <img src="~assets/img/profile/cart.svg" alt="">
        </span>
      <div class="info" @click="goMycart">我的购物车</div>
    </div>
    <normal-list-view :list-data="serviceList"/>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import UserInfo from './childComps/UserInfo'
  import AccountInfo from './childComps/AccountInfo'
  import NormalListView from './childComps/NormalListView'

  export default {
    name: "Profile",
    components: {
    	NavBar,
      UserInfo,
      AccountInfo,
      NormalListView
    },
    data() {
    	return {
        loginState:true,
		    orderList: [
			    {icon: 'message.svg', info: '我的消息'},
			    {icon: 'pointer.svg', info: '积分商城'},
			    {icon: 'vip.svg', info: '会员卡'},
		    ],
		    serviceList: [
			    // {icon: 'cart.svg', info: '我的购物车'},
			    {icon: 'shopping.svg', info: '下载购物APP'},
		    ]
      }
    },
    methods:{
      // loginclick(){
      //   return this.loginState = !this.loginState;
      // },
      goMycart(){
        this.$router.push('/cart')
      },
    //   login(){
    //         if( !this.validate('username') ) return;
		// 	if( !this.validate('password') ) return;
    //         this.$axios.post(this.HOST+'/api/login',{username:this.username,password:this.pwd})
    //         .then(result=>{
    //             // console.log(result.data)
    //             // this.$router.push('/hello');
    //             this.msg = result.data.msg
    //             this.loginState = !this.loginState;
    //             Toast(this.msg)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    //     },
    //     register(){
    //         if( !this.validate('username') ) return;
		// 	if( !this.validate('password') ) return;
    //         this.$axios.post(this.HOST+'/api/register',{username:this.username,password:this.pwd})
    //         .then(result=>{               
    //             this.msg = result.data.msg
    //             Toast(this.msg)
    //         }).catch(err=>{
    //             console.log(err)
    //         })
    //     },
    //     validate( key ){
		// 	let bool = true;
		// 	if( !this.rules[key].rule.test( this[key])  ){
		// 		//提示信息
		// 		Toast(this.rules[key].msg);
		// 		bool = false;
		// 		return false;
		// 	}
		// 	return bool;
		// }
    }
  }
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }
  
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .item{
    background-color: #fff;
    font-size: 15px;
    color: #333;
    margin-top: 15px;
    height: 44px;
    line-height: 44px;
    position: relative;
  }
  .icon img {
    width: 20px;
    height: 20px;
  }
  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }
   .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
  .user-info {
    height: 85px;
    background-color: var(--color-tint);
    padding: 6px 15px;

    display: flex;
    color: #fff;
  }
  
</style>

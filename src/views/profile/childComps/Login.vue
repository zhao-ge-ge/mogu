<template>
<div>   
    <nav-bar class="nav-bar"><div slot="center">登录/注册</div></nav-bar>
    <!-- <div v-if="loginState">欢迎你！用户：{{username}}</div> -->
    <div class="login-list">
    <form>
        <div class="login-tel">
        <label for="username">用户名:</label>
        <input type="text" v-model="username" id="username">
        </div>
        <div class="login-tel">
        <label for="pwd">密&nbsp;&nbsp;&nbsp;码:</label>
        <input type="text" v-model="pwd" id="pwd">
        </div>
        <div class="btn">          
    <div class="btn-login"><button @click.prevent="login">登录</button></div>       
    <div class="btn-reg"><button @click.prevent="register">注册</button></div>
        
        </div>
    </form>
    </div>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import { Toast } from 'mint-ui'
export default {
    name:'Login',
    components:{
        NavBar
    },
    data(){
        return {
            username:'',
            pwd:'',
            msg:'',//接收数据
            loginState:false,
            rules:{
            //手机号验证
            username:{
                rule:/^1[23456789]\d{9}$/,
                msg:'手机号不能为空，并且是11位数字'
            },
            //密码验证
            password:{
                rule:/^\w{6,12}$/,
                msg:'密码不能为空，并且要求6,12位'
            }
        
        }
      }
    },
    methods:{
        login(){
            this.$bus.$emit('loclick',this.username)
            if( !this.validate('username') ) return;
			if( !this.validate('password') ) return;
            this.$axios.post(this.HOST+'/api/login',{username:this.username,password:this.pwd})
            .then(result=>{
                // console.log(result.data)
                this.$router.push('/profile');
                this.msg = result.data.msg
                this.loginState = true;
                Toast(this.msg)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        register(){
            if( !this.validate('username') ) return;
			if( !this.validate('password') ) return;
            this.$axios.post(this.HOST+'/api/register',{username:this.username,password:this.pwd})
            .then(result=>{               
                this.msg = result.data.msg
                Toast(this.msg)
            }).catch(err=>{
                console.log(err)
            })
        },
        validate( key ){
			let bool = true;
			if( !this.rules[key].rule.test( this[key])  ){
				//提示信息
				Toast(this.rules[key].msg);
				bool = false;
				return false;
			}
			return bool;
		}
    }
}
</script>
<style scoped>
 .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .login-list{
      display: flex;
      justify-content:center;
      align-items:center;
      padding: 20px 10px;
      background-color:antiquewhite;
      border-bottom: 2px solid #cfcfcf;
  }
  .login-tel{
		margin-top:30px;
	}
    .login-tel input{
        width: 200px;
    }
    .btn{
     display:flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items:center;
     padding:20px 0;
    }
    .btn .btn-login{
        padding:0 20px;
    }
  
</style>

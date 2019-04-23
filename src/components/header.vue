<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>Share Blogospher</h1>
      <p>玩转博客圈</p>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div>
    </template>

    <template v-if="isLogin">
      <h1><router-link to="/"> Let's share </router-link></h1>
      <router-link to="/create"> <i class="iconfont icon-plus"></i> </router-link>

      <div class="user">
        <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<style lang = "less">
  @import "../assets/base.less";
  @import "//at.alicdn.com/t/font_1053436_401f4iy7e8.css";
  header.no-login {
    padding: 0 12% 30px;
    background: @bgColor;
    display: grid;
    justify-items: center;

    h1{
      color: @white;
      font-size: 40px;
      margin-top: 60px;
      text-transform: uppercase;
    }

    p{
      margin: 5px 0;
      color: @white;
      font-size: 18px;
    }

    button{
      margin: 40px 5px 0;
    }
  }

header.login {
  background: @bgColor;
  display: flex;
  align-items: center;

    h1{
      margin: 0;
      padding: 0;
      font-size: 40px;
      text-transform: uppercase;
      flex: 1;

      a{
        color: @white;
      }
    }

    .iconfont{
      font-size: 30px;
      color: @white;
    }

    .avatar{
      width: 40px;
      height: 40px;
      border: 1px solid @white;
      border-radius: 50%;
      margin-left: 15px;
    }

    .user{
      position: relative;

      ul{
        display: none;
        position: absolute;
        right: 0;
        list-style: none;
        border: 1px solid #eaeaea;
        margin: 0;
        padding: 0;
        background: @white;

        a{
          text-decoration: none;
          color: @gray;
          font-size: 12px;
          display: block;
          padding: 5px 10px;

          &:hover{
            background: #eaeaea;
          }
        }
      }
      &:hover ul{
        display: block;
      }
    }
  }
</style>

<script>

import auth from '@/api/auth'
window.auth = auth

import {mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return{}
  },

  computed: {
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },

  created(){
    this.checkLogin()
  },

  methods:{
    ...mapActions([
      'checkLogin',
      'logout'
    ]),

    onLogout(){
      this.logout()
    }
  }
}
</script>

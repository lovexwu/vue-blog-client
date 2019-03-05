<template>
  <div id="my">
    <section class="user-info">
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" class="avatar">
      <h3>xwu</h3>
    </section>

    <section>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2018</span>
        </div>
        <h3>大标题</h3>
        <p>
            文字文字文字文字
        </p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div> 
      </div>
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style lang = "less" src = "./template.less"></style>

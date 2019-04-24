<template>
  <div id="create">
   <h1> 编辑文章 </h1>

    <h3>文章标题</h3>
    <el-input
      type="textarea"
      v-model="title"
      placeholder="输入标题"
      maxlength="30"
      @input="titleTotal">
    </el-input>
    <p>{{titleNumber}}/30</p>

    <h3>内容简介</h3>
    <el-input
      type="textarea"
      v-model="description"
      :autosize="{ minRows: 2, maxRows: 6}"
      placeholder="输入内容简介"
      maxlength="90"
      @input="descriptionTotal">
    </el-input>
    <p>{{descriptionNumber}}/90</p>

    <h3>文章内容</h3>
    <el-input
      type="textarea"
      v-model="content"
      :autosize="{ minRows: 4, maxRows: 30}"
      placeholder="输入文章内容"
      maxlength="30"
      @input="contentTotal">
    </el-input>
    <p>已输入{{contentNumber}}个字</p>

   <p class="switch">
    <label>是否展示到首页</label>
    <el-switch
      v-model="atIndex"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
   </p>
   <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>
<style lang = "less" src = "./template.less"></style>



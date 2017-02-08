<template>
  <div class="index">
  	<el-row>
  		<el-col :span="16">
  			<div class="index-left">
  				<block></block>
  				<articles></articles>	
  			</div>
  		</el-col>
  		<el-col :span="8">
  			<div class="index-right">
  				
  			</div>
  		</el-col>
	</el-row>
  </div>
</template>

<script>

import Vue from 'vue'
import Block from 'components/Block'
import Articles from 'components/Articles'
import store from 'store'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	Block,Articles
  }
}
</script>

<style>
  .index-left {
  	width: 100%;
  }  
</style>

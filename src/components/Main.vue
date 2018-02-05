<template>
  <div class="main">
     <mt-header :title="title" class="header">
			  <router-link to="/" slot="left" v-if="isTrue">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		 </mt-header>
		 
		 <router-view class="container" @to-parent="getTitle" ref="m"></router-view>
		 
		<footer class="C_footer">
			<ul>
				<router-link to="/">
					<li :class="{active:ft1}">
						<i class="iconfont icon-home1"></i>
						<span :class="{active:ft1}">首页</span>
					</li>
				</router-link>
				<router-link to="/type">
				<li :class="{active:ft2}">
					<i class="iconfont icon-fenlei-copy"></i>
					<span :class="{active:ft2}">分类</span>
				</li>
				</router-link>
				<router-link to="/gouwuche">
				<li :class="{active:ft3}">
					<i class="iconfont icon-gouwuchetubiao"></i>
					<span class="gouwuche" :class="{active:ft3}">购物车</span>
				</li>
				</router-link>
				<router-link to="/myshow">
				<li :class="{active:ft4}">
					<i class="iconfont icon-wo"></i>
					<span :class="{active:ft4}">我的秀</span>
				</li>
				</router-link>
				<router-link to="/more">
				<li :class="{active:ft5}">
					<i class="iconfont icon-gengduo"></i>
					<span :class="{active:ft5}">更多</span>
				</li>
				</router-link>
			</ul>
	</footer>
	</div>
</template>

<script>
export default {
  name: 'Main',
  data(){
  	return{
  			title:"ZXIU  走秀网",
				isTrue:false,
				ft1:true,
				ft2:false,
				ft3:false,
				ft4:false,
				ft5:false,
				fromChild:{}
  	}
  },
  methods:{
  	getTitle(value){
  		//title
  		this.title = value.title
  		//头部返回键
  		this.fromChild = value
  		if(value.back === "show"){
  			this.isTrue = true
  		}else{
  			this.isTrue = false
  		}
  		//底部背景
  		let ft = this.fromChild.ft 
			if(ft == "1"){
				this.ft1 = true
				this.ft2 = false;
				this.ft3 = false;
				this.ft4 = false;
				this.ft5 = false;
			}else if(ft == "2"){
				this.ft1 = false;
				this.ft2 = true;
				this.ft3 = false;
				this.ft4 = false;
				this.ft5 = false;
			}else if(ft == "3"){
				this.ft1 = false;
				this.ft2 = false;
				this.ft3 = true;
				this.ft4 = false;
				this.ft5 = false;
			}else if(ft == "4"){
				this.ft1 = false;
				this.ft2 = false;
				this.ft3 = false;
				this.ft4 = true;
				this.ft5 = false;
			}else{
				this.ft1 = false;
				this.ft2 = false;
				this.ft3 = false;
				this.ft4 = false;
				this.ft5 = true;
			}
	  	}
  },
  mounted(){	
		
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.active{
		color: #e6356b !important;
		background: url(../img/bg3.png) no-repeat center top;
		background-size: 6.625rem 0.15625rem;
	}
.header{
	background:#e4366b;
	color:white;
	height: 2.6875rem;
	line-height:2.6875rem;
}
.header .mint-header-title{
	font-family: "microsoft yahei";
	font-weight:400;
	height: 2.6875rem;
	line-height:2.6875rem;
	font-size: 1.1125rem;
	/*background: url(../img/7.jpg) no-repeat center center !important;*/
	/*background-size: 60% !important;*/ 
}
.C_footer {
		width: 100%;
		 height: 3.125rem;
	}
.C_footer ul{
	width: 100%;
	height:100%;
	background: #484850;
}
.C_footer ul li{
	color: white;
	width: 20%;
	height: 100%;
	float: left;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.C_footer ul li i{
	margin-top: 0.3125rem;
	display: block;
	width: 1.6375rem;
	height: 1.6375rem;

	font-size: 1.308333rem;
	text-align: center;
}
.C_footer ul li span{
	 /*color: #686868;*/
	color: white;
   font-size: 0.625rem;
   	background-image:none !important;
}
.gouwuche{
	margin-left: 0.65rem;
}
/*.i1{
	background: url(../img/icons/tab_button_homepage_selected.png);
	background-size:100%;
}
.i2{
	background: url(../img/icons/tab_button_store_normal.png);
	background-size:100%;
}
.i3{
	background: url(../img/icons/tab_button_community_normal.png);
	background-size:100%;
}
.i4{
	background: url(../img/icons/tab_button_nearby_normal.png);
	background-size:100%;
}
.i5{
	background: url(../img/icons/tab_button_my_normal.png);
	background-size:100%;
}*/
</style>

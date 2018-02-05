<template>
	<div class="zhuye">
		<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="请输入搜索内容" class="sousuo">
		</mt-search>
		
		<swiper :options="swiperOption">
		    <swiper-slide v-for="slide in swiperSlides">
		    	<img src="../img/8.png"/>
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div id="list">
			<dl>
				<dt>
					
				</dt>
				<dd>
					
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	export default {
		name:'Zhuye',
		components:{
			swiper,
			swiperSlide
		},
		data(){
			return {
				back:"notShow",
				ft:"1",
				value:"",
				title:"ZXIU  走秀网",
				swiperOption: {
		          pagination: {
		            el: '.swiper-pagination',		            
		          },
		          autoplay:{
		          	delay:3000
		          },
		          loop:true
        		},
        		swiperSlides: [1, 2, 3, 4, 5]
			}
		},
		mounted(){
			let data = {
				back:this.back,
				ft:this.ft,
				title:this.title
			};
			this.$emit("to-parent",data)

//			this.$http({
//				method:"get",
//				url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback",				
//			}).then((data)=>{
//				var dt = eval(data.data)
//				console.log(dt)
//				
//			})
			this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback",{
				jsonp:"callback"
			}).then((data)=>{
				console.log(eval(data.bodyText))
			})
		}
	}
</script>

<style>
	.sousuo{
		/*position: static;*/
		height: 3.25rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #52525a;
	}
	.mint-searchbar{
		width: 80%;
		padding: 0 !important;	
		border-radius:0.86875rem !important;
	}
	.mint-searchbar-inner{
		border-radius:0.86875rem !important;
	}
	/*搜索图标*/
	.mintui-search{
		font-size: 1.325rem !important;
	}
	.mint-searchbar-cancel{
		color: black;
	}
	/*轮播图*/
	.swiper-container{
		width: 100%;
		height: 7.8125rem;
	}
	.swiper-slide img{
		width: 100%;
		height: 100%;
	}
	/*小圆点*/
	.swiper-pagination-bullet{
		background-color: white !important;
	}
	.swiper-pagination-bullet-active{
		background-color: #f15e88 !important;
	}
</style>
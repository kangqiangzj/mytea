<template>
	<div class="myshow">
		<h2>这是我的秀</h2>
	</div>
</template>

<script>
	export default {
		name:'Myshow',
		data(){
			return {
				back:"show",
				ft:"4",
				title:"我的秀"
			}
		},
		mounted(){
			let data = {
				back:this.back,
				ft:this.ft,
				title:this.title
			};
			this.$emit("to-parent",data)
		}
	}
</script>

<style>
</style>
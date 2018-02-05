<template>
	<div class="type">
		<h2>这是分类</h2>
	</div>
</template>

<script>
	export default {
		name:'Type',
		data(){
			return {
				back:"show",
				ft:"2",
				title:"ZXIU  走秀网"
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
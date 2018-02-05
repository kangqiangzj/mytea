<template>
	<div class="gouwuche">
		<h2>这是购物车</h2>
	</div>
</template>

<script>
	export default {
		name:'Gouwuche',
		data(){
			return {
				back:"show",
				ft:"3",
				title:"购物车"
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
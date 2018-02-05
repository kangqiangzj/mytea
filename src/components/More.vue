<template>
	<div class="more">
		<h2>这是更多</h2>
	</div>
</template>

<script>
	export default {
		name:'More',
		data(){
			return {
				back:"show",
				ft:"5",
				title:"更多"
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
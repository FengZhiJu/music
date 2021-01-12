<template>
	<view class="home">
		<music-list></music-list>
	</view>
</template>

<script>
	import MusicList from "@/components/musicList.vue"
	export default {
		components: {
			MusicList
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.home {
		// background-color: skyblue;
	}
</style>

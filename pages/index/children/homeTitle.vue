<template>
	<view class="home-title">
		<u-dropdown>
			<u-dropdown-item v-model="selectIndex" title="首页" :options="typeList" @change="clickItem" inactive-color="#fff"></u-dropdown-item>
		</u-dropdown>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				selectIndex: 0,
				typeList: [
					{
						label: '热歌榜',
						value: 0
					},
					{
						label: '新歌榜',
						value: 1
					},
					{
						label: '飙升榜',
						value: 2
					},
					{
						label: '抖音榜',
						value: 3
					},
					{
						label: '电音榜',
						value: 4
					},
				]
			}
		},
		computed: {},
		methods: {
			clickItem(value){
				console.log(value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-title {
		width: 100vw;
		// width: 100vw;
		// height: 100%;
	}
</style>

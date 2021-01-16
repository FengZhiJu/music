<template>
	<view class="game">
		<view class="navbar">
			<u-navbar :is-back="isNavbarBack" :title="title" :background="background" title-color="white" title-size="35" back-icon-color="#fff" ></u-navbar>
		</view>
		<view class="main">
			<!-- 
				页面流程
				1.进入页面弹框，介绍游戏规则，可能有多个弹框
				2.弹框到最后一步，按钮为立即开始，点击后开始游戏，播放选中的音乐
				3.游戏过程可暂停，暂停后游戏界面也暂停，音乐也暂停
				4.游戏过程中可暂停直接写出答案
				5.游戏时间到，显示包含正确歌名的序列集合，由玩家写入歌名，
			 -->
			<shooting></shooting>
		</view>
	</view>
</template>

<script>
	import { allBar } from "@/common/mixins.js"
	
	import Shooting from "./children/shooting.vue"
	export default {
		components: {
			Shooting
		},
		mixins: [allBar],
		data() {
			return {
				isNavbarBack: true,
				title: '游戏',
				musicInfo: {}
			}
		},
		onLoad(){
			this.musicInfo = this.$Route.query.musicInfo;
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.game {
		display: flex;
		height: 100vh;
		overflow: hidden;
		.main {
			flex: 1;
		}
	}
</style>

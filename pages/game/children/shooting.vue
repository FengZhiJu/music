<template>
	<view class="shooting">
		<!--
			页面流程
			1.进入页面弹框，介绍游戏规则，可能有多个弹框
			2.弹框到最后一步，按钮为立即开始，点击后开始游戏，播放选中的音乐
			3.游戏过程可暂停，暂停后游戏界面也暂停，音乐也暂停
			4.游戏过程中可暂停直接写出答案
			5.游戏时间到，显示包含正确歌名的序列集合，由玩家写入歌名，
		 -->
		 <view class="block-box" :prop="blockArr" :change:prop="blockModule.updateBlockOffset">
			 <text class="block-item" v-for="(item, index) in blockArr" :key="index" :style="item | getOffset">{{item.title}}</text>
		 </view>
	</view>
</template>

<script>
	let _this;
	import { windowWidth, windowHeight } from '@/common/mixins.js'
	export default {
		components: {

		},
		data() {
			return {
				blockArr: [
					{
						title: '十年',
						x: 0,
						y: 0
					}
				],
				fallTimer: -1,
				addTimer: -1
			}
		},
		created() {
			_this = this;
			// console.log(fall)
			// setTimeout(() => this.musicNames.push('123'), 1000)
		},
		mounted() {
			// _this.fallTimer = setInterval(() => {
			// 	_this.blockArr.forEach((item, index) => {
			// 		if(item.y >= windowHeight - 200) {
			// 			_this.blockArr = _this.blockArr.filter((innerItem, index) => innerItem.x != item.x);
			// 		}else {
			// 			item.y++;
			// 		}
			// 	});
			// }, 10);
			// _this.addTimer = setInterval(() => _this.blockArr.push({
			// 	title: 'test',
			// 	x: parseInt(Math.random() * (windowWidth - 50)),
			// 	y: 0
			// }), 3000)
			
			_this.addTimer = setTimeout(() => _this.blockArr.push({
				title: 'test',
				x: parseInt(Math.random() * (windowWidth - 50)),
				y: 0
			}), 3000)
		},
		computed: {
			
		},
		filters: {
			getOffset(item){
				return {
					left: `${item.x}px`,
					top: `${item.y}px`
				}
			}
		},
		watch: {},
		methods: {
			
		}
	}
</script>

<script module="blockModule" lang="renderjs">
	
	export default {
		mounted() {
			// setInterval(() => {
			// 	let arr = document.querySelectorAll('.block-item');
			// 	// arr.style.top = 
			// 	// console.log(arr.length)
			// }, 1000)
		},
		methods: {
			updateBlockOffset(newValue, oldValue, ownerInstance, instance){
				console.log(newValue)
				console.log(oldValue)
				console.log(ownerInstance)
				console.log(instance)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.shooting {
		height: 100%;
		// background-color: yellow;
		.block-box {
			position: relative;
			width: 100%;
			height: 100%;
			.block-item {
				position: absolute;
				top: 0;
				// display: inline-block;
				background-color: skyblue;
			}
		}
	}
</style>

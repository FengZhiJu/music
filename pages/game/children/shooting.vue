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
	<!-- 	 <button @tap="recoverAnimation">开始</button>
		 <button @tap="pauseAnimation">暂停</button> -->
		 <!-- <view class="block-box" :prop="blockArr" :change:prop="blockModule.updateBlockOffset"> -->
		 <view class="setbar"></view>
		 <view class="block-box" @tap="shotBullet">
			 <text :class="{'block-item': true, 'stop-animation': isPauseAnimation}" v-for="(item, index) in blockArr" :key="item.title" :style="item | getOffset" @animationend="fallAnimationEnd(item, index)">{{item.title}}</text>
			 <!-- <text class="block-item" v-for="(item, index) in blockArr" :key="index">{{item.title}}</text> -->
		 </view>
		 <view class="typing-box">
			 <u-input inputAlign="center" maxlength="15" v-model="typingVal"></u-input>
		 </view>
		 <!-- <view class="emitter-box">
			 <view class="bullet"></view>
			 <input type="text" value="" />
		 </view>
		 <view class="bullet-box"></view> -->
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
				blockArr: [],
				bullets: [
					{
						x: 0,
						y: 0
					}
				],
				fallTimer: -1,
				addTimer: -1,
				maxX: windowWidth - 50,
				addInterval: 2000,
				isPauseAnimation: false,
				typingVal: ''
			}
		},
		created() {
			_this = this;
			uni.$on('appHide', () => this.pauseAnimation());
			uni.$on('appShow', () => this.recoverAnimation());
			
			// setTimeout(() => {
			// 	this.pauseAnimation();
			// 	setTimeout(() => this.recoverAnimation(), 5000)
			// }, 3000)
			
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
			
			// setTimeout(() => this.isPauseAnimation = true, 4000);
			// _this.addTimer = setTimeout(() => _this.blockArr.push({
			// 	title: 'test',
			// 	x: parseInt(Math.random() * (windowWidth - 50)),
			// 	y: 0
			// }), 3000)
			_this.startAnimation();
		},
		computed: {
			
		},
		destroyed() {
			console.log('销毁')
			this.stopAnimation();
		},
		filters: {
			getOffset(item){
				return {
					left: `${item.x}px`
					// top: `${item.y}px`
				}
			}
		},
		watch: {
			typingVal(newVal, oldVal) {
				
			}
		},
		methods: {
			fallAnimationEnd(item, index){
				this.blockArr.splice(index, 1);
				// console.log('delete')
				// console.log(this.blockArr)
			},
			startAnimation(){
				_this.addTimer = setInterval(() => {
					if(!_this.isPauseAnimation) {
						_this.blockArr.push({
							title: 'test' + Math.random(),
							x: parseInt(Math.random() * _this.maxX),
							y: 0
						});
						// console.log('add')
					}
				}, _this.addInterval)
				console.log('start')
			},
			pauseAnimation(){
				this.isPauseAnimation = true;
				console.log('pause');
			},
			recoverAnimation(){
				this.isPauseAnimation = false;
				console.log('recover');
			},
			stopAnimation(){
				clearInterval(this.addTimer);
				clearInterval(this.fallTimer);
				console.log('stop');
			},
			shotBullet({ touches }) {
				console.log(touches)
			}
			
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
				// let arr = Array.from(document.querySelectorAll('.block-item'));
				// arr.forEach((item, index) => {
				// 	item.style.top = `${newValue[index].y}px`;
				// 	item.style.left = `${newValue[index].x}px`;
					
				// });
				// console.log()
				// console.log(newValue)
				// console.log(oldValue)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes fall{
		0% {
			top: 0px;
		}
		100% {
			display: none;
			top: 600px;
		}
	}
	.stop-animation {
		animation-play-state: paused !important;
	}
	.shooting {
		position: relative;
		height: 100%;
		// margin-top: 10px;
		// background-color: yellow;
		.setbar {

		}
		.block-box {
			position: relative;
			width: 100%;
			height: 100%;
			.block-item {
				position: absolute;
				top: 0;
				// display: inline-block;
				background-color: skyblue;
				/* 
					1. duration 	动画时长
					2. timing-function 	动画曲线
					3. delay 	//延迟时长
					4. iteration-count 	//动画循环次数
					5. direction 	//是否反向动画
					6. fill-mode 	//在动画哪个周期赋予样式
					7. play-state 	//动画状态，正在运行还是暂停
					8. name 	//动画名称
				 */
				animation: 3s linear 0s 1 normal both running fall;
			}
		}
		.typing-box {
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translate(-50%, 0);
			border: 1px solid #2979ff;
			// background-color: skyblue;
		}
		// .emitter-box {
		// 	position: absolute;
		// 	bottom: 0rpx;
		// 	left: 50%;
		// 	width: 100rpx;
		// 	height: 100rpx;
		// 	border-radius: 50%;;
		// 	transform: translate(-50%, 0);
		// 	background-image: linear-gradient(to top, $u-type-primary, $u-type-primary-light);
		// 	z-index: 0;
		// 	.bullet {
		// 		position: absolute;
		// 		left: 50%;
		// 		top: 50%;
		// 		height: 50rpx;
		// 		width: 50rpx;
		// 		margin: -25rpx 0 0 -25rpx;
		// 		border-radius: 50%;
		// 		// border: 1px solid #000;
		// 		background-image: linear-gradient( #85c819, #c1c833);
		// 		z-index: 9;
		// 	}
		// }
	}
</style>

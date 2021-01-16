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
		 <canvas id="shooting-canvas" canvas-id="shooting-canvas" type="2d" :disable-scroll="true"></canvas>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				
			}
		},
		created() {
			// console.log(fall)
		},
		computed(){
		},
		methods: {
			
		}
	}
</script>

<script module="fall" lang="renderjs">
	let context;
	export default {
		mounted() {
			console.log(this)
			// context = uni.createCanvasContext()
			  // context.setStrokeStyle("#00ff00")
			  //       context.setLineWidth(5)
			  //       context.rect(0, 0, 200, 200)
			  //       context.stroke()
			  //       context.setStrokeStyle("#ff0000")
			  //       context.setLineWidth(2)
			  //       context.moveTo(160, 100)
			  //       context.arc(100, 100, 60, 0, 2 * Math.PI, true)
			  //       context.moveTo(140, 100)
			  //       context.arc(100, 100, 40, 0, Math.PI, false)
			  //       context.moveTo(85, 80)
			  //       context.arc(80, 80, 5, 0, 2 * Math.PI, true)
			  //       context.moveTo(125, 80)
			  //       context.arc(120, 80, 5, 0, 2 * Math.PI, true)
			  //       context.stroke()
			  //       context.draw()
		},
		methods: {
			test(){
				console.log(abc);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shooting {
		height: 100%;
		background-color: yellow;
		#shooting-canvas {
			width: 100%;
			height: 100%;
			background-color: skyblue;
		}
	}
</style>

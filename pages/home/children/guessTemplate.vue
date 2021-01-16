<template>
	<view class="guess-template">
		<view>
			<view class="fill">
				
			</view>
			<view class="chars"></view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				chars: []
			}
		},
		created() {
			// console.log(12)
			// for(let i = 0; i < 30; i++) {
			// 	this.chars.push(this.getRandomChineseWord());
			// }
			// console.log(this.chars)
		},
		props: {},
		computed: {},
		methods: {
			// getRandomChineseWord () {
			//     let _rsl = "";
			//     let _randomUniCode = parseInt(Math.random() * (40959 - 19968) + 19968).toString(16);
			//     eval("_rsl=" + '"\\u' + _randomUniCode + '"');
			//     return _rsl;
			// }
		}
	}
</script>

<style lang="scss" scoped>
	
</style>

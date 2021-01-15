<template>
	<view class="guess-template">
		<view>test</view>
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
		props: {},
		computed: {},
		methods: {
			getRandomChineseWord () {
			    let _rsl = "";
			    let _randomUniCode = parseInt(Math.random() * (40959 - 19968) + 19968).toString(16);
			    eval("_rsl=" + '"\\u' + _randomUniCode + '"');
			    return _rsl;
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>

<template>
	<view class="music-list">
		<view class="content">
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="serial">{{index + 1}}</view>
				<view class="title">
					<view class="music">{{item.name}}</view>
					<view class="singer">{{item.singer}}</view>
				</view>
				<view class="operate">
					<u-icon name="more-dot-fill" size="35"></u-icon>
				</view>
			</view>
		</view>
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
		props: {
			list: {
				type: Array,
				default(){
					return [{
						"name": "你走demo",
						"url": "http://music.163.com/song/media/outer/url?id=558071673",
						"singer": "李宗锦（松紧先生）",
						"id": "558071673"
					}, {
						"name": "所念皆星河",
						"url": "http://music.163.com/song/media/outer/url?id=1384026889",
						"singer": "CMJ",
						"id": "1384026889"
					}, {
						"name": "万有引力",
						"url": "http://music.163.com/song/media/outer/url?id=1425626819",
						"singer": "F*yy",
						"id": "1425626819"
					}, {
						"name": "怜城辞",
						"url": "http://music.163.com/song/media/outer/url?id=1808956359",
						"singer": "鹿晗",
						"id": "1808956359"
					}, {
						"name": "丢了你",
						"url": "http://music.163.com/song/media/outer/url?id=1442508316",
						"singer": "井胧",
						"id": "1442508316"
					}, {
						"name": "写给黄淮",
						"url": "http://music.163.com/song/media/outer/url?id=1334295185",
						"singer": "邵帅",
						"id": "1334295185"
					}, {
						"name": "烟火里的尘埃",
						"url": "http://music.163.com/song/media/outer/url?id=29004400",
						"singer": "华晨宇",
						"id": "29004400"
					}, {
						"name": "是想你的声音啊（DJ完整版）",
						"url": "http://music.163.com/song/media/outer/url?id=1481657185",
						"singer": "傲七爷",
						"id": "1481657185"
					}, {
						"name": "踏山河",
						"url": "http://music.163.com/song/media/outer/url?id=1804320463",
						"singer": "是七叔呢",
						"id": "1804320463"
					}, {
						"name": "执迷不悟",
						"url": "http://music.163.com/song/media/outer/url?id=1477539203",
						"singer": "鱿籽酱",
						"id": "1477539203"
					}, {
						"name": "踏山河",
						"url": "http://music.163.com/song/media/outer/url?id=1804320463",
						"singer": "是七叔呢",
						"id": "1804320463"
					}, {
						"name": "踏山河",
						"url": "http://music.163.com/song/media/outer/url?id=1804320463",
						"singer": "是七叔呢",
						"id": "1804320463"
					}, {
						"name": "踏山河",
						"url": "http://music.163.com/song/media/outer/url?id=1804320463",
						"singer": "是七叔呢",
						"id": "1804320463"
					}]
				}
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.music-list {
		.content {
			.item {
				display: flex;
				align-items: center;
				padding: 25rpx 30rpx;
				border-bottom: 0.2px solid $u-type-primary;
				font-size: 30rpx;
				.serial {
					width: 40rpx;
					text-align: center;
				}
				.title {
					flex: 1;
					margin: 0 30rpx;
					// filter: blur(5px);
					.singer {
						font-size: 25rpx;
						color: #aaa;
					}
				}
			}
		}
	}
</style>

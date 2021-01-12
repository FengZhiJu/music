<template>
	<view class="music-list">
		<view class="content">
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="serial">{{index + 1}}</view>
				<view class="title">{{item.title}}</view>
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
					return [
						{
							id: 12,
							title: '有何不可1',
							url: 'https://12.mp3',
							size: 102400
						},
						{
							id: 12,
							title: '有何不可1',
							url: 'https://12.mp3',
							size: 102400
						},
						{
							id: 12,
							title: '有何不可1',
							url: 'https://12.mp3',
							size: 102400
						},{
							id: 12,
							title: '有何不可1',
							url: 'https://12.mp3',
							size: 102400
						},{
							id: 12,
							title: '有何不可1',
							url: 'https://12.mp3',
							size: 102400
						},{
							id: 12,
							title: '有何不可1',
							url: 'https://12.mp3',
							size: 102400
						},{
							id: 12,
							title: '有何不可1',
							url: 'https://12.mp3',
							size: 102400
						},{
							id: 12,
							title: '有何不可1',
							url: 'https://12.mp3',
							size: 102400
						},
					]
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
				padding: 30rpx;
				border-bottom: 0.2px solid $u-type-primary;
				font-size: 30rpx;
				.title {
					flex: 1;
					margin: 0 25rpx;
					filter: blur(5px);
				}
			}
		}
	}
</style>

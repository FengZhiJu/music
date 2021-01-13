<template>
	<view class="home">
		<scroll-view :scroll-y="true" class="scroll-view">
			<music-list></music-list>
		</scroll-view>
	</view>
</template>

<script>
	let _this;
	import MusicList from "@/components/musicList.vue"
	export default {
		components: {
			MusicList
		},
		data() {
			return {
				typeList: ['热歌榜', '新歌榜', '飙升榜', '抖音榜', '电音榜'],
				typeIndex: 0,
				url: 'https://api.uomg.com/api/rand.music',
				list: []
			}
		},
		created() {
			_this = this;
			// this.getMusic();
		},
		computed: {
			selectType(){
				return this.typeList[this.typeIndex];
			}
		},
		methods: {
			async getMusic(){
				this.list = [];
				do {
					const res = await uni.request({
						url: _this.url,
						data: {
							sort: _this.selectType,
							format: 'json'
						}
					})
					if(res[1].data.code == 1) {
						let data = res[1].data.data;
						this.list.push({
							name: data.name,
							url: data.url,
							singer: data.artistsname,
							id: data.url.match(/id=(.*)/)[1]
						});
					}
				}while(this.list.length < 11);
				console.log(this.list);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		height: 100vh;
		.scroll-view {
			min-height: 100vh;
		}
		// background-color: skyblue;
	}
</style>

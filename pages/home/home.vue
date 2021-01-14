<template>
	<view class="home">
		<!-- <audio v-if="selectMusic.url" :src="selectMusic.url" :poster="false" :name="false" :author="false" :action="{method: 'pause'}" controls></audio> -->
		<scroll-view :scroll-y="true" class="scroll-view">
			<music-list @clickMusic="clickMusic" @clickMore='clickMore'></music-list>
		</scroll-view>
		<view style="width: 100vw;">
			<u-modal v-model="modalShow" content="测试"></u-modal>
		</view>
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
				list: [],
				// selectMusic: {
				// 	url: ''
				// },
				audio: null,
				modalShow: true
			}
		},
		created() {
			_this = this;
			this.audio = uni.createInnerAudioContext();
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
			},
			clickMusic(music) {
				this.audio.src = music.url;
				this.audio.play();
				console.log(music);
			},
			clickMore(music) {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		position: relative;
		.scroll-view {
			height: 100%;
		}
		// background-color: skyblue;
	}
</style>

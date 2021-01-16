<template>
	<view class="home">
		<!-- <audio v-if="selectMusic.url" :src="selectMusic.url" :poster="false" :name="false" :author="false" :action="{method: 'pause'}" controls></audio> -->
		<scroll-view :scroll-y="true" class="scroll-view">
			<filters @updateType='updateType' :list="typeList"></filters>
			<!-- <music-list @clickMusic="playMusic" @clickMore='toggleModal'></music-list> -->
			<music-list @clickMusic="selectMusic" @clickMore='selectMusic'></music-list>
		</scroll-view>
		<!-- <u-popup v-model="showGuess" mode="center">
			<guess-template></guess-template>
		</u-popup> -->
		<u-modal v-model="modalShow" :show-cancel-button="true" title="猜歌名" content="是否进入游戏" @confirm="isInGame"></u-modal>
	</view>
</template>

<script>
	let _this;
	import MusicList from "@/components/musicList.vue"
	import Filters from "./children/filters.vue"
	import GuessTemplate from "./children/guessTemplate.vue"
	export default {
		components: {
			MusicList,
			Filters,
			GuessTemplate
		},
		data() {
			return {
				typeList: ['热歌榜', '新歌榜', '飙升榜', '抖音榜', '电音榜'],
				typeIndex: 0,
				url: 'https://api.uomg.com/api/rand.music',
				list: [],
				guessTitle: '',
				audioControl: null,
				modalShow: true,
				// playAudio: {
				// 	url: ''
				// },
				// guessAudio: {
				// 	url: ''
				// },
				currentMusic: {},
				showGuess: true
			}
		},
		created() {
			_this = this;
			this.audioControl = uni.createInnerAudioContext();
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
			// playMusic(music) {
			// 	// this.playAudio = music;
			// 	// this.audioControl.src = this.playAudio.url;
			// 	// this.audioControl.play();
			// 	this.showGuess = true;
			// 	this.modalShow = true;
			// 	console.log(music);
			// },
			// toggleModal(music) {
			// 	this.guessAudio = music;
			// 	this.modalShow = !this.modalShow;
			// },
			selectMusic(music) {
				this.currentMusic = music;
				this.modalShow = true;
				console.log(music);
			},
			updateType(typeIndex) {
				this.typeIndex = typeIndex;
				console.log(this.selectType)
				// this.getMusic();
			},
			isInGame() {
				this.$Router.push({
					name: 'game',
					query: {
						musicInfo: _this.currentMusic
					}
				})
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
		.modal-box {
			padding: 50rpx;
		}
		// background-color: skyblue;
	}
</style>

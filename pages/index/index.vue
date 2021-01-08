<template>
	<view class="index">
		<!-- <u-mask :show="isMaskShow" :z-index="10000" @tap="$refs.addPlanButton.addButtonToggle()"></u-mask> -->
		<view class="main">
			<u-navbar class="navbar" v-if="isNavbarShow" :is-back="isNavbarBack" :title="title" :background="background" title-color="white" title-size="35" back-icon-color="#fff" >
			
			</u-navbar>
			<view class="content" :style="contentMoveStyle" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
				<!-- <home v-if="current == 0"></home>
				<unlock v-if="current == 1"></unlock>
				<ranking v-if="current == 2"></ranking>
				<chat v-if="current == 3"></chat>
				<profile v-if="current == 4"></profile> -->
				<home class="content-item"></home>
				<unlock class="content-item"></unlock>
				<ranking class="content-item"></ranking>
				<chat class="content-item"></chat>
				<profile class="content-item"></profile>
			</view>
			<u-tabbar bg-color="#fff" :list="list" active-color="#2979ff" v-model="current" @change="tabbarChange" :show="isTabbarShow"></u-tabbar>
		</view>
	</view>
</template>

<script>
	// https://autumnfish.cn/
	import Home from "../home/home.vue"
	import Unlock from "../unlock/unlock.vue"
	import Ranking from "../ranking/ranking.vue"
	import Chat from "../chat/chat.vue"
	import Profile from "../profile/profile.vue"
	
	import { allBar } from "@/common/mixins.js"
	import { mapState } from "vuex"
	
	let _this;
	export default {
		components: {
			Home,
			Unlock,
			Ranking,
			Chat,
			Profile
		},
		data() {
			return {
				tabbarOption: ['首页', '已解锁歌曲', '排行榜', '聊天室', '个人资料'],
				current: 0,
				isNavbarBack: false,
				isNavbarShow: true,
				isTabbarShow: true,
				isMaskShow: false,
				x: -1,
				diffX: 0
			}
		},
		mixins: [allBar],
		onLoad() {
			_this = this;
		},
		computed: {
			...mapState(['list']),
			title(){
				return this.tabbarOption[this.current];
			},
			contentMoveStyle(){
				return {
					transform: `translateX(${_this.diffX}px)`
				}
			}
		},
		methods: {
			tabbarChange(index){
				this.current = index;
			},
			touchstart({ touches }){
				this.x = touches[0].pageX;
				// console.log(touches);
			},
			touchmove({ touches }) {
				this.diffX = touches[0].pageX - this.x;
				console.log(this.diffX)
			},
			touchend({ changedTouches }) {
				this.x = changedTouches[0].pageX;
			}
		}
	}
</script>

<style lang="scss">
	.index {
		height: 100vh;
		background-color: #fcfcfc;
		.main {
			display: flex;
			flex-direction: column;
			height: 100%;
			.content {
				flex: 1;
				display: flex;
				width: 500vw;
				.content-item {
					flex: 1;
				}
			}
		}
	}
</style>

<template>
	<view class="index">
		<!-- <u-mask :show="isMaskShow" :z-index="10000" @tap="$refs.addPlanButton.addButtonToggle()"></u-mask> -->
		<view class="main">
			<u-navbar class="navbar" v-if="isNavbarShow" :is-back="isNavbarBack" :title="title" :background="background" title-color="white" title-size="35" back-icon-color="#fff" >
				<!-- <u-dropdown>
					<u-dropdown-item v-model="value1" title="首页" :options="tabbarOption"></u-dropdown-item>
				</u-dropdown> -->
				<template #right>
					
				</template>
			</u-navbar>
			<view :class="{'content': true, 'animation': isAnimation}" :style="contentMoveStyle" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
				<!-- <home v-if="current == 0"></home>
				<unlock v-if="current == 1"></unlock>
				<ranking v-if="current == 2"></ranking>
				<chat v-if="current == 3"></chat>
				<profile v-if="current == 4"></profile> -->
				<home class="content-item" :style="tabbarHeightStyle"></home>
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
	
	import { allBar, eventSEO, windowWidth, statusBarHeight, tabbarHeight } from "@/common/mixins.js"
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
				isAnimation: false,
				tabbarWidth: -windowWidth * 4,
				startX: -1,
				diffX: 0,
				flag: true
			}
		},
		mixins: [allBar, eventSEO],
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
			},
			currentX(){
				return -(this.current * windowWidth);
			},
			tabbarHeightStyle(){
				return {
					height: tabbarHeight + 'px'
				}
			}
		},
		methods: {
			tabbarChange(index){
				this.current = index;
				this.diffX = index * -windowWidth;
			},
			touchStart({ touches }){
				if(this.flag) {
					this.startX = touches[0].pageX;
				}
			},
			touchMove({ touches }) {
				if(!this.flag || this.startX == -1) return 0;
				let diffX = this.currentX + (touches[0].pageX - this.startX);
				if(diffX <= 0 && diffX >= this.tabbarWidth) {
					this.diffX = diffX;
				}
			},
			touchEnd({ changedTouches }) {
				this.flag = false;
				let diffX = this.startX - changedTouches[0].pageX;
				if(Math.abs(diffX) < 70 || this.startX == -1) return this.animation();
				if(diffX > 0 && this.current < 4) this.current++
				else if(diffX < 0 && this.current > 0) this.current--;
				this.animation();
			},
			animation(){
				this.antiShake(release => {
					let offsetX = this.currentX;
					_this.isAnimation = true;
					_this.diffX = offsetX;
					setTimeout(() => {
						_this.isAnimation = false;
						this.startX = -1;
						_this.flag = true;
						release();
					}, 300);
				});
			}
		}
		// watch: {
		// 	diffX(newVal, oldVal){
		// 		// if(newVal > 0) this.diffX = 0
		// 		// else if(newVal < this.tabbarWidth) this.diffX = this.tabbarWidth;
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>
	.animation {
		transition: all .3s;
	}
	.index {
		height: 100vh;
		background-color: #fcfcfc;
		.main {
			display: flex;
			flex-direction: column;
			height: 100%;
			overflow: hidden;
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

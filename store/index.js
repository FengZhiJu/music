import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
	list: [
		{
			iconPath: 'lock',
			selectedIconPath: 'lock-fill',
			text: '首页'
		},
		{
			iconPath: 'lock-open',
			selectedIconPath: 'lock-opened-fill',
			text: '歌单'
		},
		{
			iconPath: 'grid',
			selectedIconPath: 'grid-fill',
			text: '排行'
		},
		{
			iconPath: 'chat',
			selectedIconPath: 'chat-fill',
			text: '聊天'
		},
		{
			iconPath: 'account',
			selectedIconPath: 'account-fill',
			text: '我的'
		}
	]
}

const store = new Vuex.Store({
	state,
})

export default store;

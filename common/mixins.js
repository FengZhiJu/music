import { mapState } from "vuex"
import { antiShake, throttle } from "./util.js"

let windowWidth;
let windowHeight;
let statusBarHeight;
let tabbarHeight
uni.getSystemInfo({
    success: function (res) {
		windowWidth = res.windowWidth + 1;
		windowHeight = res.windowHeight + 1;
		statusBarHeight = res.statusBarHeight;
		tabbarHeight = res.windowHeight - 94 - statusBarHeight;
        // console.log(res.model);
        // console.log(res.pixelRatio);
        // console.log(res.windowWidth);
        // console.log(res.windowHeight);
        // console.log(res.language);
        // console.log(res.version);
        // console.log(res.platform);
    }
});

const navBar = {
	data(){
		return {
			background: {
				backgroundImage: 'linear-gradient(45deg, rgb(43, 133, 228), rgb(85, 167, 255))'
			}
		}
	}
}
const tabBar = {
	computed: {
		...mapState(['list'])
	}
}

const eventSEO = {
	data(){
		return {
			antiShake: antiShake(),
			throttle: throttle()
		}
	}
}

const allBar = {
	...navBar,
	...tabBar
}


export {
	allBar,
	navBar,
	tabBar,
	eventSEO,
	windowWidth,
	windowHeight,
	statusBarHeight,
	tabbarHeight
}
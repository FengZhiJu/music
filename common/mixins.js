import { mapState } from "vuex"
import { antiShake, throttle } from "./util.js"
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
	eventSEO
}
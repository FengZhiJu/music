<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			uni.$emit('appShow')
			console.log('App Show')
		},
		onHide: function() {
			uni.$emit('appHide')
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/components/uview-ui/index.scss";
	@import "@/static/css/base.css";
</style>

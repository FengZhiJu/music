<template>
	<view class="filters">
		<view>
			<u-dropdown>
				<u-dropdown-item v-model="selectIndex" :title="selectType" :options="typeList" inactive-color="#fff"></u-dropdown-item>
			</u-dropdown>
		</view>
	</view>
</template>

<script>
	let _this;
	export default {
		components: {

		},
		data() {
			return {
				selectIndex: 0,
			}
		},
		props: {
			list: {
				type: Array,
				default(){
					return []
				}
			}
		},
		created() {
			_this = this;
		},
		computed: {
			selectType(){
				return this.list[this.selectIndex];
			},
			typeList(){
				return this.list.map((item, index) => ({
					label: _this.list[index],
					value: index
				}))
			}
		},
		methods: {},
		watch: {
			selectIndex(newVal, oldVal){
				_this.$emit('updateType', newVal);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.filters {
		border-bottom: 0.2px solid $u-type-primary;
		// width: 100vw;
		// height: 100%;
	}
</style>

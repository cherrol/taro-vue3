<template>
	<view class="location-1v0" :class="classes">location-1v0</view>
</template>
<script>
export default {
	name: "location-1v0",
	props: ["item"],
	data() {
		return { classes: {} };
	},
	created() {
		const { vertical, horizontal } = this.item.spacer;
		if (vertical) {
			this.classes[`my-${vertical}`] = true;
		}
		if (horizontal) {
			this.classes[`mx-${horizontal}`] = true;
		}
	}
};
</script>
<style lang="scss">
.location-1v0 {
}
</style>

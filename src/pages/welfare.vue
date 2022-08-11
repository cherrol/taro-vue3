<template>
	<view class="page-welfare h-full box-border overflow-auto">
		<components-list :options="options" />
	</view>
</template>

<script>
import { ref } from "vue";
import { useDidShow } from "@tarojs/taro";
import ComponentsList from "@uiux/components-list.vue";

export default {
	name: "page-welfare",
	components: {
		ComponentsList
	},
	setup() {
		const options = ref({
			url: "welfare"
		});

		useDidShow(() => console.log("Page Welfare onShow"));

		return { options };
	}
};
</script>

<style lang="scss">
.page-welfare {
	background-image: linear-gradient();
}
</style>

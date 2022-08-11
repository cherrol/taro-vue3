<template>
	<view class="page-home h-full box-border overflow-auto">
		<components-list :options="options" />
	</view>
</template>

<script>
import { ref } from "vue";
import { useDidShow } from "@tarojs/taro";
import ComponentsList from "@uiux/components-list.vue";

export default {
	name: "page-home",
	components: {
		ComponentsList
	},
	setup() {
		const options = ref({
			url: "home"
		});

		useDidShow(() => console.log("Page Home onShow"));

		return { options };
	}
};
</script>

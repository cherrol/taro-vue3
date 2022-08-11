<template>
	<view class="dynamic-form">
		<nut-button @click="clickButton">点击按钮</nut-button>
	</view>
</template>
<script>
import { reactive, onMounted, createVNode, getCurrentInstance } from "vue";

export default {
	name: "dynamic-form",
	setup() {
		const state = reactive({});
		const { proxy } = getCurrentInstance();

		const clickButton = () => {
			console.log("clickButton");
			proxy.$dialog({
				title: "基础弹框",
				content: createVNode("span", { style: { color: "red" } }, "我可以是一个自定义组件"),
				onCancel: () => {},
				onOk: () => {}
			});
		};

		return {
			state,
			clickButton
		};
	}
};

onMounted(() => {});
</script>
<style lang="scss">
.dynamic-form {
}
</style>

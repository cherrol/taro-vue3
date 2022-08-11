<template>
	<view class="form-text">
		<nut-input v-model="value" :placeholder="placeholder" />
	</view>
</template>
<script>
import { Input } from "@nutui/nutui-taro";

export default {
	name: "form-input",
	components: {
		"nut-input": Input
	},
	props: ["placeholder", "modelValue"],
	data() {},
	computed: {
		value: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emits("update:modelValue", value);
			}
		}
	}
};
</script>
<style lang="scss">
.form-input {
}
</style>

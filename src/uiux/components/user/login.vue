<template>
	<view class="user-login">
		<view>{{ msg }}</view>
	</view>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
	name: "user-login",
	props: ["options"],
	data() {
		return {
			msg: "Component User Login"
		};
	},
	created() {
		console.log(this.options);
	}
};
</script>
<style lang="scss">
.user-login {
}
</style>

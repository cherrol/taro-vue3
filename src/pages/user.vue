<template>
	<view class="page-user h-full overflow-auto">
		<view>Page User</view>
		<view>
			<nut-button type="info" @click="gotoPage('/pages/user/profile')"
				>Profile</nut-button
			>
		</view>
	</view>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { Button } from "@nutui/nutui-taro";
import { gotoPage } from "@utils/index";

export default {
	name: "page-user",
	data() {
		return {};
	},
	components: {
		"nut-button": Button,
		"user-login": defineAsyncComponent(() =>
			import("@uiux/components/user/login.vue")
		),
		"user-logout": defineAsyncComponent(() =>
			import("@uiux/components/user/logout.vue")
		)
	},
	setup() {
		return {
			gotoPage
		};
	}
};
</script>

<style lang="scss">
.page-user {
	background-image: linear-gradient(
		to bottom,
		#cff6e4 0%,
		$bg-lighter 320px,
		$bg-lighter 100%
	);
}
</style>

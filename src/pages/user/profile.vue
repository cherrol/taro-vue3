<template>
	<view class="page-user">
		<view>User Profile</view>
		<user-login></user-login>
		<user-logout></user-logout>
		<view class="btn">
			<nut-button type="primary" @click="gotoPage('/pages/home/index')"> 跳转首页 </nut-button>
		</view>
		<view class="btn">
			<nut-button type="primary" @click="gotoPage('/pages/staging/index')"> 跳转工作台 </nut-button>
		</view>
		<view class="btn">
			<nut-button type="primary" @click="gotoPage('/pages/user/index')"> 跳转我的 </nut-button>
		</view>
	</view>
</template>

<script>
import { Button } from "@nutui/nutui-taro";
import { gotoPage } from "@utils/index";

export default {
	name: "page-user-profile",
	components: {
		"nut-button": Button
	},
	setup() {
		definePageConfig({
			navigationBarTitleText: "Profile"
		});

		return {
			gotoPage
		};
	}
};
</script>

<style lang="scss" scoped>
.page-user {
	background-color: #fff;
}
</style>

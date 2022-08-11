import { switchTab, navigateTo } from "@tarojs/taro";

export function gotoPage(url) {
	if (/\/pages\/(home|staging|user)\/index/.test(url)) {
		// navbar 三个页面只能使用 switchTab 跳转
		switchTab({ url });
	} else {
		// 其他页面使用 navigateTo
		navigateTo({ url });
	}
}

export default {
	gotoPage
};

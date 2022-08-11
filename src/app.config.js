export default defineAppConfig({
	pages: ["pages/home", "pages/welfare", "pages/user", "pages/user/profile"],
	window: {
		backgroundTextStyle: "dark",
		navigationBarBackgroundColor: "#26dc89",
		navigationBarTitleText: "小海报",
		navigationBarTextStyle: "white"
	},
	tabBar: {
		selectedColor: "#009b64",
		color: "#b2b2b2",
		backgroundColor: "#f3f4f6",
		borderStyle: "white",
		list: [
			{
				pagePath: "pages/home",
				text: "首页",
				iconPath: "assets/images/tabbar/home.png",
				selectedIconPath: "assets/images/tabbar/home-active.png"
			},
			{
				pagePath: "pages/welfare",
				text: "福利",
				iconPath: "assets/images/tabbar/work.png",
				selectedIconPath: "assets/images/tabbar/work-active.png"
			},
			{
				pagePath: "pages/user",
				text: "我的",
				iconPath: "assets/images/tabbar/user.png",
				selectedIconPath: "assets/images/tabbar/user-active.png"
			}
		]
	}
});

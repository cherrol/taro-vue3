const path = require('path');

const config = {
	projectName: "taro-project",
	date: "2022-8-10",
	designWidth: 375,
	deviceRatio: {
		640: 2.34 / 2,
		750: 1,
		828: 1.81 / 2,
		375: 2 / 1,
	},
	sourceRoot: "src",
	outputRoot: "dist",
	plugins: ["@tarojs/plugin-html"],
	defineConstants: {},
	copy: {
		patterns: [],
		options: {},
	},
	framework: "vue3",
	compiler: "webpack5",
	cache: {
		enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
	},
	sass: {
		resource: [path.resolve(__dirname, "..", "src/styles/variables/_theme.scss")],
		data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
	},
	mini: {
		postcss: {
			pxtransform: {
				enable: true,
				config: {
					selectorBlackList: ["nut-"],
				},
			},
			url: {
				enable: true,
				config: {
					limit: 1024, // 设定转换尺寸上限
				},
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: "module", // 转换模式，取值为 global/module
					generateScopedName: "[name]__[local]___[hash:base64:5]",
				},
			},
		},
	},
	h5: {
		publicPath: "/",
		staticDirectory: "static",
		esnextModules: ["nutui-taro"],
		postcss: {
			autoprefixer: {
				enable: true,
				config: {},
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: "module", // 转换模式，取值为 global/module
					generateScopedName: "[name]__[local]___[hash:base64:5]",
				},
			},
		},
	},
	alias: {
		"@uiux": path.resolve(__dirname, "..", "src/uiux"),
		"@components": path.resolve(__dirname, "..", "src/uiux/components"),
		"@widgets": path.resolve(__dirname, "..", "src/uiux/widgets"),
		"@request": path.resolve(__dirname, "..", "src/request"),
		"@images": path.resolve(__dirname, "..", "src/assets/images"),
		"@utils": path.resolve(__dirname, "..", "src/utils")
	},
};

module.exports = function(merge) {
	if (process.env.NODE_ENV === "development") {
		return merge({}, config, require("./dev"));
	}
	return merge({}, config, require("./prod"));
};

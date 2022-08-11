import "./app.scss";
import { createApp, defineAsyncComponent } from "vue";
import { Dialog, Button, Form, FormItem } from "@nutui/nutui-taro";

const App = createApp({
	onShow(options) {
		console.log(`App onShow`);
		console.log(options);
	}
	// 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

/**
 * @注册nutui
 */
App.use(Form).use(FormItem).use(Button).use(Dialog);

/**
 * @注册全局组件
 */
// components
App.component(
	"user-login",
	defineAsyncComponent(() => import("@components/user/login.vue"))
);
App.component(
	"user-logout",
	defineAsyncComponent(() => import("@components/user/logout.vue"))
);
App.component(
	"dynamic-form",
	defineAsyncComponent(() => import("@components/form/dynamic-form.vue"))
);
App.component(
	"carousel-1v5",
	defineAsyncComponent(() => import("@uiux/components/carousel/carousel-1v5.vue"))
);
App.component(
	"dynamic-card-list-1v2",
	defineAsyncComponent(() => import("@uiux/components/list/dynamic-card-list-1v2.vue"))
);
App.component(
	"location-1v0",
	defineAsyncComponent(() => import("@uiux/components/location/location-1v0.vue"))
);

// widgets
App.component(
	"form-text",
	defineAsyncComponent(() => import("@widgets/form/form-text.vue"))
);

export default App;

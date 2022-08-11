<template>
	<template v-for="(item, key) in data.body || []" :key="key">
		<component
			:is="item.type"
			:data="item"
			:classes="[
				item.spacer && item.spacer.margin && item.spacer.margin.horizontal
					? `mx-${item.spacer.margin.horizontal}`
					: '',
				item.spacer && item.spacer.margin && item.spacer.margin.vertical
					? `my-${item.spacer.margin.vertical}`
					: '',
				item.spacer && item.spacer.padding && item.spacer.padding.horizontal
					? `px-${item.spacer.padding.horizontal}`
					: '',
				item.spacer && item.spacer.padding && item.spacer.padding.vertical
					? `py-${item.spacer.padding.vertical}`
					: '',
				item.style && item.style.color ? `text-${item.style.color}` : '',
				item.style && item.style.bgColor ? `bg-${item.style.bgColor}` : ''
			]"
		/>
	</template>
</template>

<script>
import { ref } from "vue";
import { showLoading, hideLoading, setNavigationBarTitle } from "@tarojs/taro";
import { loadLandingPage } from "@request/index";
/**
 * @Components
 */
import Carousel1v5 from "@components/carousel/carousel-1v5.vue";
import DynamicCardList1v2 from "@components/list/dynamic-card-list-1v2.vue";

export default {
	name: "components-list",
	components: {
		Carousel1v5,
		DynamicCardList1v2
	},
	props: {
		options: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	setup(props) {
		const data = ref({});

		showLoading();
		loadLandingPage(props.options.url)
			.then((res) => {
				hideLoading();
				data.value = res.data;

				setNavigationBarTitle({
					title: res.data.title || "小海报"
				});
			})
			.catch((err) => {
				hideLoading();
				console.log(err);
			});

		return {
			data
		};
	}
};
</script>

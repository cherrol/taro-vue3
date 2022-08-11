<template>
	<view class="carousel-1v5" :class="classes">
		<swiper
			:style="{ height: '200px' }"
			:circular="data.sliders.params.loop"
			:autoplay="data.sliders.params.autoplay"
			:interval="data.sliders.params.interval"
			:indicator-dots="data.sliders.params.indicator"
			:indicator-color="data.sliders.params.indicatorColor"
			:indicator-active-color="data.sliders.params.indicatorActiveColor"
		>
			<swiper-item
				v-for="({ img, link }, key) in data.sliders.elements"
				:key="key"
				class="h-full w-full"
			>
				<view class="w-full h-full relative">
					<image
						class="w-full h-full rounded-xl"
						mode="aspectFill"
						:src="imgUrlFix(img.src)"
						:alt="img.alt"
					/>

					<text
						class="absolute inset-x-0 bottom-0 text-white p-sm text-shadow-dark text-large font-bold z-1"
					>
						{{ link.label }}
					</text>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
import { Swiper, SwiperItem, Image } from "@nutui/nutui-taro";
import { imageUrlFix } from "@utils/index";

export default {
	name: "carousel-1v5",
	components: {
		"nut-swiper": Swiper,
		"nut-swiperitem": SwiperItem,
		"nut-image": Image
	},
	props: {
		data: {
			type: Object,
			default() {
				return {};
			}
		},
		classes: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	setup() {
		return {
			imageUrlFix
		};
	}
};
</script>

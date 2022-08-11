import { defineStore } from "pinia";
import { setStorageSync, getStorageSync } from "@tarojs/taro";

export const useUserStore = defineStore("user", {
	state() {
		return {
			token: null,
			cookie: null,
			profile: null
		};
	},
	actions: {
		setToken(token) {
			setStorageSync("token", token);
			this.token = token;
		},
		setCookie(cookie) {
			setStorageSync("cookie", cookie);
			this.cookie = cookie;
		},
		setProfile(profile) {
			setStorageSync("profile", profile);
			this.profile = profile;
		}
	},
	getters: {
		getToken(state) {
			return state.token || getStorageSync("token");
		},
		getCookie(state) {
			return state.cookie || getStorageSync("cookie");
		},
		getProfile(state) {
			return state.profile || getStorageSync("profile");
		},
		getRole(state) {
			if (state.role) return state.role;

			const profile = state.getProfile;
			const { roles } = profile;

			return roles.some((role) => role.id === "lawyer")
				? roles.filter((role) => role.id === "lawyer").map((role) => role.title)[0]
				: roles.filter((role) => role.id === "authenticated").map((role) => role.title)[0];
		}
	}
});

export default useUserStore;

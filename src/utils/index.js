import { REQUEST_BASE_URL } from "./config";

export { dateFormat } from "./date";
export { gotoPage } from "./router";

export function imageUrlFix(url) {
	return url.startsWith("http") ? url : REQUEST_BASE_URL + url;
}

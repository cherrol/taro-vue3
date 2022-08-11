/**
 * @微信相关的方法
 */
export function showLoading() {
	wx.showLoading();
}

export function hideLoading() {
	wx.hideLoading();
}

export function getLocation() {
	return new Promise((resolve, reject) => {
		wx.getLocation({
			type: "wgs84",
			success(res) {
				/**
				 * @const { latitude, longitude, speed, accuracy } = res;
				 * @latitude number	纬度，范围为 -90~90，负数表示南纬
				 * @longitude number	经度，范围为 -180~180，负数表示西经
				 * @speed number	速度，单位 m/s
				 * @accuracy number	位置的精确度，反应与真实位置之间的接近程度，可以理解成10即与真实位置相差10m，越小越精确
				 */
				resolve(res);
			},
			fail(err) {
				reject(err);
			}
		});
	});
}

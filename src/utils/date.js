export function dateFormat(date, rules = "Y-m-d H:i:s") {
	const currentDate = date ? new Date(date) : new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1;
	const day = currentDate.getDate();
	const hour = currentDate.getHours();
	const minute = currentDate.getMinutes();
	const seconds = currentDate.getSeconds();
	const week = currentDate.getDay();

	return rules
		.replace("Y", year)
		.replace("m", month >= 10 ? month : `0${month}`)
		.replace("d", day >= 10 ? day : `0${day}`)
		.replace("H", hour >= 10 ? hour : `0${hour}`)
		.replace("i", minute >= 10 ? minute : `0${minute}`)
		.replace("s", seconds >= 10 ? seconds : `0${seconds}`)
		.replace("D", week);
}

export default {
	dateFormat
};

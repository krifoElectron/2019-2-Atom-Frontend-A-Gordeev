export function convertDateToTime(date) {
	const normDate = new Date(Date.parse(date) ); // - 3600 * 3 * 1000
	const hours = normDate.getHours();
	const minutes = normDate.getMinutes();

	return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

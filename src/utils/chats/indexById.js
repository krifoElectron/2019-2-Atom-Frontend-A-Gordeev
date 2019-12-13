export function getIndexByChathId(chatId, chats) {
	return chats.findIndex((el) => el.id === chatId);
}

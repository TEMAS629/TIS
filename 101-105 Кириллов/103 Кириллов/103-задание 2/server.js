export default {
	'/handler/': function({get}) {
		let arr = ["Hi", "bye", 3]
		return arr[get.num];
	}
}
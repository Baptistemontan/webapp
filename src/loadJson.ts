import {Handler} from "./types"

// Json loading and parsing
export default function LoadJson(path:string, callback:Handler<any>) {
	fetch(path)
	.then(response => {
		return response.json()
	}, reason => {
		console.log(reason);
	})
	.then((myJson) => {
		callback(myJson)
	})
}
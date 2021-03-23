import {Handler} from "./types"

// Json loading and parsing
export default function LoadJson(path:string, callback:Handler<any>) {
	fetch(path)
	.then(response => response.json())
	.then((myJson) => callback(myJson))
}
import {Handler} from "./types"

// Json loading and parsing
export function LoadJson(path:string, callback:Handler<any>) {
	fetch(path)
	.then(response => {
		return response.json()
	}, reason => {
		console.log(reason);
	})
	.then(myJson => {
		callback(myJson)
	}, err => {
		console.log(err);
	})
}

export function timestampToDateStr(timestamp:number) {
	const now = new Date(timestamp);
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    return dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
}
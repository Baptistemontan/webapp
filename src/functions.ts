import {Handler, DriverEvent, CompFunc } from "./types"

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

export function driverEventTimeComp(a:DriverEvent, b:DriverEvent) {
	return b.eventTime - a.eventTime;
}

function driverEventPosComp(a:DriverEvent, b:DriverEvent) {
	return a.pos.lat === b.pos.lat && a.pos.lng === b.pos.lng;
}

export function driverEventPosFilter(val:DriverEvent, index:number, self:DriverEvent[]) {
	return !index || !driverEventPosComp(val, self[index - 1]);
}

export function driverEventRouteIdComp(a:DriverEvent, b:DriverEvent) {
	return b.routeId - a.routeId;
}

export function driverEventRouteNameComp(a:DriverEvent, b:DriverEvent) {
	return b.routeName.localeCompare(a.routeName);
}

export function driverEventSpeedComp(a:DriverEvent, b:DriverEvent) {
	return b.speed - a.speed;
}

export function driverEventTypeComp(a:DriverEvent, b:DriverEvent) {
	return b.eventType.localeCompare(a.eventType);
}

export function driverEventCongestionLvlComp(a:DriverEvent, b:DriverEvent) {
	return b.congestionLevel - a.congestionLevel;
}

export function compWay(foo:CompFunc, reversed:boolean) {
	const bar:CompFunc = (a,b) => (reversed ? -1 : 1) * foo(a,b);
	return bar;
}
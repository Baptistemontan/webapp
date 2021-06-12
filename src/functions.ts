export function fetchAPI(URL:string, callback:(data:any) => void, errorCb:(err:any) => void) {
	fetch(URL)
	.then(response => {
		return response.json()
	}, errorCb)
	.then(callback, errorCb);
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

export function driverEventWindyComp(a:DriverEvent, b:DriverEvent) {
	if(a.windy === b.windy) return 0;
	if(a.windy) return -1;
	return 1;
}

export function driverEventRainyComp(a:DriverEvent, b:DriverEvent) {
	if(a.rainy === b.rainy) return 0;
	if(a.rainy) return -1;
	return 1;
}

export function driverEventFoggyComp(a:DriverEvent, b:DriverEvent) {
	if(a.foggy === b.foggy) return 0;
	if(a.foggy) return -1;
	return 1;
}

export function compWay<T>(foo:CompFunc<T>, reversed:boolean) {
	const bar:CompFunc<T> = (a,b) => (reversed ? -1 : 1) * foo(a,b);
	return bar;
}

export const DRIVER_API_URL = "https://pst-2021-server.herokuapp.com"
declare interface Position {
    lat:number,
    lng:number,
}

declare interface DriverEvent {
    driverId: number,
    eventTime:number,
    routeId:number,
    routeName:string,
    pos:Position,
    speed:number,
    eventType:string,
    foggy:boolean,
    rainy:boolean,
    windy:boolean,
    congestionLevel:number
}

declare interface Driver {
    truckId:number,
    driverId:number,
    driverName:string
    lastPos:Position
}

declare type Handler<Type> = (arg:Type) => void
declare type Handler2<Type1, Type2> = (arg1: Type1, arg2:Type2) => void
declare type CompFunc<T> = (a:T, b:T) => number;
export declare interface Position {
    lat:number,
    lng:number,
}

export declare interface DriverEvent {
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

export declare interface Driver {
    truckId:number,
    driverId:number,
    driverName:string,
    events:DriverEvent[]
}

export declare type Handler<Type> = (arg:Type) => void
export declare type Handler2<Type1, Type2> = (arg1: Type1, arg2:Type2) => void
export declare type CompFunc = (a:DriverEvent, b:DriverEvent) => number;
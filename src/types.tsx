export interface position {
    lat:number,
    lng:number,
}

export interface Driver {
    driverName:string,
    active:boolean,
    eventTime:Date,
    truckId:number,
    routeId:number,
    position:position,
    speed:number,
    eventType:string,
    foggy:boolean,
    rainy:boolean,
    windy:boolean,
    congestionLevel:number
}

export type Handler<Type> = (arg:Type) => void
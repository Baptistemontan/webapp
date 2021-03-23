export interface Driver {
    name:string,
    active:boolean
}

export type Handler<Type> = (arg:Type) => void
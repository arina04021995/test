export interface widget {
    properties: {
        borderStyle?:borderStyle,
        borderWidth?: number,
        backgroudColor?:backgroudColor,
        width?: width,
        url?: string,
        text?: string,
        city?: city
    },
    display: {
        borderStyle?:boolean,
        borderWidth?: boolean,
        backgroudColor?:boolean,
        width?: boolean,
        url?: boolean,
        text?: boolean,
        city?: boolean
    },
    uuid: string,
    type: types
}

export enum borderStyle {
    dotted ='dotted',
    dashed = 'dashed',
    solid = 'solid',
}

export enum backgroudColor {
    blue = '3f51b5',
    yellow = 'f1c411',
    white = 'ffffff',
    lightGray = 'dddddd',
}

export enum width {
    full = '100%',
    half = '80%',
}

export enum types {
    block = 'block',
    weather = 'weather',
    image = 'image',
    button = 'button'
}

export enum city {
    Moscow = '18171',
    Tyumen = '17856',
}
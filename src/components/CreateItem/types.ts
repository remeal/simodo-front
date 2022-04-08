export interface IField {
    type: 'text' | 'number' | 'checkbox',
    name: string;
    value: string;
}

export interface IItem {
    id?: IField,
    name: IField,
    price: IField,
    count: IField,
}
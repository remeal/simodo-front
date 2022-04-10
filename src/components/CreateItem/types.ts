export interface IField {
    type: 'text' | 'number' | 'checkbox' | 'hidden',
    name: string;
    value: string;
}

export interface IItem {
    id?: IField,
    name: IField,
    price: IField,
    count: IField,
}
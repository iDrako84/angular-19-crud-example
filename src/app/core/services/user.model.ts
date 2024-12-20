import { GenderEnum } from "./gender.enum";

export class UserModel {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public gender: GenderEnum,
        public age: number,
        public address: string,
        public country: string,
        public zip: string,
        public email: string,
        public telephone: string,
    ) {}
}

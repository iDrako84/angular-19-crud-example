import { GenderEnum } from "../../core/services/gender.enum";

export class GenderModel {
    constructor(
        public key: GenderEnum,
        public value: string
    ) {}
}
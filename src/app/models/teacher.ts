import { Student } from "./student";

export class teacher {
    constructor(
        public Id: string,
        public Name: string,
        public Class: Student[]
    ) { }
}
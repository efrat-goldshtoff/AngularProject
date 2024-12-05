import { esubject } from "./esubject";

export class courses {
    constructor(
        public IdCourse: string,
        public NameCourse: string,
        public Subject: esubject
    ) { }
}
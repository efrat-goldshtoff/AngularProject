export class Student {
    constructor(
        public Id: number,
        public Name: string,
        public Address: string,
        public Phone: string,
        public AvgMark: number,
        public IsActive: boolean = true,
        public DepartureDate?: Date,
        public IsPay?: boolean) { }
}
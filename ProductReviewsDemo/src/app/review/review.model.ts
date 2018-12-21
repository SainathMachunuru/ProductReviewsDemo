export class Review {
    public title: string;
    public format: string;
    public date: Date;
    public rating: any[];
    public description: string;

    constructor(title: string, format: string, date: Date, rating: any[], description: string) {
        this.title = title;
        this.format = format;
        this.date = date;
        this.rating = rating;
        this.description = description;

    }


}
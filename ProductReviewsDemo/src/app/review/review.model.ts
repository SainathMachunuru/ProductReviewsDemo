export class Review {
    public title: string;
    public format: string;
    public date: Date;
    public rating: any[];
    public description: string;
    public helpfulCount = 0;
    public isHelpfulClicked = false;

    constructor(title: string, format: string, date: Date, rating: any[], 
        description: string, helpfulCount: number,isHelpfulClicked:boolean) {
        this.title = title;
        this.format = format;
        this.date = date;
        this.rating = rating;
        this.description = description;
        this.helpfulCount = helpfulCount;
        this.isHelpfulClicked = isHelpfulClicked;

    }


}
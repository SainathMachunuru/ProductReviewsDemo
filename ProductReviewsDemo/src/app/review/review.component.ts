import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { ProductReviewService } from '../shared/product-review-service';
import { Review } from './review.model';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @ViewChild('f') private reviewForm: NgForm;
  private id: number;
  private review: Review;

  private starList: boolean[] = [true, true, true, true, true];
  private rating: number;

  constructor(private router: Router,
    private route: ActivatedRoute,
  private productReviewService: ProductReviewService) { }

  public ngOnInit() {
  }
  public onSubmit(form: NgForm) {
   // console.log("hello");
   const value = form.value;
   const review = new Review(value.title, 'computer', new Date(), this.starList, value.description, 0 , false);
    console.log(review);
    this.productReviewService.onAddReviewToProduct(review);
    this.router.navigate(['product']);
  }
public setStar(data: number) {
      this.rating = data + 1;
      for (let i = 0; i <= 4; i++) {
        if (i <= data) {
          this.starList[i] = false;
        } else {
          this.starList[i] = true;
        }
     }
 }

}

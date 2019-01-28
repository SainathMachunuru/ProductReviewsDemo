import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';
import { Review } from '../review/review.model';
import { ProductReviewService } from '../shared/product-review-service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private reviews: Review[];
  private subscription: Subscription;
  private rating: number;
  private isClicked = false;
  constructor(private productReviewService: ProductReviewService) { }

  public ngOnInit() {
    this.subscription = this.productReviewService.reviewsChanged
      .subscribe(
        (reviews: Review[]) => {
          this.reviews = reviews;
        }
      );
   this.reviews = this.productReviewService.getReviews();
  // console.log(this.reviews);
  }

  public setStarTable(record: Review, data: number) {
    this.rating = data + 1;
   const tableList = this.reviews.find(function(obj) { return obj === record; });
   console.log(tableList);
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        tableList.rating[i] = false;
      } else {
        tableList.rating[i] = true;
      }
    }
  }
  public onHelpfulClick(review: Review) {
    this.isClicked = true;
    review.isHelpfulClicked = true;
    review.helpfulCount++;
    console.log(review.helpfulCount);
  }

}

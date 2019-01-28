import { Subject } from 'rxjs';
import { Injectable } from '../../../node_modules/@angular/core';
import { Review } from '../review/review.model';

@Injectable()
export class ProductReviewService {
    public reviewsChanged = new Subject<Review[]>();
    public productReviews: Review[] = [
        new Review(
          'This is fabulous',
          'computer',
          new Date(),
          [false, false, false, false, false],
          'sample description1',
          10,
          false
          ),
          new Review(
          'This is avarage',
          'computer',
          new Date(),
          [false, false, true, true, true],
          'sample description2',
          15,
          false
          )
      ];

      public onAddReviewToProduct(review: Review) {
          this.productReviews.push(review);
          this.reviewsChanged.next(this.productReviews.slice());
      }
      public getReviews() {
          return this.productReviews.slice();
      }

}

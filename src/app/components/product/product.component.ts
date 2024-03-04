import {Component, Input, OnInit} from '@angular/core'
import {IProduct} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product: IProduct

  details = false
  toggleDetail = () => {
    this.details = !this.details
  }
}

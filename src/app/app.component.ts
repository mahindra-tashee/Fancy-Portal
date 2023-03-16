import { Component } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fancy-portal';
  products2: any=[];

  statuses: any=[];

  clonedProducts: { [s: string]: any; } = {};

  constructor(private stateService:StateService){

  }

  ngOnInit() {
    this.getAllState();
  }

  getAllState(){
    this.stateService.getState().subscribe((data:any)=>{
      this.products2=data
    })
  }

  onRowEditInit(product: any) {
    this.clonedProducts[product.id] = {...product};
}

onRowEditSave(product: any) {
    if (product.price > 0) {
        delete this.clonedProducts[product.id];
    }
    else {
        alert("Invalid Demand")
    }
}

onRowEditCancel(product: any, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
}
}

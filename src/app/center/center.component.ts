import { Component, OnInit } from '@angular/core';
import {CenterService} from './center.service'
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
  providers:[CenterService]
})
export class CenterComponent implements OnInit {

   // data supplied to the data table
     private data: any[];
     // array of currently selected entities in the data table
     selectedEntities: any[];
     // function to handle data/entities selected/deselected in the table 
     public setSelectedEntities($event: any) {
        this.selectedEntities = $event;
    }
  	constructor(private _centerService : CenterService) { }

  	ngOnInit() {
      this.allCenter();
  	}

    allCenter(){
      this._centerService.getCenter().subscribe(res => {
        if(!res){
          console.log("error")
        }else {
          this.data = res.data;
          console.log("res",res)
          console.log("data",res.data)
        }
      })
    }

}

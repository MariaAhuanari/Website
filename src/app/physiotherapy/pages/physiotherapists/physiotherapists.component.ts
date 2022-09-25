import { Component, OnInit } from '@angular/core';
import {Physiotherapist} from "../../model/physiotherapist";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";

@Component({
  selector: 'app-physiotherapists',
  templateUrl: './physiotherapists.component.html',
  styleUrls: ['./physiotherapists.component.css']
})
export class PhysiotherapistsComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[];

  constructor(private physiotherapistsService: PhysiotherapistsService) { }

  ngOnInit(): void {
    this.getAllPhysiotherapists()
  }

  getAllPhysiotherapists(){
    this.physiotherapistsService.getAllPhysiotherapists().subscribe((response:any)=>{

      this.physiotherapists=response;
    })
  }

  getPhysiotherapistByQuery(name: string){
    if(name?.length) {
      this.physiotherapistsService.getPhysiotherapistByName(name).subscribe((response: any)=> {
          this.physiotherapists = response;
        }
      )}else{
      this.getAllPhysiotherapists();
    }
  }


}

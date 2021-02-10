import { Component, OnInit } from '@angular/core';
import {LocalService} from './../local.service'

@Component({
  selector: 'app-employee-dropdown',
  templateUrl: './employee-dropdown.component.html',
  styleUrls: ['./employee-dropdown.component.css']
})
export class EmployeeDropdownComponent implements OnInit {

  name:any[]= []
  cities4:any = [];
  selectedCityId:any
  selectedLevel:any
  constructor(private LocalService : LocalService) { }

  ngOnInit(): void {
    this.list_employee()

  }
  list_employee(){
    this.LocalService.get_list().subscribe(res=>{
      this.name = res['data']
      this.name.sort((a,b) => 0 - (b > a ? -1 : 1));
console.log(this.name)
      
    })
  }
  selected(event:any){
    this.LocalService.get_list().subscribe(res=>{
      debugger
      this.name.sort();
      this.name = res['data']
      this.selectedLevel = event.target.value
    })      
  }

}

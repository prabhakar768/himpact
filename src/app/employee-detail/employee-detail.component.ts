import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router'
import {LocalService} from './../local.service'
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id:any
  news:[] = []
  image
  constructor(private route: ActivatedRoute,private LocalService : LocalService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
  });
  this.get_user();
  }
  get_user(){

    this.LocalService.get_user(this.id).subscribe(res=>{
      this.news=res['data'][this.id - 1]
      this.image = this.news['avatar']
      console.log(this.news)
    })
  }

}

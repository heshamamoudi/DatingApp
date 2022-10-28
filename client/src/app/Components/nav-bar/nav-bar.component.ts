import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
model: any = {}

  constructor(public accountService:AccountService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }

login(){
  this.accountService.login(this.model).subscribe(res => {
    this.router.navigateByUrl('/members');
  },error =>{
    console.log(error)
    this.toastr.error(error.error);
  })
}
logout(){
  this.accountService.logout();
  this.router.navigateByUrl('/');
}

}

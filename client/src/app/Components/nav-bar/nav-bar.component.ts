import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
model: any = {}

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
    
  }

login(){
  this.accountService.login(this.model).subscribe(res => {
    console.log(res)
  },error =>{
    console.log(error)
  })
}
logout(){
  this.accountService.logout();
}

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {}
  @Output() cancelRegister = new EventEmitter();
  constructor(private accountService: AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){

this.accountService.register(this.model).subscribe(res =>{
  this.cancel();
},err =>{
  console.log(err)
  this.toastr.error(err.error);
})
  }
  cancel(){
    this.cancelRegister.emit(false);

  }
}

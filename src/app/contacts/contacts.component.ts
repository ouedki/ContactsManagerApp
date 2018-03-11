import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import "rxjs/add/operator/map"
import {ContactService} from '../service/ContactService';
import {Router} from '@angular/router';
import {Contact} from '../models/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  dataRecieved:any;
  keyWord:String='';
  currentPage:number=0;
  size:number=5;
  pages:any;

  constructor(private contactService:ContactService, private router:Router) { }

  ngOnInit() {

  }

  doSearch(){
    this.contactService.getContacts(this.keyWord, this.currentPage,this.size).subscribe(data=>{
      this.dataRecieved=data;
      this.pages=new Array(this.dataRecieved.totalPages);
    }, err=>
      console.log(err));
  }

  findPage(){
    this.doSearch();
  }

  goToPage(i:number) {
    this.currentPage=i;
    this.doSearch();
  }

  editContact(id:number){
    this.router.navigate(["edit-contact", id])
  }

  DeleteContact(c:Contact){

    let confirm = window.confirm("Are you Sure you want to delete the contact?");
    if (confirm==true){
      this.contactService.DeleteContact(c.id)
        .subscribe(data=>{
          this.dataRecieved.content.splice(
            this.dataRecieved.content.indexOf(c),1);


        }, err=>{
          console.log(err)
        })
    }

  }
}

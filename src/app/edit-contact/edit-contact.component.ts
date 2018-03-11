import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/model.contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../service/ContactService';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:any=new Contact();
  mode:number=1;
  contactId:number;

  constructor(private activatedRoute:ActivatedRoute, private contactService:ContactService, private router:Router) {
    this.contactId=activatedRoute.snapshot.params['id'];
  }


  ngOnInit() {
    this.contactService.getContact(this.contactId)
      .subscribe(data=>{
        this.contact=data;
      }, err=>{
        console.log(err)
      });
  }

  editContact() {
    this.contactService.UpdateContact(this.contact)
      .subscribe(data=>{
        console.log(data);
        alert("Contact Successfully Updated");
        this.mode=2;
      })
}

  goToSave(){
    this.router.navigate(['contacts'])
    this.contact=new Contact();
  }

}

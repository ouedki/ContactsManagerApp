import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/model.contact';
import {ContactService} from '../service/ContactService';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact:Contact= new Contact();
  mode:number=1;
  newContact;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }

  onSaveContact(contact:Contact){
    this.contactService.saveContact(contact)
      .subscribe(data=>{
        this.newContact=data;
        this.mode=2;
          console.log(data)},
        err=>{
          console.log(err)
        });
  }

  goToSave(){
    this.mode=1;
    this.contact=new Contact();
  }

}

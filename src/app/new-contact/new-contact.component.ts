import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/model.contact';
import {ContactService} from '../service/ContactService';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }

  onSaveContact(contact:Contact){
    this.contactService.saveContact(contact)
      .subscribe(data=>{
      console.log(data)},
      err=>{
        console.log(err)
      });
  }
}

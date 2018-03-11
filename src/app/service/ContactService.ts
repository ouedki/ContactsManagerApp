import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Contact} from '../models/model.contact';

@Injectable()
export class ContactService {

  constructor(private http:HttpClient){}

  getContacts(KeyWord:String, page:number, size:number){
    return this.http.get("http://localhost:8080/search?keyWord="+KeyWord+"&page="+page+"&size="+size)
  }

  getContact(id:number){
    return this.http.get("http://localhost:8080/contacts/"+id)
  }

  saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/contacts", contact)
  }

  UpdateContact(contact:Contact){
    return this.http.put("http://localhost:8080/contacts/"+contact.id, contact)
  }

  DeleteContact(id:number){
    return this.http.delete("http://localhost:8080/contacts/"+id)
  }


}

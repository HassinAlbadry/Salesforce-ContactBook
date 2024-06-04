/* c/myModal.js */
import { LightningElement, wire, api, track } from "lwc";

import LightningModal from 'lightning/modal';

import editContact from "@salesforce/apex/editContactFields.editContact";

export default class MyModal extends LightningModal {
    @api content;
    @api contentId;
    @api contentName;
    contacts;
    error;

    @track titleVal;
    @track phoneVal;
    @track emailVal;

   
    connectedCallback() {

        this.contentId= this.content[0];
        this.contentName =this.content[1];

      

    }
    get  getContentName(){
      return this.contentName;
   }
    
      handleTitleInput(event){
          this.titleVal=event.target.value;
          
      }
      handlePhoneInput(event){
        this.phoneVal=event.target.value;
      }
      handleEmailInput(event){
        this.emailVal=event.target.value;      
      }

    handleAdd() {

        this.close('okay');
       console.log(this.contentId);
       console.log(this.contentName);

        editContact({ Id: this.contentId, title:this.titleVal, phone:this.phoneVal, email:this.emailVal})
        .then((result) => {
          this.contacts = result;
        })
        .catch((error) => {
          this.error = error;
        });
        
    }



}
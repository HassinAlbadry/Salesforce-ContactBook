import { LightningElement, track, wire } from 'lwc';
import searchforContacts from '@salesforce/apex/ContactSearch1.searchForContacts';
import searchforAcontact from '@salesforce/apex/ContactSearch2.searchforAcontact';
import MyModal from 'c/myModal';
import locationModal from 'c/locationModal';


export default class searchContacts extends LightningElement {
    @track inputValue ='';
    @track matchingContacts = [];
    @track searchSpecificName =[];
    @track passContactName;
    @track passContactId;

    locationId; 

    


    async handleLocation(event) {

      this.locationId = event.target.value;

      const result = await locationModal.open({
          // `label` is not included here in this example.
          // it is set on lightning-modal-header instead
          size: 'large',
          description: 'Accessible description of modal\'s purpose',
          content: this.locationId,
      });
      // if modal closed with X button, promise returns result = 'undefined'
      // if modal closed with OK button, promise returns result = 'okay'
      //console.log(result);
  }





     handleEnter(event){
      if(event.keyCode===13){
        this.handleClick();
      }

     }
    connectedCallback() {
       
       searchforContacts()
       .then((result) => {

           this.matchingContacts = result;
         })
         .catch((error) => {
           this.error = error;
         });
    }

    handleChange(event) {
        this.inputValue = event.target.value;
    }


    
    handleClick() {
        if(this.inputValue!=''){
           this.matchingContacts= false;
        searchforAcontact({inputVal:this.inputValue})
        .then((result) => {

            this.searchSpecificName = result;
          })
          .catch((error) => {
            this.error = error;
          });
        }

        if(this.inputValue ==''){
            this.searchSpecificName=false;
            searchforContacts()
            .then((result) => {
     
                this.matchingContacts = result;
              })
              .catch((error) => {
                this.error = error;
              });

        }
        
    }

    async handleClick1(event) {
     
// Creates the event with the contact ID data.
       this.passContactId = event.target.value;
       this.passContactName = event.target.name;
        const result = await MyModal.open({
            // `label` is not included here in this example.
            // it is set on lightning-modal-header instead
            size: 'small',
            description: 'Accessible description of modal\'s purpose',
            content:[
                
                this.passContactId,this.passContactName
            ]
        });
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
    }


   
    
    
}
import { api, track } from 'lwc';
import LightningModal from 'lightning/modal';
import searchforLocation from '@salesforce/apex/ContactLocation.contactLocationPostal';




export default class MyModal extends LightningModal {
    @api content;
    returnedZip;

    @track mapMarkers = [
        {
            location: {
                
                PostalCode : '48322',
               
            },
            value: 'location001',
            title: 'Contact Location',
            description:
                'this is the location of the contact you selected', 
            icon: 'standard:account',
        },
    ];
    
    zoomLevel = 10;

    handleOkay() {
        this.close('okay');
    }


    connectedCallback() {
        searchforLocation({inputVal:this.content})
        .then((result) => {

           this.returnedZip = result[0].MailingPostalCode;
           console.log(this.returnedZip,typeof this.returnedZip);
           this.mapMarkers[0].location.PostalCode=  result[0].MailingPostalCode;
           console.log(this.mapMarkers[0].location.PostalCode);
          })
          .catch((error) => {
            this.error = error;
          });



    }
       
}
public class ContactSearch1 {
@AuraEnabled
    public static List<Contact> searchForContacts() {
       return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
           
        ];
        
        }
}
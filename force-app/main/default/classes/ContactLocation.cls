public class ContactLocation {
@AuraEnabled
    public static List<Contact> contactLocationPostal(String inputVal ) {
        
        
        
        List<Contact> searchPostal=[
        
            SELECT MailingPostalCode
           
            
            FROM Contact WHERE Id = :inputVal
           
        ];
        
List<Contact> finall=searchPostal;
        System.debug(finall);
        return finall;
        
        
        }
}
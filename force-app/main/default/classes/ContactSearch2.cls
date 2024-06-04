public class ContactSearch2 {
@AuraEnabled
    public static List<Contact> searchforAcontact(String inputVal ) {
        
        
        String inputValFinal= inputVal+'%';
        
        List<Contact> searchName=[
        
            SELECT Id, Name, Title, Phone, Email
            FROM Contact WHERE Name LIKE :inputValFinal
           
        ];
        System.debug(searchName);
        return searchName;
        
        
        }
}
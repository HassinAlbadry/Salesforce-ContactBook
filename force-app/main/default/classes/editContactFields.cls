public class editContactFields {
@AuraEnabled
    public static Contact editContact(String Id,String title,String phone, String email) {
               
    
        Contact contactSrch = [SELECT Title,Phone,Email  FROM Contact WHERE Id =:Id];
        
        if(!String.isBlank(title)){
        contactSrch.Title= title;
        }
        if(!String.isBlank(phone)){
        contactSrch.Phone=phone;
        }
        
        if(!String.isBlank(email)){
        contactSrch.Email=email;
        }
        
        
        update contactSrch;
                             
        return contactSrch;
    }
}
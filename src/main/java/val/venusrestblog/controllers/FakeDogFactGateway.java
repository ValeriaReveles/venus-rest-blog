package val.venusrestblog.controllers;

public class FakeDogFactGateway {
    public static String fetchDogFactById(long id){
        //fetch the particular dog fact with matching id from database
        switch((int) id) {
            case 1:
                return "Dogs don't feel guilty";
            case 2:
                return "Doggos sense of smell is powerful";
            case 3:
                return "Doggos are loyal";
            default:
                return "Unknown fact ID entered";
        }
    }
}

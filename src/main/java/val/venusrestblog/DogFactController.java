package val.venusrestblog;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class DogFactController {
    @GetMapping("/dogo")
    @ResponseBody
    public String fetchDogFact(){
        return "Dogos are the bestest bois.";
    }
    @GetMapping("/dogo/{id}")
    @ResponseBody
    public String fetchSingleDogFact(@PathVariable long id){
        return FakeDogFactGateway.fetchDogFactById(id);

    }
}

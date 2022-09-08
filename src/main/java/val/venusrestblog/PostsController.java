package val.venusrestblog;
//my imports:
import org.springframework.web.bind.annotation.PathVariable;
import val.venusrestblog.data.Post;

import java.util.ArrayList;
import java.util.List;

//spring imports:
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")

public class PostsController {

    private List<Post> posts = new ArrayList<>();

    @GetMapping("/")
    public List<Post> fetchPosts(){
        //Get post and return:
        //Working with long instead of int for ID:
        List<Post> posts = new ArrayList<>();
        posts.add(new Post(1L, "Post 1", "This is Post 1"));
        posts.add(new Post(2L, "Post 2", "This is Post 2"));
        return posts;
    }

    @GetMapping("/{id}")
        //Do not forget @PathVariable when fetching:
    public Post fetchPostById(@PathVariable long id){
        //Get post and return:
        //Working with long instead of int for ID:
        switch((int) id){
            case 1:
                return new Post(1L, "Post 1", "This is Post 1");
            case 2:
                return new Post(2L, "Post 2", "This is Post 2");
            default:
                //respond with 404:
                throw new RuntimeException("Resource not found");
        }
    }
}

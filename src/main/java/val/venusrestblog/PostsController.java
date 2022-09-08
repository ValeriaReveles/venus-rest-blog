package val.venusrestblog;

import org.springframework.web.bind.annotation.*;
import val.venusrestblog.data.Post;
import java.util.ArrayList;
import java.util.List;



@RestController
@RequestMapping(value = "/api/posts", produces = "application/json")
public class PostsController {

    private List<Post> posts = new ArrayList<>();
    private long nextId = 1;

    private Post findPostById(long id) {
        for (Post post : posts) {
            if (post.getId() == id) {
                return post;
            }
        } //else return null if you don't find it:
        return null;
    }
//    @GetMapping("/") is short hand for RequestMapping. Can use both.
//   @GetMapping
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Post> fetchPosts() {

        return posts;
    }


    @GetMapping("/{id}")
    //Do not forget @PathVariable when fetching:
    public Post fetchPostById(@PathVariable long id) {
        //search through the list of posts and return the post that matches the given id:
        Post post = findPostById(id);
        if (post == null) {
            //what to do if we don't find it
            throw new RuntimeException("I am not sure what you are asking for");
        }
        //otherwise return the post:
        return post;
    }

    @PostMapping("")
    private void createPost(@RequestBody Post newPost) {
//        System.out.println(newPost);
        newPost.setId(nextId);
        nextId++;
        posts.add(newPost);
    }

    @DeleteMapping("/{id}")
    public void deletePostById(@PathVariable long id) {
        //search through list and delete post with given ID.
        for (Post post : posts) {
            if (post.getId() == id) {
                //If we find post, delete:
                posts.remove(post);
                return;
            }
        }
        //what to do if we don't find it:
        throw new RuntimeException("I am not sure what you are asking for");
    }

    @PutMapping("/{id}")
    public void updatePost(@RequestBody Post updatedPost, @PathVariable long id) {
        //find ID of post to update in list:
        Post post = findPostById(id);
        if (post != null) {
            post = updatedPost;
            //change the found post to whatever is in updated post:
        }
        throw new RuntimeException("Post not found");
    }

}








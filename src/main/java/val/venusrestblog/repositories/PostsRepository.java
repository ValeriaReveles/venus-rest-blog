package val.venusrestblog.repositories;
//package docrob.venusrestblog.repository;

import val.venusrestblog.data.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository<Post, Long> {

}


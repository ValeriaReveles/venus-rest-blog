package val.venusrestblog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import val.venusrestblog.data.User;

public interface UsersRepository extends JpaRepository<User, Long> {
    User findByUserName(String userName);
    User findByEmail(String email);

//    @Query(nativeQuery = true)
//    List<UserFetchDTO> fetchUserDTOs();
}
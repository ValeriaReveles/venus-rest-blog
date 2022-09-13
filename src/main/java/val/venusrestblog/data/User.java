package val.venusrestblog.data;

import lombok.*;

import javax.management.relation.Role;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class User {
    private Long id;
    private String username;
    private String email;
    private String password;
    private LocalDate createdAt;
    private Role role;


}

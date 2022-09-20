package val.venusrestblog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import val.venusrestblog.data.Category;


public interface CategoriesRepository extends JpaRepository<Category, Long> {
    Category findByName(String name);
}
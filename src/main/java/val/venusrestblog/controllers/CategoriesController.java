package val.venusrestblog.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import val.venusrestblog.data.Category;
import val.venusrestblog.repositories.CategoriesRepository;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/categories", produces = "application/json")
public class CategoriesController {
    private CategoriesRepository categoriesRepository;

    @GetMapping("")
    private List<Category> fetchAllCategories() {
        return categoriesRepository.findAll();
    }

    @GetMapping("/search")
    private Category fetchPostsByCategory(@RequestParam String categoryName) {
        Category category = categoriesRepository.findByName(categoryName);
        if (category == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category" + categoryName + " not found");
        }
        return category;
    }
}


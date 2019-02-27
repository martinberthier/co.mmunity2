package co.mmunity2.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import co.mmunity2.domain.Category;
import co.mmunity2.domain.User;

public interface CategoryRepository  extends JpaRepository<Category, Integer>{

	Category findByName(String name);
	List<Category> findByUsersContains(User user);
	
}

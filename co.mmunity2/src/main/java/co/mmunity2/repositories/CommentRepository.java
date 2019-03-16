package co.mmunity2.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import co.mmunity2.domain.Category;
import co.mmunity2.domain.Comment;

public interface CommentRepository extends JpaRepository <Comment, Integer>{
	
//	Set<Comment> findByCategoryNameContainsIgnoreCase(String name);
	Set<Comment> findByCategory(Category category);
	
}

package co.mmunity2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.mmunity2.domain.Comment;

public interface CommentRepository extends JpaRepository <Comment, Integer>{

}

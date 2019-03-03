package co.mmunity2.converters;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Comment;
import co.mmunity2.dto.CommentDTO;



@Component
public class CommentEntityToDTO implements Converter<Comment, CommentDTO> {

	@Autowired
	private UserEntityToDTO userEntityToDTO;
	
	@Autowired
	private CategoryEntityToDTO categoryEntityToDTO;
	
	@Override
	public CommentDTO convert(Comment comment) {

		CommentDTO commentDTO = new CommentDTO();
		
		commentDTO.setContent(comment.getContent());
		
		if (comment.getId() != null) {
			commentDTO.setId(comment.getId().toString());
        }
		
        //commentDTO.setCategory(categoryEntityToDTO.convert(comment.getCategory()));
		
        commentDTO.setUser(userEntityToDTO.convert(comment.getUser()));
        
		return commentDTO;
	}

	public Set<CommentDTO> convertList(Set<Comment> comments) {
        Set<CommentDTO> commentDTOs = new HashSet<>();
        for (Comment comment : comments) {
            commentDTOs.add(convert(comment));
        }
        return commentDTOs;
	}
}

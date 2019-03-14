package co.mmunity2.converters;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Comment;
import co.mmunity2.dto.CommentDTO;

@Component
public class CommentDTOToEntity  implements Converter<CommentDTO, Comment>{

	@Autowired
	CategoryDTOToEntity categoryDTOToEntity;
	@Autowired
	UserDTOToEntity userDTOToEntity;
	
	@Override
	public Comment convert(CommentDTO commentDTO) {

		Comment comment = new Comment();
		
		comment.setContent(commentDTO.getContent());
		
		comment.setTag(commentDTO.getTag());
		
		if (commentDTO.getId() != null) {
            comment.setId(Integer.valueOf(commentDTO.getId()));
        }
		
//		comment.setCategory(categoryDTOToEntity.convert(commentDTO.getCategory()));
		
//		comment.setUser(userDTOToEntity.convert(commentDTO.getUser()));
		
		if (commentDTO.getUser() != null && commentDTO.getUser().getId() != null) {
			comment.setUser(userDTOToEntity.convert(commentDTO.getUser()));
		}
		
		if (commentDTO.getCategory() != null && commentDTO.getCategory().getId() != null) {
			comment.setCategory(categoryDTOToEntity.convert(commentDTO.getCategory()));
		}
		
		return comment;
	}

	public Set<Comment> convertList(Set<CommentDTO> commentDTOs) {
        Set<Comment> comments = new HashSet<>();
        for (CommentDTO commentDTO : commentDTOs) {
            comments.add(convert(commentDTO));
        }
        return comments;
	}
}

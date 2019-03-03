package co.mmunity2.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import co.mmunity2.converters.CommentDTOToEntity;
import co.mmunity2.converters.CommentEntityToDTO;
import co.mmunity2.domain.Comment;
import co.mmunity2.dto.CommentDTO;
import co.mmunity2.repositories.CommentRepository;

public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentRepository commentRepository;

	@Autowired
	private CommentEntityToDTO commentEntityToDTO;
	
	@Autowired
	private CommentDTOToEntity commentDTOToEntity;
	
	@Override
	public Set<CommentDTO> listAll() {
		Set<Comment> comments = new HashSet<>();
		commentRepository.findAll().forEach(comments::add);
		return commentEntityToDTO.convertList(comments);
	}

	@Override
	public CommentDTO getById(String id) {
		if ((id != null) && (!id.isEmpty()) && (commentRepository.existsById(Integer.valueOf(id)))) {
			return commentEntityToDTO.convert(commentRepository.findById(Integer.valueOf(id)).orElse(null));
		}
		return null;
	}

	@Override
	public CommentDTO saveOrUpdate(CommentDTO commentDTO) {
		Comment comment = commentRepository.save(commentDTOToEntity.convert(commentDTO));
		return commentEntityToDTO.convert(comment);
	}

	@Override
	public void delete(String id) {
		 if ((id != null) && (!id.isEmpty()) && (commentRepository.existsById(Integer.valueOf(id)))) {
			 commentRepository.deleteById(Integer.valueOf(id));
		 }
	}

}

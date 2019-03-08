package co.mmunity2.services;

import java.util.Set;

import co.mmunity2.dto.CommentDTO;

public interface CommentService {

	Set<CommentDTO> listAll();

	CommentDTO getById(String id);

	CommentDTO saveOrUpdate(CommentDTO comment);

    void delete(String id);
    
}

package co.mmunity2.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.mmunity2.converters.CommentDTOToEntity;
import co.mmunity2.dto.CommentDTO;
import co.mmunity2.repositories.CommentRepository;
import co.mmunity2.services.CommentService;

@CrossOrigin
@RestController
@RequestMapping(value = "/community")
public class CommentController {

	@Autowired
	private CommentService commentService;
	
	@RequestMapping(value = "/comments", method = RequestMethod.GET)
	public ResponseEntity<Object> listComments() {
		Set<CommentDTO> comments = commentService.listAll();
		return new ResponseEntity<>(comments, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/comments/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getComment(@PathVariable String id) {
		CommentDTO comment = commentService.getById(id);
		return new ResponseEntity<>(comment, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/comments", method = RequestMethod.POST)
	public ResponseEntity<Object> saveComment(@RequestBody CommentDTO commentDTO) {
		CommentDTO savedCommentDTO = null;
		if(commentDTO.getId() == null) {
			savedCommentDTO = commentService.saveOrUpdate(commentDTO);
		}
		return new ResponseEntity<>(savedCommentDTO, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/comments/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> modifyComment(@PathVariable String id, @RequestBody CommentDTO commentDTO) {
	
			commentDTO.setId(id);
			return new ResponseEntity<>(commentService.saveOrUpdate(commentDTO), HttpStatus.OK);
		

	}
	
	@RequestMapping(value = "/comments/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteComment(@PathVariable String id) {
		commentService.delete(id);
		return null;
	}
	
}

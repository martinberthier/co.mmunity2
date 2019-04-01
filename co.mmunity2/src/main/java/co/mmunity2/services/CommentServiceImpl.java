package co.mmunity2.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.mmunity2.converters.CategoryEntityToDTO;
import co.mmunity2.converters.CommentDTOToEntity;
import co.mmunity2.converters.CommentEntityToDTO;
import co.mmunity2.converters.UserDTOToEntity;
import co.mmunity2.converters.UserEntityToDTO;
import co.mmunity2.domain.Category;
import co.mmunity2.domain.Comment;
import co.mmunity2.domain.Role;
import co.mmunity2.domain.User;
import co.mmunity2.dto.CommentDTO;
import co.mmunity2.dto.UserDTO;
import co.mmunity2.repositories.CategoryRepository;
import co.mmunity2.repositories.CommentRepository;
import co.mmunity2.repositories.RoleRepository;
import co.mmunity2.repositories.UserRepository;

@Service
public class CommentServiceImpl implements CommentService {

	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private UserRepository users;
	
	@Autowired
	private CategoryRepository categories;
	
	@Autowired
	private RoleRepository roles;

	@Autowired
	private CommentEntityToDTO commentEntityToDTO;
	
	@Autowired
	private CommentDTOToEntity commentDTOToEntity;
	
	@Autowired
	private UserEntityToDTO userEntityToDTO;
	
	@Autowired
	private CategoryEntityToDTO categoryEntityToDTO;
	
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

	//ne fonctionne pas
//	@Override
//	public CommentDTO saveOrUpdate(CommentDTO commentDTO) {
//		Comment comment = commentRepository.save(commentDTOToEntity.convert(	commentDTO));
//		return commentEntityToDTO.convert(comment);
//	}
//	
	
	@Override
	public CommentDTO saveOrUpdate(CommentDTO commentDTO) {
		
//		commentRepository.save(commentDTOToEntity.convert(commentDTO));
		
		Integer idUser = Integer.valueOf((commentDTO.getUser()).getId());
		
		User user = (users.findById(idUser)).get();
			
		commentDTO.setUser(userEntityToDTO.convert(user));
		
		Integer idCategory = Integer.valueOf((commentDTO.getCategory()).getId());
			
		Category category = (categories.findById(idCategory).get());
			
		commentDTO.setCategory(categoryEntityToDTO.convert(category));
			
		
		
		// tentative de bricolage, mais ne résoud pas le pb
		Set<Role> rolesOfUser = user.getRoles();
		//tambouille
		//roles.save((rolesOfUser.findByName("regular")).get());
//		Role regular = (roles.findByName("regular"));
//		roles.save(regular);
//		rolesOfUser.add(regular);
//		user.setRoles(rolesOfUser);
		//
		List <Role> ArrayRoleOfUser = new ArrayList <Role>(rolesOfUser);
		roles.save(ArrayRoleOfUser.get(0));
		users.save(user);
		
		//ici, return un commentDTO avec user pas null
		// alors pourquoi est ce que le user devient null quand on save le comment ?
//		return commentDTO;

		//test du comment envoyé en bdd : return user null
//		Comment comment = commentDTOToEntity.convert(commentDTO);
//		return commentEntityToDTO.convert(comment);
		
		//c'est cette ligne qui pose pb : 
		//la méthode "commentRepository.save" renvoie :
		//org.hibernate.TransientPropertyValueException: 
		//object references an unsaved transient instance
		// - save the transient instance before flushing : 
		//co.mmunity2.domain.Comment.user -> co.mmunity2.domain.User
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

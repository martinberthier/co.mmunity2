package co.mmunity2.converters;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.User;
import co.mmunity2.dto.UserDTO;

@Component
public class UserEntityToDTO implements Converter<User, UserDTO> {

	@Autowired
	RoleEntityToDTO roleEntityToDTO;
	@Autowired
	CommentEntityToDTO commentEntityToDTO;
	
	@Override
	public UserDTO convert(User user) {
		
		UserDTO userDTO = new UserDTO();
		
		userDTO.setName(user.getName());
		
		userDTO.setLastname(user.getLastname());
		
		userDTO.setJob(user.getJob());
		
		userDTO.setEmail(user.getEmail());
		
		userDTO.setPassword(user.getPassword());
		
		userDTO.setActive(user.isActive());
		
		if (user.getId() != null) {
			userDTO.setId(user.getId().toString());
        }
		
//		userDTO.setComments(commentEntityToDTO.convertList(user.getComments()));
		
		userDTO.setRoles(roleEntityToDTO.convertList(user.getRoles()));
		
		userDTO.setApiToken(user.getApiToken());
		
		userDTO.setApiTokenExpirationDate(user.getApiTokenExpirationDate());
		
		userDTO.setValidationCode(user.getValidationCode());
		
		userDTO.setValidationCodeExpirationDate(user.getValidationCodeExpirationDate());
		
		userDTO.setEnabled(user.isEnabled());
		
		userDTO.setLastIp(user.getLastIp());
		
		userDTO.setLastAccessDate(user.getLastAccessDate());
		
		return userDTO;
	}

	public Set<UserDTO> convertList(Set<User> users) {
        Set<UserDTO> userDTOs = new HashSet<>();
        for (User user : users) {
            userDTOs.add(convert(user));
        }
        return userDTOs;
    }
	
}

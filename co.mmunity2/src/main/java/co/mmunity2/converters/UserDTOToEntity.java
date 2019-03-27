package co.mmunity2.converters;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.User;
import co.mmunity2.dto.UserDTO;

@Component
public class UserDTOToEntity implements Converter<UserDTO, User> {

	@Autowired
	RoleDTOToEntity roleDTOToEntity;
	@Autowired
	CommentDTOToEntity commentDTOToEntity;
	
	@Override
	public User convert(UserDTO userDTO) {
		
		User user = new User();
		
		user.setName(userDTO.getName());
		
		user.setLastname(userDTO.getLastname());
		
		user.setJob(userDTO.getJob());
		
		user.setEmail(userDTO.getEmail());
		
		user.setPassword(userDTO.getPassword());
		
		user.setActive(userDTO.isActive());
		
		user.setEnabled(userDTO.isEnabled());
		
//		if (userDTO.getId() != null) {
//			user.setId(Integer.valueOf(userDTO.getId()));
//        }
		
//		user.setApiToken(userDTO.getApiToken());
//		
//		user.setApiTokenExpirationDate(userDTO.getApiTokenExpirationDate());
//		
//		user.setValidationCode(userDTO.getValidationCode());
//		
//		user.setValidationCodeExpirationDate(userDTO.getValidationCodeExpirationDate());
//		
//		user.setLastIp(userDTO.getLastIp());
//		
//		user.setLastAccessDate(userDTO.getLastAccessDate());
		
		user.setRoles(roleDTOToEntity.convertList(userDTO.getRoles()));
		
//		user.setComments(commentDTOToEntity.convertList(userDTO.getComments()));
		
		return user;
		
		
	}

	public Set<User> convertList(Set<UserDTO> userDTOs) {
        Set<User> users = new HashSet<>();
        for (UserDTO userDTO : userDTOs) {
            users.add(convert(userDTO));
        }
        return users;
    }
	
}

package co.mmunity2.services;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import co.mmunity2.converters.RoleEntityToDTO;
import co.mmunity2.converters.UserDTOToEntity;
import co.mmunity2.converters.UserEntityToDTO;
import co.mmunity2.domain.Role;
import co.mmunity2.domain.User;
import co.mmunity2.dto.RoleDTO;
import co.mmunity2.dto.UserDTO;
import co.mmunity2.repositories.RoleRepository;
import co.mmunity2.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roles;
	
	@Autowired
	private RoleEntityToDTO roleEntityToDTO;

	@Autowired
	private UserEntityToDTO userEntityToDTO;
	
	@Autowired
	private UserDTOToEntity userDTOToEntity;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Override
	public Set<UserDTO> listAll() {
		Set<User> users = new HashSet<>();
		userRepository.findAll().forEach(users::add);
		return userEntityToDTO.convertList(users);
	}

	@Override
	public UserDTO getById(String id) {
		if ((id != null) && (!id.isEmpty()) && (userRepository.existsById(Integer.valueOf(id)))) {
			return userEntityToDTO.convert(userRepository.findById(Integer.valueOf(id)).orElse(null));
		}
		return null;
	}

	@Override
	public UserDTO saveOrUpdate(UserDTO userDTO) {
		//donner le role regular aux nouveaux user, avec une conversion de DTO vers entité
		
		userDTO.setPassword(encoder.encode(userDTO.getPassword()));
		
		Role regular = (roles.findByName("regular"));
		
		userDTO.setRoles(roleEntityToDTO.convertList(Stream.of(regular).collect(Collectors.toSet())));
		userDTO.setEnabled(true);
		User user = userRepository.save(userDTOToEntity.convert(userDTO));
		return userEntityToDTO.convert(user);
	}

	@Override
	public void delete(String id) {
		 if ((id != null) && (!id.isEmpty()) && (userRepository.existsById(Integer.valueOf(id)))) {
			 userRepository.deleteById(Integer.valueOf(id));
		 }
	}

}

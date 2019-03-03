package co.mmunity2.services;

import java.util.Set;

import co.mmunity2.dto.UserDTO;

public interface UserService {

	Set<UserDTO> listAll();

	UserDTO getById(String id);

	UserDTO saveOrUpdate(UserDTO role);

    void delete(String id);
    
}

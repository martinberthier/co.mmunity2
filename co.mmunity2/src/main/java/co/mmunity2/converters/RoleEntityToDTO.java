package co.mmunity2.converters;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Role;
import co.mmunity2.dto.RoleDTO;

@Component
public class RoleEntityToDTO implements Converter<Role, RoleDTO> {

	@Autowired
	UserEntityToDTO userEntityToDTO;
	
	@Override
	public RoleDTO convert(Role role) {
		
		RoleDTO roleDTO = new RoleDTO();
		
		roleDTO.setName(role.getName());
		
		if (role.getId() != null) {
            roleDTO.setId(role.getId().toString());
        }
		
		//roleDTO.setUsers(userEntityToDTO.convertList(role.getUsers()));
		
		return roleDTO;
	}

	public Set<RoleDTO> convertList(Set<Role> roles) {
        Set<RoleDTO> roleDTOs = new HashSet<>();
        for (Role role : roles) {
            roleDTOs.add(convert(role));
        }
        return roleDTOs;
	}
}

package co.mmunity2.converters;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Role;
import co.mmunity2.dto.RoleDTO;

@Component
public class RoleDTOToEntity implements Converter<RoleDTO, Role>{

	@Autowired
	UserDTOToEntity userDTOToEntity;
	
	@Override
	public Role convert(RoleDTO roleDTO) {
		
		Role role = new Role();
		
		role.setName(roleDTO.getName());
		
		if (roleDTO.getId() != null) {
			role.setId(Integer.valueOf(roleDTO.getId()));
        }

		 role.setUsers(userDTOToEntity.convertList(roleDTO.getUsers()));
		 
		return role;
	}

	public Set<Role> convertList(Set<RoleDTO> roleDTOs) {
        Set<Role> roles = new HashSet<>();
        for (RoleDTO roleDTO : roleDTOs) {
            roles.add(convert(roleDTO));
        }
        return roles;
    }
	
}

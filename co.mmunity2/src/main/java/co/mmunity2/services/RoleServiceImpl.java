package co.mmunity2.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import co.mmunity2.converters.RoleDTOToEntity;
import co.mmunity2.converters.RoleEntityToDTO;
import co.mmunity2.domain.Role;
import co.mmunity2.dto.RoleDTO;
import co.mmunity2.repositories.RoleRepository;

public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private RoleEntityToDTO roleEntityToDTO;
	
	@Autowired
	private RoleDTOToEntity roleDTOToEntity;
	
	@Override
	public Set<RoleDTO> listAll() {
		Set<Role> roles = new HashSet<>();
		roleRepository.findAll().forEach(roles::add);
		return roleEntityToDTO.convertList(roles);
	}

	@Override
	public RoleDTO getById(String id) {
		if ((id != null) && (!id.isEmpty()) && (roleRepository.existsById(Integer.valueOf(id)))) {
			return roleEntityToDTO.convert(roleRepository.findById(Integer.valueOf(id)).orElse(null));
		}
		return null;
	}

	@Override
	public RoleDTO saveOrUpdate(RoleDTO roleDTO) {
		Role role = roleRepository.save(roleDTOToEntity.convert(roleDTO));
		return roleEntityToDTO.convert(role);
	}

	@Override
	public void delete(String id) {
		 if ((id != null) && (!id.isEmpty()) && (roleRepository.existsById(Integer.valueOf(id)))) {
			 roleRepository.deleteById(Integer.valueOf(id));
		 }
	}

}

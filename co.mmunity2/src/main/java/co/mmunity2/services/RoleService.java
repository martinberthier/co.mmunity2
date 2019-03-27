package co.mmunity2.services;

import java.util.Set;

import co.mmunity2.dto.RoleDTO;

public interface RoleService {

	Set<RoleDTO> listAll();

	RoleDTO getById(String id);

	RoleDTO saveOrUpdate(RoleDTO role);

    void delete(String id);
    
}

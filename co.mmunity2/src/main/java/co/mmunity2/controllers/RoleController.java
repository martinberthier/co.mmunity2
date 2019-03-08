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

import co.mmunity2.dto.RoleDTO;
import co.mmunity2.services.RoleService;

@CrossOrigin
@RestController
@RequestMapping(value = "/community")
public class RoleController {

	@Autowired
	private RoleService roleService;
	
	@RequestMapping(value = "/roles", method = RequestMethod.GET)
	public ResponseEntity<Object> listRole() {
		Set<RoleDTO> roles = roleService.listAll();
		return new ResponseEntity<>(roles, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/roles/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getRole(@PathVariable String id) {
		RoleDTO role = roleService.getById(id);
		return new ResponseEntity<>(role, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/roles", method = RequestMethod.POST)
	public ResponseEntity<Object> saveRole(@RequestBody RoleDTO roleDTO) {
		RoleDTO savedRoleDTO = null;
		if(roleDTO.getId() == null) {
			savedRoleDTO = roleService.saveOrUpdate(roleDTO);
		}
		return new ResponseEntity<>(savedRoleDTO, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/roles/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> modifyRole(@PathVariable String id, @RequestBody RoleDTO roleDTO) {
		if(id.equals(roleDTO.getId())) {
			return new ResponseEntity<>(roleService.saveOrUpdate(roleDTO), HttpStatus.OK);
		}
		return null;
	}
	
	@RequestMapping(value = "/roles/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteRole(@PathVariable String id) {
		roleService.delete(id);
		return null;
	}
	
}

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

import co.mmunity2.dto.UserDTO;
import co.mmunity2.services.UserService;

@CrossOrigin
@RestController
@RequestMapping(value = "/community")
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public ResponseEntity<Object> listUsers() {
		Set<UserDTO> users = userService.listAll();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getUser(@PathVariable String id) {
		UserDTO user = userService.getById(id);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public ResponseEntity<Object> saveUser(@RequestBody UserDTO userDTO) {
		UserDTO savedUserDTO = null;
		if(userDTO.getId() == null) {
			savedUserDTO = userService.saveOrUpdate(userDTO);
		}
		return new ResponseEntity<>(savedUserDTO, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> modifyUser(@PathVariable String id, @RequestBody UserDTO userDTO) {
		if(id.equals(userDTO.getId())) {
			return new ResponseEntity<>(userService.saveOrUpdate(userDTO), HttpStatus.OK);
		}
		return null;
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deletUser(@PathVariable String id) {
		userService.delete(id);
		return null;
	}
}

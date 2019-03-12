package co.mmunity2.dto;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RoleDTO {

//	@JsonIgnore
	private String id;
	
	private String name;
	
//	@JsonManagedReference
//	private Set<UserDTO> users;
	
	
	
}

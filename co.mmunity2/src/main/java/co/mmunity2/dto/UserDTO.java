package co.mmunity2.dto;

import java.util.Set;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {

	private String id;
	
	private String name;
	
	private String lastname;
	
	private String job;
	
	private String email;
	
	private String password;
	
	private boolean active;
	
	private Set<CommentDTO> comments;
	
	private Set<RoleDTO> roles;
	
	
}

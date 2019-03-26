package co.mmunity2.dto;

import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {

//	@JsonIgnore
	private String id;
	
	private String name;
	
	private String lastname;
	
	private String job;
	
	private String email;
	
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
	
	@JsonIgnore
	private boolean active;
	
//	@JsonBackReference
//	private Set<CommentDTO> comments;
//	
//	@JsonBackReference
	private Set<RoleDTO> roles;
	
	private boolean enabled;
	
//	private String apiToken;
//
//	private LocalDateTime apiTokenExpirationDate;
//
//	private String validationCode;
//
//	private LocalDateTime validationCodeExpirationDate;

//	private String lastIp;
//
//	LocalDateTime lastAccessDate;
	
	
}

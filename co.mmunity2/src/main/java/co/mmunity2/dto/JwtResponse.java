package co.mmunity2.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtResponse {

	private String token;

	private UserDTO user;

	public JwtResponse(String token, UserDTO user) {
		super();
		this.token = token;
		this.user = user;
	}

	public JwtResponse() {
		super();
	}
	
	
}

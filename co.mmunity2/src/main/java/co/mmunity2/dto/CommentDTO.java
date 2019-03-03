package co.mmunity2.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CommentDTO {

	private String id;
	
	private String content;
	
	private UserDTO user;
	
	private CategoryDTO category;
	
}

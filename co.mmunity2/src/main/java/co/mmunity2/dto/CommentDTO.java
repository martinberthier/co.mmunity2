package co.mmunity2.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CommentDTO {

//	@JsonIgnore
	private String id;
	
	private String content;
	
	private String tag;
	
//	@JsonManagedReference
	private UserDTO user;
	
//	@JsonManagedReference
	private CategoryDTO category;
	
}

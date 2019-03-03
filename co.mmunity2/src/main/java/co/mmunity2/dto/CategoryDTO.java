package co.mmunity2.dto;

import java.util.Set;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CategoryDTO {

	private String id;
	
	private String name;
	
	private Set<CommentDTO> comments;
	
}

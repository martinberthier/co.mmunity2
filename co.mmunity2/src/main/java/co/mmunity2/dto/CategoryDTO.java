package co.mmunity2.dto;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CategoryDTO {
	
//	@JsonIgnore
	private String id;
	
	private String name;
	
//	@JsonBackReference
	private Set<CommentDTO> comments;
	
}

package co.mmunity2.converters;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Category;
import co.mmunity2.dto.CategoryDTO;

@Component
public class CategoryEntityToDTO  implements Converter <Category, CategoryDTO> {

	@Autowired
	CommentEntityToDTO commentEntityToDTO;
	
	@Override
	public CategoryDTO convert(Category category) {

		CategoryDTO categoryDTO = new CategoryDTO();
		
		categoryDTO.setName(category.getName());
		
		if (category.getId() != null) {
			categoryDTO.setId(category.getId().toString());
		}
		
		if (category.getComments() != null) {
			categoryDTO.setComments(commentEntityToDTO.convertList(category.getComments()));
		}
		
		return categoryDTO;
	}

	public Set<CategoryDTO> convertList (Set<Category> categories) {
		Set <CategoryDTO> categoryDTOs = new HashSet<> ();
		for (Category category : categories) {
		categoryDTOs.add(convert(category));
		}
		return categoryDTOs;
	}
}

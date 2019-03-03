package co.mmunity2.converters;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Category;
import co.mmunity2.dto.CategoryDTO;


@Component
public class CategoryDTOToEntity implements Converter<CategoryDTO, Category> {

	@Autowired
	private CommentDTOToEntity commentDTOToEntity;
	
	@Override
	public Category convert(CategoryDTO categoryDTO) {

		Category category = new Category();
		
		category.setName(categoryDTO.getName());
		
		 if (categoryDTO.getId() != null) {
	            category.setId(Integer.valueOf(categoryDTO.getId()));
	        }

		 if (categoryDTO.getComments() != null) {
	            category.setComments(commentDTOToEntity.convertList(categoryDTO.getComments()));
	        }
		 
		 
		return category;
	}

	public Set<Category> convertList(Set<CategoryDTO> categoryDTOs) {
        Set<Category> categories = new HashSet<>();
        for (CategoryDTO categoryDTO : categoryDTOs) {
            categories.add(convert(categoryDTO));
        }
        return categories;
	}
}

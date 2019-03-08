package co.mmunity2.services;

import java.util.Set;

import co.mmunity2.dto.CategoryDTO;

public interface CategoryService {

	Set<CategoryDTO> listAll();

	CategoryDTO getById(String id);

	CategoryDTO saveOrUpdate(CategoryDTO category);

    void delete(String id);
    
}

package co.mmunity2.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.mmunity2.converters.CategoryDTOToEntity;
import co.mmunity2.converters.CategoryEntityToDTO;
import co.mmunity2.domain.Category;
import co.mmunity2.dto.CategoryDTO;
import co.mmunity2.repositories.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private CategoryEntityToDTO categoryEntityToDTO;
	@Autowired
	private CategoryDTOToEntity categoryDTOToEntity;
	
	
	@Override
	public Set<CategoryDTO> listAll() {

		Set<Category> categories = new HashSet<>();
		categoryRepository.findAll().forEach(categories::add);
		return categoryEntityToDTO.convertList(categories);
	}

	@Override
	public CategoryDTO getById(String id) {
		if ((id != null) && (!id.isEmpty()) && (categoryRepository.existsById(Integer.valueOf(id)))) {
			return categoryEntityToDTO.convert(categoryRepository.findById(Integer.valueOf(id)).orElse(null));
		}
		return null;
	}

	@Override
	public CategoryDTO saveOrUpdate(CategoryDTO categoryDTO) {
		Category category = categoryRepository.save(categoryDTOToEntity.convert(categoryDTO));
		return categoryEntityToDTO.convert(category);
	}

	@Override
	public void delete(String id) {
		if ((id != null) && (!id.isEmpty()) && (categoryRepository.existsById(Integer.valueOf(id)))) {
			categoryRepository.deleteById(Integer.valueOf(id));
		}
	}

}

package co.mmunity2.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.mmunity2.dto.CategoryDTO;
import co.mmunity2.services.CategoryService;

@CrossOrigin
@RestController
@RequestMapping(value = "/community")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	public ResponseEntity<Object> listCategories() {
		Set<CategoryDTO> categories = categoryService.listAll();
		return new ResponseEntity<>(categories, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getCategory(@PathVariable String id) {
		CategoryDTO category = categoryService.getById(id);
		return new ResponseEntity<>(category, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/categories", method = RequestMethod.POST)
	public ResponseEntity<Object> saveCategory(@RequestBody CategoryDTO categoryDTO) {
		CategoryDTO savedCategoryDTO = null;
		if(categoryDTO.getId() == null) {
			savedCategoryDTO = categoryService.saveOrUpdate(categoryDTO);
		}
		return new ResponseEntity<>(savedCategoryDTO, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> modifyCategory(@PathVariable String id, @RequestBody CategoryDTO categoryDTO) {
		if(id.equals(categoryDTO.getId())) {
			return new ResponseEntity<>(categoryService.saveOrUpdate(categoryDTO), HttpStatus.OK);
		}
		return null;
	}
	
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteCategory(@PathVariable String id) {
		categoryService.delete(id);
		return null;
	}
}

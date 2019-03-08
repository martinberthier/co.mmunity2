package co.mmunity2.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import co.mmunity2.domain.Role;
import co.mmunity2.domain.User;



public interface UserRepository extends JpaRepository<User, Integer>{

//	List<User> findAll();
//	
//	List<User> findByRolesContains(Role role);
//	
//	//List<User> findByActive(boolean active);
//	
//	List<User> findByActiveIsFalse(boolean active);
//	
//	List<User> findByActiveIsTrue(boolean active);
//
//	User findByLastname(String lastname);
//	
//	User findByName(String name);
	
}


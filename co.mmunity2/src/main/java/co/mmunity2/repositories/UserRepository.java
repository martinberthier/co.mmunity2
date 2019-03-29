package co.mmunity2.repositories;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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
	
	/////JWT
	
	boolean existsByEmail(String email);

//	User findByApiToken(String apiToken);

	User findByEmail(String email);

//	User findByLastIp(String ip);

//	User findByValidationCode(String code);

	List<User> findByRolesContains(Role role);

	List<User> findByEnabledTrueOrderByEmailAsc();

	List<User> findByEnabledFalseOrderByEmailAsc();

	void save(Optional<User> user);

//	List<User> findByLastAccessDateBetweenOrderByEmailAsc(LocalDateTime debut, LocalDateTime fin);

//	List<User> findByApiTokenExpirationDateBetweenOrderByEmailAsc(LocalDateTime debut, LocalDateTime fin);

	////fin JWT
}


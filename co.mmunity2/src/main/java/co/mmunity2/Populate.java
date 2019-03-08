package co.mmunity2;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Role;
import co.mmunity2.domain.User;
import co.mmunity2.repositories.CategoryRepository;
import co.mmunity2.repositories.CommentRepository;
import co.mmunity2.repositories.RoleRepository;
import co.mmunity2.repositories.UserRepository;


@Component
public class Populate {

	@Autowired
	CategoryRepository categories;
	
	@Autowired
	CommentRepository comments;
	
	@Autowired
	RoleRepository roles;
	
	@Autowired
	UserRepository users;
	
	
	@Transactional
	public void nettoyage() {
//		events.deleteAll();
//		projects.deleteAll();
//		roles.deleteAll();
//		users.deleteAll();
//		associations.deleteAll();
//		capEntities.deleteAll();
//		cities.deleteAll();
	}
	
//	public boolean hasNoData()
//	{		
//		return (users.count()==0 && roles.count()==0 && associations.count()==0 && capEntities.count()==0 && cities.count()==0 && events.count()==0);
//	}
	public void nettoiePuisCree() throws Exception
	{
		//nettoyage();
		creerJeuDessai();
	}
	
	public void creerJeuDessai() throws Exception {


		User paul = new User("paul","buret","DRH","paulburet@mail.com","123456");
		users.save(paul);
		
		User juliette = new User("juliette","berthier","stagiaire","juliette@mail.com","mdpsecret");
		users.save(juliette);
		
		Role regular = new Role("regular");
		roles.save(regular);
		
		Role admin = new Role("admin");
		roles.save(admin);
		
		paul.addRole(regular);
		paul.addRole(admin);
		users.save(paul);
		
		juliette.addRole(regular);
		users.save(juliette);
			
	}
}

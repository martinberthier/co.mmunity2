package co.mmunity2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Category;
import co.mmunity2.domain.Comment;
import co.mmunity2.domain.Role;
import co.mmunity2.domain.User;
import co.mmunity2.dto.CommentDTO;
import co.mmunity2.repositories.CategoryRepository;
import co.mmunity2.repositories.CommentRepository;
import co.mmunity2.repositories.RoleRepository;
import co.mmunity2.repositories.UserRepository;
import co.mmunity2.security.Blacklist;



@Component
public class StartupTasks implements ApplicationRunner{
	@Autowired
	private Blacklist blacklist;
	
	@Autowired
	RoleRepository roles;
	
	@Autowired
	UserRepository users;
	@Autowired
	CommentRepository comments;
	@Autowired
	CategoryRepository categories;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		blacklist.loadDisabledFromDB();		
		
		//check si role regular existe, sinon le créer
		
		if((roles.findByName("regular")) != null) {
			System.out.println("le role regular est déjà existant");
		} else {
		
		if ((roles.findByName("regular")) == null) {
		
//		Role regular = new Role("regular");
//		roles.save(regular);
			
			//////////////////////////////////////////////////////////////////////////////DEBUT LOAD DTB
			
			User paul = new User("paul","buret","DRH","paulburet@mail.com", encoder.encode("password"));
			users.save(paul);
			
			User juliette = new User("juliette","berthier","stagiaire","juliette@mail.com", encoder.encode("password"));
			users.save(juliette);
			
			Role regular = new Role("regular");
			roles.save(regular);
			
			Role admin = new Role("admin");
			roles.save(admin);
			
			paul.addRole(regular);
			paul.addRole(admin);
//			paul.generateValidationCode(2);
//			paul.createAccessToken(1);
			paul.setEnabled(true);
			users.save(paul);
			
			juliette.addRole(regular);
//			juliette.generateValidationCode(2);
//			juliette.createAccessToken(1);
			juliette.setEnabled(true);
			users.save(juliette);
			
			//////////////// Comments avec différents auteurs
			
			User antoine = new User("antoine","peglion","assistant pdg","antoine@mail.com", encoder.encode("password"));
			users.save(antoine);
			
			User alexis = new User("alexis","journault","concepteur redacteur","alexis@mail.com", encoder.encode("password"));
			users.save(alexis);
			
			antoine.addRole(regular);
			antoine.setEnabled(true);
			users.save(antoine);
			
			alexis.addRole(regular);
			alexis.setEnabled(true);
			users.save(alexis);
			
			Category cuisine = new Category("cuisine");
			categories.save(cuisine);
			
			Comment firstComment = new Comment("j'ai faim! ","food", alexis, cuisine);
			comments.save(firstComment);
			
			Comment secondComment = new Comment("qui veut une pizza ce midi ? ","pizza", alexis, cuisine);
			comments.save(secondComment);
			
			Comment thirdComment = new Comment("En ce qui me concerne, je suis plutôt un amateur de bons petits plats fait maison, et vous? ","cook", antoine, cuisine);
			comments.save(thirdComment);
			
			//////////////////////////////////////////////////////////////////////////////FIN LOAD DTB
		
			}
		} 
	}
}


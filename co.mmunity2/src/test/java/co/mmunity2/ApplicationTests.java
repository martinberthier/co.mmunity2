package co.mmunity2;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import co.mmunity2.domain.Category;
import co.mmunity2.domain.Comment;
import co.mmunity2.domain.Role;
import co.mmunity2.domain.User;
import co.mmunity2.repositories.CategoryRepository;
import co.mmunity2.repositories.CommentRepository;
import co.mmunity2.repositories.RoleRepository;
import co.mmunity2.repositories.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests {
	
//	@Autowired
//	Populate populate;
	
	@Autowired
	UserRepository users;
	@Autowired
	RoleRepository roles;
	@Autowired
	CommentRepository comments;
	@Autowired
	CategoryRepository categories;
	
//	@Before
//	public void setUp() throws Exception {
//		populate.nettoiePuisCree();
//	}
	
	@Test
	public void rolesTest() {
		
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
	
	@Test
	public void commentTest() {
		
		User pascal = new User("pascal","obispo","intermittant","pobispo@mail.com","123456");
		users.save(pascal);
		
		User louise = new User("louise","dorina","pfg","louise@mail.com","mdpsecret");
		users.save(louise);
		
		Category foot = new Category("foot");
		categories.save(foot);
		
		Category poney = new Category("poney");
		categories.save(poney);
		
		Comment firstComment = new Comment("bonjour ! ","bonjour", pascal, foot);
		comments.save(firstComment);
		
		Comment secondComment = new Comment("Y a quelqu'un ?","alone", louise, poney);
		comments.save(secondComment);
		
		Comment thirdComment = new Comment("ça va couper","cut", louise, poney);
		comments.save(thirdComment);
		
		Comment fourthComment = new Comment("comment on ajoute des gifs?",null, louise, poney);
		comments.save(fourthComment);
		
		Comment fifthComment = new Comment("c'est facile pourtant ! ",null, pascal, poney);
		comments.save(fifthComment);
		
		Comment sixthComment = new Comment("EZZZZ","celebrate", pascal, poney);
		comments.save(sixthComment);
		
		poney.removeComment(thirdComment);;
		categories.save(poney);
		
	}

}

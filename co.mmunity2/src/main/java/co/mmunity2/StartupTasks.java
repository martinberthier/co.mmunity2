package co.mmunity2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.Role;
import co.mmunity2.dto.CommentDTO;
import co.mmunity2.repositories.RoleRepository;
import co.mmunity2.security.Blacklist;



@Component
public class StartupTasks implements ApplicationRunner{
	@Autowired
	private Blacklist blacklist;
	
	@Autowired
	RoleRepository roles;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		blacklist.loadDisabledFromDB();		
		
		//check si role regular existe, sinon le créer
		
//		if((roles.findByName("regular")) != null) {
//			System.out.println("le role regular est déjà existant");
//		} else {
//		
//		if ((roles.findByName("regular")) == null) {
//		
//		Role regular = new Role("regular");
//		roles.save(regular);
//			}
//		} 
	}
}

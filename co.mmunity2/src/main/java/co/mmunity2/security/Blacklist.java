package co.mmunity2.security;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import co.mmunity2.domain.User;
import co.mmunity2.repositories.UserRepository;



@Component
public class Blacklist {
	@Autowired
	private UserRepository utilisateurs;
	
	private Set<String> disabled = new HashSet<String>();
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	// a chaque demarrage de l'appli on appellera cette methode lit la liste des users disabled et les ajoute a la blacklist
	public void loadDisabledFromDB()
	{
		for(User u : utilisateurs.findByEnabledFalseOrderByEmailAsc())
		{
			disabled.add(u.getEmail());
			
			logger.info("Blacklisted "+u.getEmail());
			
		}
	}
	
	public boolean userInList(String user)
	{
		return disabled.contains(user);
	}
	
	public void addUser(String user)
	{
		disabled.add(user);
		logger.info("Blacklisted "+user);
	}
	
	public void removeUser(String user)
	{
		disabled.remove(user);
		logger.info("UNBlacklisted "+user);
	}
	
	public void CleanBlackList()
	{
		disabled.clear();
	}


	public List<String> getDisabled() {
		return new ArrayList<String>(disabled);
	}	
}

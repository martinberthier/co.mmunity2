package co.mmunity2.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;

	@ManyToMany
	private Set<User> users = new HashSet<User> ();
	
	public Category() {}
	
	public Category(String name, Set<User> users) {
		super();
		this.name = name;
		this.users = users;
	}
	
}

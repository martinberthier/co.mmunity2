package co.mmunity2.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	

	private String name;
	
	private String lastname;

	private String job;
	
	@Email
	private String email;

	private String password;
	
	private Set<Comment> comments = new HashSet <Comment>();	
	
	@ManyToMany
	@JoinTable
	private Set<Role> roles = new HashSet<Role>();

	private boolean active;
	
	public User() {}

	public User(@NotEmpty @Size(min = 1, max = 20) String lastname, @NotEmpty @Size(min = 1, max = 20) String name,
			@NotEmpty @Size(min = 1, max = 20) String job, @Email @NotEmpty @Size(min = 1, max = 20) String email,
			@NotEmpty @Size(min = 1, max = 20) String password) {
		super();
		this.lastname = lastname;
		this.name = name;
		this.job = job;
		this.email = email;
		this.password = password;
		this.active = true;
	}
	

	public void addRole(Role role) {
		this.roles.add(role);
	}

	public void removeRole(Role role) {
		this.roles.remove(role);
	}
}
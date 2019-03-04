package co.mmunity2.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

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
	
	private String email;

	private String password;
	
	private boolean active;
	
	@OneToMany(mappedBy="user", fetch = FetchType.EAGER, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	private Set<Comment> comments = new HashSet <Comment>();	
	
	@ManyToMany
	@JoinTable
	private Set<Role> roles = new HashSet<Role>();
	
	public User() {}

	public User(String name, String lastname, String job, String email, String password) {
		super();
		this.name = name;
		this.lastname = lastname;
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
	
	public void addComment(Comment comment) {
		this.comments.add(comment);
	}

	public void removeComment(Comment comment) {
		this.comments.remove(comment);
	}
	
}
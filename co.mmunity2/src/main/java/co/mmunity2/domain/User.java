package co.mmunity2.domain;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
	
	private boolean enabled;
	
//	@Column(unique = true)
//	private String apiToken;
//
//	private LocalDateTime apiTokenExpirationDate;
//
//	private String validationCode;
//
//	private LocalDateTime validationCodeExpirationDate;
//
	private String lastIp;

	LocalDateTime lastAccessDate;
	
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
	
//	public String generateValidationCode(int expirationDays) {
//		this.validationCode = UUID.randomUUID().toString();
//		this.validationCodeExpirationDate = LocalDateTime.now().plusDays(expirationDays);
//		return this.validationCode;
//	}
	// pour confirmation par mail

	
	// pour API TOKEN
//	public String createAccessToken(int expirationDays) {
//		this.apiToken = UUID.randomUUID().toString();
//		this.apiTokenExpirationDate = LocalDateTime.now().plusDays(expirationDays);
//		return this.apiToken;
//	}
//
//	public void revokeAccess() {
//		this.validationCode = "";
//		this.validationCodeExpirationDate=LocalDateTime.now().minusMinutes(5);
//		this.apiToken = "";
//		this.apiTokenExpirationDate = LocalDateTime.now().minusMinutes(5);
//	}
	
}
package co.mmunity2.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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

//	@OneToMany(mappedBy ="category", fetch = FetchType.EAGER, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	@OneToMany(mappedBy="category", fetch = FetchType.EAGER)
	private Set<Comment> comments = new HashSet<Comment> ();
	
	public Category() {}
	
	public Category(String name) {
		super();
		this.name = name;
	}
	
	public void addComment(Comment comment) {
		this.comments.add(comment);
	}

	public void removeComment(Comment comment) {
		this.comments.remove(comment);
	}
	
}

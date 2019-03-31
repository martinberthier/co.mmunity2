package co.mmunity2.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String content;
	
	private String tag;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn
	private User user;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn
	private Category category;

	public Comment() {}

	public Comment(String content, String tag, User user, Category category) {
		super();
		this.content = content;
		this.tag = tag;
		this.user = user;
		this.category = category;
	}


}

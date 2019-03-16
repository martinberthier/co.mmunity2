package co.mmunity2.dto;

import java.util.HashSet;
import java.util.Set;

import lombok.Data;

@Data
public class JSONCredentialInfos {
	
	private String email;
	private Set<String> roles = new HashSet<String>();	

}
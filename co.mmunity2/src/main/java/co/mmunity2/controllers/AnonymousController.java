package co.mmunity2.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.mmunity2.domain.Role;
import co.mmunity2.domain.User;
import co.mmunity2.dto.JSONCredential;
import co.mmunity2.repositories.UserRepository;
import co.mmunity2.security.JWTService;


@RestController
@RequestMapping("/ano/")
public class AnonymousController {
	@Autowired
	private UserRepository users;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JWTService jwtService;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping("jwt")
	public ResponseEntity<?> getJWT(@RequestBody JSONCredential cred, HttpServletRequest request) throws Exception {

		if (!users.existsByEmail(cred.getEmail())) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Bad user");
		}

		User user = users.findByEmail(cred.getEmail());

		if (!user.isEnabled()) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Disabled");
		}

		if (!passwordEncoder.matches(cred.getPassword(), user.getPassword())) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Bad password");
		}

		List<String> roles = new ArrayList<String>();
		for (Role role : user.getRoles()) {
			roles.add(role.getName());
		}

		String jwt = jwtService.createJWT(user.getEmail(), roles);

		logger.trace("JWT créé pour " + user.getEmail() + " : " + jwt);

		return ResponseEntity.ok().body(jwt);

	}
}

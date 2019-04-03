package co.mmunity2.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	JWTFilter jwtFilter;	

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
    public void configure(WebSecurity web) throws Exception {

        web.ignoring().antMatchers(HttpMethod.OPTIONS, "/**")
            .antMatchers("/**", "/**/*.ico", "/**/*.html", "/**/*.map", "/**/*.js", "/**/*.jpg", "/**/*.svg");
    }

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		//On desactive CSRF ansi que le formulaire de login auto généré et on active la protection CORS
		http.csrf().disable().cors().and().formLogin().disable()

				// Permet d'accèder a ces racines d'URL de facon anonyme (le controller de
				// login, un de tests et la doc d'api
				.authorizeRequests()
				.antMatchers("/home/**").permitAll()
				.antMatchers("/post-list/**").permitAll()
				.antMatchers("/post-add/**").permitAll()
				.antMatchers("/post-edit/**").permitAll()
				.antMatchers("/form-login/**").permitAll()
				.antMatchers("/form-register/**").permitAll()
				.antMatchers("/post-list-by-category/**").permitAll()
				.antMatchers("/**").permitAll()
				.antMatchers("/ano/**").permitAll()
				.antMatchers("/test/**").permitAll()
				.antMatchers("/", "/csrf", "/v2/api-docs", "/swagger-resources/configuration/ui", "/swagger-resources",
						"/swagger-resources/configuration/security", "/swagger-ui.html", "/webjars/**")	.permitAll()

				// Maintenant toutes les autres sont soumises à authentification
				.anyRequest().authenticated().and()

				// Permet de capturer le header Authorization
				//.httpBasic().and()

				// filtre qui va disséquer la requete http pour authentifier les requetes
				.addFilterAfter(jwtFilter, UsernamePasswordAuthenticationFilter.class)
							

				// desactive les sessions car la communication est sans etat a conserver coté
				// serveur
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
}

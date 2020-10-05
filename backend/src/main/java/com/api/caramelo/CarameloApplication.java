package com.api.caramelo;

import com.api.caramelo.filters.AuthFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CarameloApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarameloApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<AuthFilter> filterFilterRegistrationBean() {
		FilterRegistrationBean<AuthFilter> registrationBean = new FilterRegistrationBean<>();
		AuthFilter authFilter = new AuthFilter();
		registrationBean.setFilter(authFilter);
		registrationBean.addUrlPatterns("/pets/*");
		registrationBean.addUrlPatterns("/users/*");
		registrationBean.addUrlPatterns("/solicitations/*");
		return registrationBean;
	}
}

package br.com.rzandonai.web.config;

import br.com.rzandonai.web.filter.AuthFilter;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class WebConfig {

    @Bean
    public FilterRegistrationBean shallowEtagHeaderFilter() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(new AuthFilter());
        registration.addUrlPatterns("/api/*");
        return registration;
    }

}

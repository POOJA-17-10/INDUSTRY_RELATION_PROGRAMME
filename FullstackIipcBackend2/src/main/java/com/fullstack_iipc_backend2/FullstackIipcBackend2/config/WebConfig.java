package com.fullstack_iipc_backend2.FullstackIipcBackend2.config; // Adjust the package as needed

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // Adjust if your frontend runs on a different port
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
    }
}

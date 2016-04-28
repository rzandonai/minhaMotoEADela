package br.com.rzandonai.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Web App Home page controller
 * @author Carlos
 */
@Controller
public class HomeController {
    @RequestMapping("/")
    public String home() {
        return "index";
    }
}

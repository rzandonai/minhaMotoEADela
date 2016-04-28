package br.com.rzandonai.web.controller;


import br.com.rzandonai.model.domain.User;
import br.com.rzandonai.model.service.UserService;
import br.com.rzandonai.support.AuthUtils;
import br.com.rzandonai.support.PasswordService;
import br.com.rzandonai.support.Token;
import static br.com.rzandonai.web.controller.AuthenticationConstants.LOGING_ERROR_MSG;
import com.nimbusds.jose.JOSEException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.ws.rs.core.Context;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * JWT Authentcation controller
 * @author Carlos
 */
@RestController
public class LocalAuthenticationController {
    private static Logger LOG = Logger.getLogger(LocalAuthenticationController.class);
 
    @Autowired
    private UserService userService;  

    @RequestMapping("/auth/login")
    public ResponseEntity login(@RequestBody @Valid final User user, @Context final HttpServletRequest request)
            throws JOSEException {
        LOG.info("User: '" + user + "'");
        final User foundUser = userService.findByEmail(user.getEmail());
        if (foundUser != null
                && PasswordService.checkPassword(user.getPassword(), foundUser.getPassword())) {
            final Token token = AuthUtils.createToken(request.getRemoteHost(), foundUser.getId());
            return new ResponseEntity<Token>(token, HttpStatus.OK);
        }
        return new ResponseEntity<String>(LOGING_ERROR_MSG, HttpStatus.UNAUTHORIZED);
    }

    @RequestMapping("/auth/signup")
    public ResponseEntity signup(@RequestBody @Valid final User user, @Context final HttpServletRequest request)
            throws JOSEException {
        user.setPassword(PasswordService.hashPassword(user.getPassword()));
        final User savedUser = userService.save(user);
        final Token token = AuthUtils.createToken(request.getRemoteHost(), savedUser.getId());
        return new ResponseEntity<Token>(token, HttpStatus.CREATED);
    }  
   
}

package br.com.rzandonai.model.service;

import br.com.rzandonai.model.domain.User;

/**
 *
 * @author Carlos
 */
public interface UserService {
    User findByFacebook(String id);
    User findByGoogle(String id);
    User findByEmail(String email);
    User findOne(String subject);
    User save(User user);
}

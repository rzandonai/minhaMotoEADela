package br.com.rzandonai.model.service.impl;

import br.com.rzandonai.model.domain.User;
import br.com.rzandonai.model.domain.repository.UserRepository;
import br.com.rzandonai.model.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Carlos
 */
@Service
public class DefaultUserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByFacebook(String id) {
        return this.userRepository.findByFacebook(id);
    }

    @Override
    public User findByGoogle(String id) {
        return this.userRepository.findByGoogle(id);
    }

    @Override
    public User findByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    @Override
    public User findOne(String subject) {
        return this.userRepository.findOne(subject);
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }
}

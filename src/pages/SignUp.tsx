import { useState, FormEvent, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/form'
import HeaderSection from '../containers/header_section';
import { FooterContainer } from '../containers/footer';
import { AuthProvider } from '../context/auth-provider';
import useAuth from '../hooks/use-auth-hook';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const history = useNavigate();
    const { signUp,updateProfile } = useAuth();

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event: FormEvent) => {
        event.preventDefault();

        signUp(emailAddress, password).then(result =>
            updateProfile( result.user,{
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            }).then(() =>
                history(ROUTES.BROWSE)
            ) .catch((error: { message: SetStateAction<string>; }) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    
    };

    return (
        <>
            <HeaderSection>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderSection>
            <FooterContainer />
        </>
    );
}

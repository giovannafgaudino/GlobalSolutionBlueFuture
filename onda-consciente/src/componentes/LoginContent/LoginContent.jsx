import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function LoginContent() {
    const [userData, setUserData] = useState(null);
    // const handleLoginSuccess = (credentialResponse) => {
    //     console.log(credentialResponse);
    //     setUserData(credentialResponse.profileObj); // Salva as informações do perfil do usuário no estado
    // };
    const handleLoginSuccess = (credentialResponse) => {
        const decodedToken = jwtDecode(credentialResponse?.credential);
        console.log(decodedToken);
        setUserData(decodedToken);
    };
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });
    const [isFormValid, setIsFormValid] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    const handleInput = () => {
        const allFilled = Object.values(formData).every(field => field !== '');
        setIsFormValid(allFilled);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            setIsSubmitted(true); // Exibe a mensagem de sucesso
            setTimeout(() => {
                setIsSubmitted(false); // Remove a mensagem após alguns segundos
            }, 4000);
        } else {
            alert('Por favor, preencha todos os campos');
        }
    }
    return (
        <>
            <main className='login'>
                <section>
                    <div className='login-content'>
                        <div>
                            <h3> Já possui uma conta? </h3>
                            <p>Inicie sua sessão</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    placeholder='Entre com e-mail ou telefone'
                                    required />
                                <input type="password"
                                    name="senha"
                                    id="senha"
                                    placeholder='Digite sua senha'
                                    required />
                                <p>Esqueceu sua senha?</p>
                                <button type="submit"> Entrar</button>
                            </form>
                            <p>Ou</p>
                            <div className='btn-google'>
                                <GoogleOAuthProvider className='btn-google' clientId="446568977207-ld1dg6fn5htlhgn7itqh5m4hcnnscgd9.apps.googleusercontent.com">
                                    <GoogleLogin className='btn-google'
                                        onSuccess={handleLoginSuccess}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />
                                </GoogleOAuthProvider>
                            </div>
                        </div>
                        <div >
                            {userData && (
                                <div className='login-google'>
                                    <img className='border-rounded' src={userData.picture} alt='userData.name' />
                                    <h2>Bem-Vindo(a) {userData.name}</h2>
                                    <p>Login realizado com sucesso: {userData.email}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='login-content'>
                        <h3>Criar uma conta</h3>
                        <p>ou use seu email para criar uma conta:</p>
                        <form action="">
                            <input
                                type="text"
                                id="nome"
                                placeholder='Nome'
                                value={formData.nome}
                                onChange={handleChange}
                                onInput={handleInput}
                                required />
                            <input
                                type="email"
                                id="email"
                                placeholder='E-mail'
                                value={formData.email}
                                onChange={handleChange}
                                onInput={handleInput}
                                required />
                            <input type="password"
                                id="senha"
                                placeholder='Senha'
                                value={formData.senha}
                                onChange={handleChange}
                                onInput={handleInput}
                                required />
                            <button type="submit" disabled={!isFormValid}>Criar conta</button>
                            {isSubmitted && <p>Conta Criada com sucesso</p>}
                        </form>
                    </div>
                </section>
                <section >

                </section>
            </main>
        </>
    )
}
export default LoginContent
// Simulação de banco de dados de usuários
const usuarios = [
    { email: "mateus@gmail.com", senha: "12345" },
    { email: "vini@gmail.com", senha: '123'}
];

let emailVerificado = ""; // armazena o email que passou na verificação

// Alternar telas
function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('forgotForm').classList.add('hidden');
    resetForgotForm();
}

function showRegister() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('forgotForm').classList.add('hidden');
    resetForgotForm();
}

function showForgot() {
    document.getElementById('forgotForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    resetForgotForm();
}

// Reseta o formulário de recuperação para a etapa 1 e limpa campos
function resetForgotForm() {
    document.getElementById('etapa1').style.display = 'flex'; // alterado
    document.getElementById('etapa2').style.display = 'none';
    document.getElementById('forgot-email').value = '';
    document.getElementById('nova-senha').value = '';
    document.getElementById('confirma-senha').value = '';
    emailVerificado = '';
}

// Função de login
function login() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
        alert('Login realizado com sucesso!');
        window.location.href = 'sistema.html'; // redireciona
    } else {
        alert('E-mail ou senha incorretos!');
    }
}

// Função de cadastro
function cadastrar() {
    const nome = document.getElementById('register-nome').value;
    const email = document.getElementById('register-email').value;
    const senha = document.getElementById('register-senha').value;
    if (!nome || !email || !senha) {
        alert('Preencha todos os campos!');
        return;
    }
    if (usuarios.find(u => u.email === email)) {
        alert('E-mail já cadastrado!');
        return;
    }
    usuarios.push({ email, senha });
    alert('Cadastro realizado com sucesso!');
    showLogin();
}

// verificar e-mail
function verificarEmail() {
    const email = document.getElementById('forgot-email').value.trim();
    if (!email) {
        alert('Digite um e-mail.');
        return;
    }
    const usuario = usuarios.find(u => u.email === email);
    if (usuario) {
        document.getElementById('etapa1').style.display = 'none';
        document.getElementById('etapa2').style.display = 'flex'; // alterado
        document.getElementById('email-exibido').innerText = email;
        emailVerificado = email;
    } else {
        alert('E-mail não cadastrado. Por favor, cadastre-se.');
    }
}

// redefinir senha
function redefinirSenha() {
    const novaSenha = document.getElementById('nova-senha').value;
    const confirma = document.getElementById('confirma-senha').value;
    if (!novaSenha || !confirma) {
        alert('Preencha todos os campos.');
        return;
    }
    if (novaSenha !== confirma) {
        alert('As senhas não coincidem.');
        return;
    }
    const usuario = usuarios.find(u => u.email === emailVerificado);
    if (usuario) {
        usuario.senha = novaSenha;
        alert('Senha redefinida com sucesso!');
        showLogin();
    } else {
        alert('Erro: usuário não encontrado. Tente novamente.');
    }
}
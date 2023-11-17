function verificaSenha(){
    var senhaCorreta = hex_md5('VASCO')
    const senhaUsuario = hex_md5(document.getElementById('senha').value)
    
    if (senhaUsuario !== senhaCorreta) {
        alert('Senha incorreta!'); 
    } else {
        sessionStorage.setItem('logado', 'login');
        document.location.href = "atletas.html";
    }
    
}
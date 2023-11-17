const parametros = new URLSearchParams(window.location.search);
if (!sessionStorage.getItem('logado')){
    alert("Acesso não autorizado")
    window.location = '/';
}

const url = "https://botafogo-atletas.mange.li/" + parametros.get('id');
const descricao = document.getElementById('descricao')
const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const altura = document.getElementById('altura')
const img = document.getElementById('img')
const botão = document.getElementById('botão')



const popularPagina = async() => {
    const atleta = await pegar_coisas(url);
    nome.innerText = atleta.nome_completo;
    descricao.innerText = atleta.descricao
    idade.innerText = atleta.nascimento
    altura.innerText = atleta.altura
    img.src = atleta.imagem
    

}

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

botão.onclick = () => window.location = '/atletas.html'


popularPagina();

const url = "https://botafogo-atletas.mange.li";

if (!sessionStorage.getItem('logado')){
    alert("Acesso não autorizado")
    window.location = '/';
}

const body = document.body;



const header = document.createElement('header')
header.className = 'header';

const divButtons = document.createElement('div')
divButtons.className = 'divButtons';


const botãoMasculino = document.createElement('button')
botãoMasculino.className = 'botãoMasculino';
botãoMasculino.innerText = 'Masculino';
botãoMasculino.onclick = async () => {await pegar_coisas(`${url}/masculino`).then(
    (entrada) => {
        for (atleta of entrada)
        {preenche(atleta)}
    }
)}
    

divButtons.appendChild(botãoMasculino)



const botãoFeminino = document.createElement('button')
botãoFeminino.className = 'botãoFeminino';
botãoFeminino.innerText = 'Feminino';
botãoFeminino.onclick = () => pegar_coisas(`${url}/feminino`).then(
    (entrada) => {
        for (atleta of entrada)
        {preenche(atleta)}
    }
);

divButtons.appendChild(botãoFeminino)


const botãoTodos = document.createElement('button')
botãoTodos.className = 'botãoTodos';
botãoTodos.innerText = 'Elenco completo';
botãoTodos.onclick = () =>pegar_coisas(`${url}/all`).then(
    (entrada) => {
        for (atleta of entrada)
        {preenche(atleta)}
    }
);

divButtons.appendChild(botãoTodos)



const botãoSair = document.createElement('button')
botãoSair.className= 'botãoSair';
botãoSair.innerText = "sair";
botãoSair.onclick = function() {
    window.location.href = 'index.html'; 
};
divButtons.appendChild(botãoSair)

header.appendChild(divButtons);
body.appendChild(header)






const preenche = (atleta) => {
    const container = document.createElement('article');
    container.className = 'artigo'


    const titulo = document.createElement('h3');
    titulo.id = 'titulo'


    const imagem = document.createElement('img');
    imagem.className = 'img'
    imagem.innerText = atleta.imagem
    imagem.alt = `Imagem de ${atleta.nome}`;


    const saibaMais = document.createElement('p');
    saibaMais.id='saibaMais'
    saibaMais.innerText = 'saiba mais'





    container.dataset.id = atleta.id;
    container.dataset.altura = atleta.altura;
    container.dataset.nome_completo = atleta.nome_completo;
    container.dataset.nascimento = atleta.nascimento;

    

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;
    saibaMais.innerHTML = 'Saiba mais ';

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(saibaMais);

    container.onclick = handleClick;
    

    document.body.appendChild(container);

}

const handleClick = (e) => {
    const artigo = e.target.closest('article');
    //cookie
    

    window.location = `outra.html?id=${artigo.dataset.id}`;
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split("=")[1];
}


const pegar_coisas = async (caminho) => {
    document.body.innerHTML = ''
    body.appendChild(header)
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}



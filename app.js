const codeDatabase = {
    html: [
        { name: '<div>', description: 'Container genérico', example: '<div class="container">Conteúdo</div>' },
        { name: '<a>', description: 'Cria um hyperlink', example: '<a href="#">Link</a>' },
        { name: '<img>', description: 'Exibe uma imagem', example: '<img src="imagem.jpg" alt="Descrição">' },
        { name: '<form>', description: 'Formulário HTML', example: '<form action="/enviar" method="post"></form>' },
        { name: '<input>', description: 'Campo de entrada', example: '<input type="text" name="nome">' },
        { name: '<button>', description: 'Botão clicável', example: '<button type="submit">Enviar</button>' },
        { name: '<ul>', description: 'Lista não ordenada', example: '<ul><li>Item</li></ul>' },
        { name: '<table>', description: 'Tabela de dados', example: '<table><tr><td>Dado</td></tr></table>' },
        { name: '<span>', description: 'Elemento em linha genérico', example: '<span class="destaque">Texto</span>' },
        { name: '<meta>', description: 'Metadados do documento', example: '<meta charset="UTF-8">' },
        { name: '<script>', description: 'Insere código JavaScript', example: '<script>console.log("Olá")</script>' },
        { name: '<link>', description: 'Vincula CSS externo', example: '<link rel="stylesheet" href="style.css">' }
    ],
    javascript: [
        { name: 'function', description: 'Declara uma função', example: 'function soma(a, b) { return a + b; }' },
        { name: 'addEventListener', description: 'Adiciona um evento', example: 'element.addEventListener("click", () => {});' },
        { name: 'let/const/var', description: 'Declara variáveis', example: 'let nome = "João";' },
        { name: 'if/else', description: 'Condicional', example: 'if (x > 10) { alert("Maior"); } else { alert("Menor"); }' },
        { name: 'for', description: 'Laço de repetição', example: 'for (let i = 0; i < 10; i++) { console.log(i); }' },
        { name: 'document.querySelector', description: 'Seleciona elementos no DOM', example: 'document.querySelector("#id")' },
        { name: 'setTimeout', description: 'Executa após um tempo', example: 'setTimeout(() => alert("Olá"), 1000);' },
        { name: 'fetch', description: 'Requisições HTTP', example: 'fetch("/api").then(res => res.json())' },
        { name: 'map', description: 'Itera e transforma arrays', example: '[1,2,3].map(x => x * 2)' },
        { name: 'localStorage', description: 'Armazena dados no navegador', example: 'localStorage.setItem("user", "João")' },
        { name: 'JSON.parse/stringify', description: 'Converte JSON para objeto e vice-versa', example: 'JSON.parse(\'{"nome":"João"}\')' }
    ],
    css: [
        { name: 'display', description: 'Define o tipo de exibição', example: '.element { display: flex; }' },
        { name: 'margin', description: 'Define espaçamento externo', example: '.element { margin: 10px; }' },
        { name: 'padding', description: 'Define espaçamento interno', example: '.box { padding: 20px; }' },
        { name: 'color', description: 'Define a cor do texto', example: 'p { color: red; }' },
        { name: 'background-color', description: 'Cor de fundo', example: 'body { background-color: #f0f0f0; }' },
        { name: 'font-size', description: 'Tamanho da fonte', example: 'h1 { font-size: 24px; }' },
        { name: 'border', description: 'Borda ao redor do elemento', example: '.box { border: 1px solid #000; }' },
        { name: 'flex', description: 'Usado para layout flexível', example: '.container { display: flex; justify-content: center; }' },
        { name: 'position', description: 'Define o posicionamento', example: '.fixed { position: fixed; top: 0; }' },
        { name: 'z-index', description: 'Controla a sobreposição', example: '.modal { z-index: 1000; }' }
    ],
    php: [
        { name: 'echo', description: 'Imprime texto', example: '<?php echo "Olá"; ?>' },
        { name: '$_POST', description: 'Recebe dados POST', example: '$nome = $_POST["nome"];' },
        { name: 'isset', description: 'Verifica se uma variável está definida', example: 'if (isset($_GET["id"])) { echo "Ok"; }' },
        { name: 'include', description: 'Inclui arquivos externos', example: '<?php include "header.php"; ?>' },
        { name: 'foreach', description: 'Loop em arrays', example: 'foreach($lista as $item) { echo $item; }' },
        { name: 'mysqli_connect', description: 'Conecta ao banco MySQL', example: '$conn = mysqli_connect("localhost", "user", "pass", "db");' },
        { name: 'session_start', description: 'Inicia sessão', example: '<?php session_start(); $_SESSION["user"] = "João"; ?>' },
        { name: 'function', description: 'Cria funções', example: 'function saudacao($nome) { return "Olá $nome"; }' },
        { name: 'require_once', description: 'Inclui arquivos apenas uma vez', example: '<?php require_once "config.php"; ?>' },
        { name: 'header()', description: 'Redireciona ou define cabeçalhos', example: 'header("Location: index.php");' }
    ],
    twig: [
        { name: '{{ }}', description: 'Imprime variáveis', example: '{{ user.name }}' },
        { name: '{% %}', description: 'Blocos de controle', example: '{% if user.isAdmin %}Admin{% endif %}' },
        { name: '{# #}', description: 'Comentário no template', example: '{# Este é um comentário #}' },
        { name: 'for', description: 'Laço de repetição', example: '{% for produto in produtos %}{{ produto.nome }}{% endfor %}' },
        { name: 'extends', description: 'Herda de outro template', example: '{% extends "base.html.twig" %}' },
        { name: 'include', description: 'Inclui outro template', example: '{% include "header.html.twig" %}' },
        { name: 'set', description: 'Define variável', example: '{% set total = 10 + 5 %}{{ total }}' },
        { name: 'filter', description: 'Aplica filtros', example: '{{ nome|upper }}' }
    ]
};


let currentCategory = 'html';

function loadCodes(category) {
    const codeList = document.getElementById('codeList');
    codeList.innerHTML = '';
    currentCategory = category;

    codeDatabase[category].forEach(code => {
        const codeItem = document.createElement('div');
        codeItem.classList.add('code-item');
        codeItem.textContent = code.name;
        codeItem.onclick = () => showCodeDetails(code);
        codeList.appendChild(codeItem);
    });
}

function showCodeDetails(code) {
    const modal = document.getElementById('codeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCode = document.getElementById('modalCode');
    const modalDescription = document.getElementById('modalDescription');

    modalTitle.textContent = code.name;
    modalCode.textContent = code.example;
    modalDescription.textContent = code.description;

    modal.style.display = 'block';
}

function searchCode() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let found = false;

    for (let category in codeDatabase) {
        const result = codeDatabase[category].find(code =>
            code.name.toLowerCase().includes(searchTerm) ||
            code.description.toLowerCase().includes(searchTerm)
        );

        if (result) {
            loadCodes(category);
            showCodeDetails(result);
            found = true;
            break;
        }
    }

    if (!found) {
        alert('Código não encontrado');
    }
}

document.querySelector('.close').onclick = () => {
    document.getElementById('codeModal').style.display = 'none';
};

document.querySelectorAll('.category-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadCodes(link.dataset.category);
    });
});

// Inicializa com HTML
loadCodes('html');

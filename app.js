// ==========================================
// BLOCO 1 - ARRAYS E MÉTODOS AVANÇADOS
// ==========================================
console.log("--- BLOCO 1: Arrays ---");

const nomes = ["Ana", "Carlos", "Beatriz"];

// forEach: Apenas PERCORRE o array. Não cria nada novo. Ótimo para executar ações (efeitos colaterais).
nomes.forEach(nome => console.log(`Olá, ${nome}!`));

// map: TRANSFORMA os dados e GERA um array totalmente novo do mesmo tamanho.
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);


const precos = [10, 25, 40, 5, 60];

// filter: FILTRA os dados e GERA um novo array apenas com quem passou no teste (condição verdadeira).
const precosAltos = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAltos);

// reduce: ACUMULA todos os itens em um único valor (ex: somar tudo). 
// 'acumulador' guarda a soma atual, 'preco' é o item da vez. O '0' no final é o valor inicial do acumulador.
const somaTotal = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma de todos os preços:", somaTotal);


const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Caneta", preco: 5 },
    { nome: "Estojo", preco: 30 }
];

// Extraindo só os nomes (transformando array de objetos em array de strings)
const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

// Pegando só os baratos
const produtosBaratos = produtos.filter(produto => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

// Somando o preço de todos os objetos (note que somamos acumulador + produto.preco)
const valorTotalEstoque = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log("Valor total do estoque:", valorTotalEstoque);

// Imprimindo o catálogo
console.log("Catálogo:");
produtos.forEach(produto => console.log(`Nome: ${produto.nome} - R$ ${produto.preco}`));


// ==========================================
// BLOCO 2 - MANIPULAÇÃO DO DOM
// ==========================================
console.log("\n--- BLOCO 2: DOM ---");

// querySelector: Pega o PRIMEIRO elemento que bater com o seletor CSS
const titulo = document.querySelector("#titulo");
// textContent é mais seguro que innerHTML pois não interpreta tags HTML acidentais
titulo.textContent = "Blog do Davi"; 

// querySelectorAll: Pega TODOS os elementos que baterem com o seletor (retorna uma NodeList, parecida com um array)
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log("Texto do parágrafo:", p.textContent));

const lista = document.querySelector("#lista");
// innerHTML destrói o que tem dentro e recria. Cuidado ao usar em listas grandes!
// Adicionando 2 itens à lista (o += junta com o que já existe)
lista.innerHTML += `
    <li>Item via innerHTML 1</li>
    <li>Item via innerHTML 2</li>
`;

// O jeito mais profissional e seguro de criar elementos: createElement
const novoItem = document.createElement("li");
novoItem.textContent = "Terceiro item (via createElement)";
// append coloca o elemento criado no final do elemento pai (#lista)
lista.append(novoItem);

// classList gerencia as classes CSS do elemento de forma limpa
novoItem.classList.add("destaque");
console.log("O item tem a classe destaque?", novoItem.classList.contains("destaque")); // true

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
// Criando vários elementos dinamicamente
tarefas.forEach(tarefaTexto => {
    const li = document.createElement("li");
    li.textContent = tarefaTexto;
    lista.append(li);
});

// Pegando o primeiro <li> da página para aplicar uma classe
const primeiroItemDaLista = document.querySelector("li");
primeiroItemDaLista.classList.add("feito");

const totalItens = document.querySelectorAll("li").length;
console.log(`Temos um total de ${totalItens} itens (li) na página.`);


// ==========================================
// BLOCO 3 - EVENTOS E EVENT DELEGATION
// ==========================================
console.log("\n--- BLOCO 3: Eventos ---");

const botao = document.querySelector("#botao");

// Quando houver um "click", execute a função
botao.addEventListener("click", () => {
    console.log("Clicou no botão!");
});

// Quando o mouse passar por cima (mouseover), muda o texto
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});
// (Opcional: voltando o texto quando o mouse sai)
botao.addEventListener("mouseout", () => {
    botao.textContent = "Clique aqui";
});

const inputNome = document.querySelector("#nome");
// keyup dispara toda vez que uma tecla do teclado sobe (é solta)
inputNome.addEventListener("keyup", (evento) => {
    // evento.target.value é o texto que está dentro do input naquele momento
    console.log("Digitando:", evento.target.value);
});


// =========================================================================
// O PODER DO EVENT DELEGATION (Delegação de Eventos)
// Em vez de colocar um addEventListener em CADA <li> da página, 
// colocamos UM ÚNICO ouvinte no "pai" (a <ul>). 
// =========================================================================
lista.addEventListener("click", (evento) => {
    // evento.target é quem REALMENTE foi clicado (pode ser o li, ou a própria ul)
    // Se o elemento clicado tiver a tag "LI" (sempre em maiúsculo no JS)...
    if (evento.target.tagName === "LI") {
        // ...toggle adiciona a classe se não tiver, e remove se já tiver!
        evento.target.classList.toggle("feito");
        console.log("Você clicou no item:", evento.target.textContent);
    }
});


// =========================================================================
// FORMULÁRIO E PREVENT DEFAULT
// =========================================================================
const formulario = document.querySelector("#formulario");
const inputTarefa = document.querySelector("#tarefa");

// O evento 'submit' é melhor que o 'click' no botão, pois também funciona se apertar "Enter"
formulario.addEventListener("submit", (evento) => {
    // IMPORTANTE: Previne o comportamento padrão do formulário (que é recarregar a página)
    evento.preventDefault();
    
    // .trim() corta espaços em branco acidentais no começo e no final
    const textoDigitado = inputTarefa.value.trim();
    
    // Só adiciona se o campo não estiver vazio
    if (textoDigitado !== "") {
        const novoLi = document.createElement("li");
        novoLi.textContent = textoDigitado;
        lista.append(novoLi);
        
        // Limpa o campo para a próxima tarefa
        inputTarefa.value = ""; 
        
        // Foca o cursor de volta no input
        inputTarefa.focus();
    }
});
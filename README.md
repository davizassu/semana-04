# 🚀 Manipulação Dinâmica com JavaScript (Arrays, DOM e Eventos)

Este projeto prático consolida os três pilares essenciais do JavaScript para o desenvolvimento Front-End: manipulação avançada de dados (Arrays), controle da interface do usuário (DOM) e interatividade (Eventos).

## 🧠 O que eu aprendi neste projeto

### 1. Métodos Modernos de Array
Abandonei os antigos loops `for` de contagem e aprendi as funções de alta ordem (Higher-Order Functions), que deixam o código muito mais semântico:
*   **`forEach`:** Ideal para apenas percorrer os itens e executar uma ação (como imprimir na tela ou no console). Não retorna nada.
*   **`map`:** A ferramenta perfeita para transformações. Ele varre o array e devolve um *novo* array do exato mesmo tamanho (ex: extrair apenas os nomes de uma lista de objetos).
*   **`filter`:** Funciona como uma peneira. Testa cada item; se a condição for verdadeira, o item entra no *novo* array gerado.
*   **`reduce`:** Extremamente poderoso para condensar dados. Acumula os valores a cada repetição, resultando em um único dado final (perfeito para somar o valor total de um carrinho de compras).

### 2. Manipulação Segura do DOM
*   Entendi a diferença vital entre `innerHTML` (que reconstrói o HTML inteiro e pode ser custoso para a performance) e a combinação de `document.createElement()` com `append()` (que insere elementos de forma cirúrgica e segura).
*   Utilizei a API `classList` (`.add()`, `.contains()`, `.toggle()`) que é a forma mais profissional de alterar o visual dos elementos ativando e desativando classes CSS pré-prontas, mantendo o JS separado das regras de estilo.

### 3. Event Delegation (Delegação de Eventos)
Esse foi um divisor de águas para performance! 
Em vez de colar um ouvinte de clique (`addEventListener`) em cada novo item da lista (`<li>`), eu atrelei **um único ouvinte ao pai** (`<ul>`). 

Quando um item é clicado, o evento "sobe" (borbulha) até a lista. O JavaScript checa se o alvo original (`e.target`) foi um `<li>`. 
**A grande vantagem:** Quando crio novas tarefas dinamicamente pelo formulário, elas já "nascem" clicáveis sem eu precisar colocar um novo `addEventListener` nelas.

### 4. Controle de Formulários (`preventDefault`)
O comportamento histórico dos formulários HTML é recarregar a página ao enviar dados. Aprendi a interceptar isso usando `e.preventDefault()`, o que permite capturar os dados, validá-los (como o uso do `.trim()` para evitar strings vazias) e atualizar a página em tempo real, sem telas piscando (conceito fundamental para Single Page Applications - SPAs).

## 💻 Como rodar
1. Baixe os arquivos `index.html` e `app.js`.
2. Abra o `index.html` no seu navegador Chrome, Edge ou Firefox.
3. Clique com o botão direito na tela, vá em **Inspecionar** e abra a aba **Console** (ou simplesmente aperte `F12`).
4. Interaja com os botões, digite nos inputs e acompanhe as respostas diretas no Console!

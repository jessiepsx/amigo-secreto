# 🎁 Sorteador de Amigo Secreto

Este é um projeto interativo de **Sorteio de Amigo Secreto**, criado com **HTML**, **CSS** e **JavaScript puro**, ideal para festas e confraternizações.  
Com ele, é possível adicionar participantes, embaralhar os nomes e realizar automaticamente os sorteios sem repetições.

---

## ✨ Funcionalidades

- ➕ **Adicionar Participantes**: Insere os nomes de quem vai participar do sorteio.
- ⚠️ **Validação de Entrada**:
  - Garante que o campo de nome não esteja vazio.
  - Impede a duplicação de nomes.
- 🔄 **Sorteio Automático**:
  - Realiza o sorteio embaralhando os nomes aleatoriamente.
  - Cada pessoa tira outra, formando um ciclo.
- 🔃 **Embaralhamento Aleatório**: Usa o algoritmo de Fisher-Yates para um embaralhamento justo.
- 🧹 **Botão de Reinício**: Limpa a lista de participantes e os resultados para reiniciar o sorteio.

---

## 🧠 Como Funciona

- Os nomes são armazenados em um array `amigos`.
- O botão “Adicionar” verifica o nome, evita duplicatas e atualiza a lista na tela.
- O botão “Sortear”:
  - Verifica se há **pelo menos 4 participantes**.
  - Embaralha os nomes.
  - Gera pares no formato: `Fulano --> Sicrano`.
- A função `embaralha()` implementa o algoritmo Fisher-Yates para embaralhar o array de forma justa.

---

## ⚙️ Tecnologias Utilizadas

- **HTML5** – Estrutura do formulário e exibição das listas.
- **CSS3** – Estilização da interface (opcional, dependendo do seu `style.css`).
- **JavaScript** – Lógica de sorteio, validações e manipulação do DOM.

---

## 💡 Aprendizados

Com este projeto, foi possível praticar:

- Criação e manipulação de arrays
- Validação de inputs em formulários
- Manipulação de elementos HTML com `textContent` e `innerHTML`
- Criação de funções reutilizáveis
- Algoritmo de embaralhamento (Fisher-Yates)

---

## 📬 Contato

- 💻 GitHub: [@jessiepsx](https://github.com/jessiepsx)
- 🔗 LinkedIn: [Jéssica Pereira](https://www.linkedin.com/in/jéssica-pereira-bb1202265)

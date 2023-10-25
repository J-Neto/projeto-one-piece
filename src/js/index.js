//* Objetivo 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado */
// Passo 1.1 - Pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");

//* Objetivo 2 -  Quando clicar no botão do personagem, mostrar as informações do personagem */
// Passo 2.1. - Pegar os personagens no JS para poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    // Passo 1.3 - Verificar se já existe um botão selecionado. Se sim, remover a sua seleção.
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");

    // Passo 1.2 - Adicionar a classe "selecionado" no botão que o usuário clicou
    botao.classList.add("selecionado");

    // Passo 3.3 - Verificar se já existe um personagem selecionado. Se sim, remover a sua seleção.
    personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");

    // Passo 2.3. - Adicionar a classe "selecionado" no personagem que o usuário selecionou.
    personagens[i].classList.add("selecionado");
  });
});

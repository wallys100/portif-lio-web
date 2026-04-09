const projetos = [
  {
    nome: "Portfólio Web",
    descricao: "Projeto desenvolvido para a disciplina",
    link: "#"
  },
  {
    nome: "Landing Page",
    descricao: "Página moderna e responsiva",
    link: "#"
  }
];

const container = document.querySelector(".projetos-container");

projetos.forEach(projeto => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}">Ver projeto</a>
  `;

  container.appendChild(div);
});
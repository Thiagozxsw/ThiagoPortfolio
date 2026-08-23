const app = {
  // Dados e conteúdo da aplicação, incluindo informações pessoais,
  // histórico, projetos, certificados e preferências do usuário.
  data: {
    dadosPadrao: {
      nome: "Thiago Correia",
      cargo: "Desenvolvedor em formação",
      cidade: "Juiz de Fora - MG",
      curso: "Desenvolvimento de Sistemas – Proz Educação",
      objetivo: "Primeira oportunidade em tecnologia",
      descricao:
        "Estou dando meus primeiros passos no desenvolvimento web. Gosto de aprender na prática, resolver problemas e criar projetos que façam diferença.",
    },
    eventosPadrao: [
      {
        periodo: "2023",
        titulo: "Gestão Industrial concluída",
        descricao: "Concluí a formação em Gestão Industrial com foco em processos produtivos.",
        icone: "🎓",
        cor: "#dc2626",
        usuario: false,
      },
      {
        periodo: "2024",
        titulo: "Desenvolvimento de Sistemas em andamento",
        descricao: "Iniciei o curso técnico e aprofundei conhecimento em programação.",
        icone: "💻",
        cor: "#fb7185",
        usuario: false,
      },
      {
        periodo: "2025",
        titulo: "Primeiros projetos em JavaScript",
        descricao: "Criei projetos práticos como contador, lista de tarefas e calculadora.",
        icone: "⚡",
        cor: "#f97316",
        usuario: false,
      },
      {
        periodo: "2026",
        titulo: "Portfólio profissional",
        descricao: "Desenvolvi este portfólio para apresentar minhas habilidades e objetivos.",
        icone: "🧩",
        cor: "#2563eb",
        usuario: false,
      },
      {
        periodo: "Futuro",
        titulo: "Primeira oportunidade em TI",
        descricao: "Meu objetivo é conquistar uma vaga em desenvolvimento ou suporte técnico.",
        icone: "🎯",
        cor: "#22c55e",
        usuario: false,
      },
    ],
    habilidades: [
      { nome: "HTML", porcentagem: 92, categoria: "tecnologia" },
      { nome: "CSS", porcentagem: 86, categoria: "tecnologia" },
      { nome: "JavaScript", porcentagem: 74, categoria: "tecnologia" },
      { nome: "Python", porcentagem: 62, categoria: "tecnologia" },
      { nome: "Git", porcentagem: 70, categoria: "tecnologia" },
      { nome: "GitHub", porcentagem: 75, categoria: "tecnologia" },
      { nome: "Lógica", porcentagem: 84, categoria: "tecnologia" },
      { nome: "Comunicação", porcentagem: 88, categoria: "pessoal" },
    ],
    projetos: [
      {
        titulo: "Contador",
        imagem: "img/projeto-contador.svg",
        descricao: "Contador com valores positivos, negativos e estado persistente em LocalStorage.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "projetos/contador/index.html",
        github: "https://github.com/",
        data: "Março de 2026",
        aprendizados: "Eventos de clique, manipulação do DOM e controle de estado.",
        dificuldade: "Intermediário",
      },
      {
        titulo: "Lista de tarefas",
        imagem: "img/projeto-tarefas.svg",
        descricao: "Organizador de tarefas com filtros, edição e armazenamento local.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "projetos/lista-tarefas/index.html",
        github: "https://github.com/",
        data: "Abril de 2026",
        aprendizados: "Arrays, objetos, filtros e persistência no navegador.",
        dificuldade: "Intermediário",
      },
      {
        titulo: "Calculadora",
        imagem: "img/projeto-calculadora.svg",
        descricao: "Calculadora responsiva para operações do cotidiano com design limpo.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "projetos/calculadora/index.html",
        github: "https://github.com/",
        data: "Maio de 2026",
        aprendizados: "Operadores, validações e tratamento de entradas do usuário.",
        dificuldade: "Intermediário",
      },
      {
        titulo: "Protótipo de clima",
        imagem: "img/projeto-clima.svg",
        descricao: "Protótipo visual com interface de previsão do tempo e design intuitivo.",
        tecnologias: ["HTML", "CSS"],
        link: "#",
        github: "https://github.com/",
        data: "Em planejamento",
        aprendizados: "Planejamento de interface, responsividade e prototipagem rápida.",
        dificuldade: "Básico",
      },
    ],
    certificados: [
      {
        titulo: "Introdução ao Desenvolvimento Web",
        emissor: "Plataforma de Treinamento",
        ano: "2025",
      },
      {
        titulo: "JavaScript para Iniciantes",
        emissor: "Plataforma de Treinamento",
        ano: "2025",
      },
      {
        titulo: "Git e GitHub Básico",
        emissor: "Plataforma de Treinamento",
        ano: "2026",
      },
      {
        titulo: "Acessibilidade em Interfaces",
        emissor: "Plataforma de Treinamento",
        ano: "2026",
      },
    ],
    estudandoAgora: [
      "React básico e componentes reutilizáveis",
      "APIs REST e consumo de dados com JavaScript",
      "Boas práticas de CSS moderno e layout responsivo",
      "Documentação e testes leves para código mais confiável",
    ],
    objetivosProfissionais: [
      "Conquistar a primeira oportunidade em TI como estagiário ou júnior",
      "Aprimorar habilidades em desenvolvimento full stack",
      "Criar interfaces acessíveis e com ótimo desempenho",
      "Automatizar rotinas e entregar software com qualidade",
    ],
    cargos: [
      "Estudante de Desenvolvimento de Sistemas",
      "Futuro desenvolvedor Full Stack",
      "Criador de experiências web elegantes",
      "Apaixonado por lógica e produtividade",
    ],
    indiceCargo: 0,
    indiceLetra: 0,
    apagando: false,
    eventosUsuario: JSON.parse(localStorage.getItem("eventosUsuario")) || [],
    dadosPessoais: JSON.parse(localStorage.getItem("dadosPessoais")) || null,
  },
  // Utilitários de DOM e funções reutilizáveis para escrita limpa.
  utils: {
    qs(selector, parent = document) {
      return parent.querySelector(selector);
    },
    qsa(selector, parent = document) {
      return Array.from(parent.querySelectorAll(selector));
    },
    criarElemento(tag, props = {}) {
      const element = document.createElement(tag);
      Object.entries(props).forEach(([key, value]) => {
        if (key === "className") element.className = value;
        else if (key === "html") element.innerHTML = value;
        else element.setAttribute(key, value);
      });
      return element;
    },
    debounce(fn, delay = 100) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    },
    downloadFile(filename, content, type = "text/plain") {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(new Blob([content], { type }));
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  storage: {
    salvar(chave, valor) {
      localStorage.setItem(chave, JSON.stringify(valor));
    },
    carregar(chave) {
      try {
        return JSON.parse(localStorage.getItem(chave));
      } catch {
        return null;
      }
    },
  },
  ui: {
    toastContainer: null,
    cursor: null,
    lastTransform: "translate(-50%, -50%)",
    showToast(message, tipo = "sucesso") {
      const toast = document.createElement("div");
      toast.className = `toast ${tipo}`;
      toast.textContent = message;
      this.toastContainer.appendChild(toast);
      setTimeout(() => toast.remove(), 4200);
    },
    updateCursor(event) {
      const { clientX: x, clientY: y } = event;
      const transform = `translate(${x}px, ${y}px)`;
      this.cursor.style.transform = transform;
      this.lastTransform = transform;
    },
  },
  aplicarTema(tema) {
    if (!tema) {
      tema = localStorage.getItem("tema");
      if (!tema) {
        tema = window.matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro";
      }
    }
    document.body.classList.toggle("escuro", tema === "escuro");
    const botaoTema = this.utils.qs("#botao-tema");
    botaoTema.textContent = tema === "escuro" ? "☀️" : "🌙";
    botaoTema.title = tema === "escuro" ? "Ativar tema claro" : "Ativar tema escuro";
    botaoTema.setAttribute("aria-label", botaoTema.title);
    localStorage.setItem("tema", tema);
  },
  atualizaDadosTela() {
    const dados = this.data.dadosPessoais || this.data.dadosPadrao;
    const destinos = {
      "#nome-hero": dados.nome,
      "#nome-rodape": dados.nome,
      "#descricao-sobre": dados.descricao,
      "#info-cidade": dados.cidade,
      "#contato-cidade": dados.cidade,
      "#info-curso": dados.curso,
      "#info-objetivo": dados.objetivo,
    };
    Object.entries(destinos).forEach(([seletor, valor]) => {
      const elemento = this.utils.qs(seletor);
      if (elemento) elemento.textContent = valor;
    });
    this.data.cargos[0] = dados.cargo;
  },
  iniciarDigitacao() {
    const texto = this.utils.qs("#texto-digitacao");
    const atual = this.data.cargos[this.data.indiceCargo];
    texto.textContent = atual.slice(0, this.data.indiceLetra);
    if (!this.data.apagando) {
      this.data.indiceLetra += 1;
      if (this.data.indiceLetra > atual.length) {
        this.data.apagando = true;
        setTimeout(() => this.iniciarDigitacao(), 1400);
        return;
      }
    } else {
      this.data.indiceLetra -= 1;
      if (this.data.indiceLetra < 0) {
        this.data.apagando = false;
        this.data.indiceCargo = (this.data.indiceCargo + 1) % this.data.cargos.length;
      }
    }
    setTimeout(() => this.iniciarDigitacao(), this.data.apagando ? 40 : 80);
  },
  carregarLinhaDoTempo() {
    const area = this.utils.qs("#linha-do-tempo");
    area.innerHTML = "";
    [...this.data.eventosPadrao, ...this.data.eventosUsuario].forEach((evento, indice) => {
      const item = this.utils.criarElemento("article", { className: "evento" });
      item.innerHTML = `
        <div class="evento-icone" style="background:${evento.cor}">${evento.icone}</div>
        <small>${evento.periodo}</small>
        <h3>${evento.titulo}</h3>
        <p>${evento.descricao}</p>
      `;
      if (evento.usuario) {
        const botao = this.utils.criarElemento("button", {
          className: "excluir-evento",
          type: "button",
          html: "Excluir",
          "data-indice": indice - this.data.eventosPadrao.length,
        });
        botao.addEventListener("click", () => this.removerEvento(botao.dataset.indice));
        item.appendChild(botao);
      }
      area.appendChild(item);
    });
  },
  removerEvento(indice) {
    this.data.eventosUsuario.splice(Number(indice), 1);
    this.storage.salvar("eventosUsuario", this.data.eventosUsuario);
    this.carregarLinhaDoTempo();
    this.ui.showToast("Evento removido com sucesso.");
  },
  carregarHabilidades(filtro = "todas") {
    const area = this.utils.qs("#lista-habilidades");
    area.innerHTML = "";
    const fragmento = document.createDocumentFragment();
    this.data.habilidades
      .filter((item) => filtro === "todas" || item.categoria === filtro)
      .forEach((item) => {
        const habilidade = this.utils.criarElemento("article", { className: "habilidade" });
        habilidade.innerHTML = `
          <div class="habilidade-topo"><span>${item.nome}</span><span>${item.porcentagem}%</span></div>
          <div class="barra"><span data-largura="${item.porcentagem}%"></span></div>
          <small>${item.categoria}</small>
        `;
        fragmento.appendChild(habilidade);
      });
    area.appendChild(fragmento);
    setTimeout(() => {
      this.utils.qsa(".barra span").forEach((barra) => {
        barra.style.width = barra.dataset.largura;
      });
    }, 50);
  },
  carregarProjetos(filtro = "todos") {
    const area = this.utils.qs("#lista-projetos");
    area.innerHTML = "";
    const fragmento = document.createDocumentFragment();
    this.data.projetos
      .filter((projeto) => filtro === "todos" || projeto.tecnologias.includes(filtro))
      .forEach((projeto, indice) => {
        const card = this.utils.criarElemento("article", { className: "projeto-card" });
        card.innerHTML = `
          <img src="${projeto.imagem}" alt="Imagem do projeto ${projeto.titulo}" />
          <div class="projeto-corpo">
            <h3>${projeto.titulo}</h3>
            <div class="projeto-meta">
              <span>${projeto.data}</span>
              <span>${projeto.dificuldade}</span>
            </div>
            <p>${projeto.descricao}</p>
            <div class="tags">${projeto.tecnologias.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
            <div class="projeto-acoes">
              <a class="botao primario" href="${projeto.link}" ${projeto.link === "#" ? 'aria-disabled="true"' : ""}>Abrir projeto</a>
              <button class="botao terceiro" type="button" data-indice="${indice}">Ver detalhes</button>
            </div>
          </div>
        `;
        fragmento.appendChild(card);
      });
    area.appendChild(fragmento);
    this.utils.qsa(".projeto-acoes button").forEach((botao) => {
      botao.addEventListener("click", () => this.abrirDetalhes(this.data.projetos[Number(botao.dataset.indice)]));
    });
  },
  carregarCertificados() {
    const area = this.utils.qs("#lista-certificados");
    area.innerHTML = "";
    const fragmento = document.createDocumentFragment();
    this.data.certificados.forEach((certificado) => {
      const card = this.utils.criarElemento("article", { className: "certificate-card" });
      card.innerHTML = `
        <h3>${certificado.titulo}</h3>
        <p>${certificado.emissor}</p>
        <small>${certificado.ano}</small>
      `;
      fragmento.appendChild(card);
    });
    area.appendChild(fragmento);
  },
  carregarEstudosAtuais() {
    const area = this.utils.qs("#lista-estudos");
    area.innerHTML = "";
    this.data.estudandoAgora.forEach((item) => {
      const card = this.utils.criarElemento("article", { className: "estudo-card" });
      card.innerHTML = `<h3>${item}</h3>`;
      area.appendChild(card);
    });
  },
  carregarObjetivos() {
    const area = this.utils.qs("#lista-objetivos");
    area.innerHTML = "";
    this.data.objetivosProfissionais.forEach((item) => {
      const card = this.utils.criarElemento("article", { className: "objetivo-card" });
      card.innerHTML = `<h3>${item}</h3>`;
      area.appendChild(card);
    });
  },
  abrirModal(modal) {
    modal.classList.add("aberto");
    modal.setAttribute("aria-hidden", "false");
    const primeiro = modal.querySelector("input,textarea,button");
    if (primeiro) primeiro.focus();
  },
  fecharModal(modal) {
    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");
  },
  abrirDetalhes(projeto) {
    const container = this.utils.qs("#detalhes-projeto");
    container.innerHTML = `
      <h2>${projeto.titulo}</h2>
      <p>${projeto.descricao}</p>
      <div class="projeto-meta">
        <span>${projeto.data}</span>
        <span>${projeto.dificuldade}</span>
      </div>
      <h3>Aprendizados</h3>
      <p>${projeto.aprendizados}</p>
      <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
      <div class="acoes">
        <a class="botao primario" href="${projeto.link}" ${projeto.link === "#" ? 'aria-disabled="true"' : ""}>Abrir projeto</a>
        <a class="botao terceiro" href="${projeto.github}" target="_blank" rel="noopener">GitHub</a>
      </div>
    `;
    this.abrirModal(this.utils.qs("#modal-projeto"));
  },
  salvarDadosPessoais(dados) {
    this.data.dadosPessoais = dados;
    this.storage.salvar("dadosPessoais", dados);
    this.atualizaDadosTela();
    this.ui.showToast("Informações salvas com sucesso.");
  },
  exportarCurriculo() {
    const dados = this.data.dadosPessoais || this.data.dadosPadrao;
    const conteudo = [
      `Nome: ${dados.nome}`,
      `Cargo: ${dados.cargo}`,
      `Cidade: ${dados.cidade}`,
      `Curso: ${dados.curso}`,
      `Objetivo: ${dados.objetivo}`,
      "\nDescrição:",
      dados.descricao,
      "\nProjetos:",
      ...this.data.projetos.map((projeto) => `- ${projeto.titulo} (${projeto.data})`),
    ].join("\n");
    this.utils.downloadFile("curriculo-thiago-correia.txt", conteudo, "text/plain;charset=utf-8");
    this.ui.showToast("Currículo gerado e pronto para download.");
  },
  importarDados(file) {
    const leitor = new FileReader();
    leitor.onload = () => {
      try {
        const dados = JSON.parse(leitor.result);
        if (dados?.nome && dados?.curso) {
          this.salvarDadosPessoais(dados);
          this.ui.showToast("Dados importados com sucesso.");
        } else {
          throw new Error("Arquivo inválido");
        }
      } catch {
        this.ui.showToast("Não foi possível importar o arquivo.", "erro");
      }
    };
    leitor.readAsText(file);
  },
  iniciarContador() {
    const section = this.utils.qs("#estatisticas");
    const contadores = this.utils.qsa("[data-contar]");
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          contadores.forEach((elemento) => {
            const alvo = Number(elemento.dataset.contar);
            let atual = 0;
            const passo = Math.max(1, Math.floor(alvo / 120));
            const intervalo = setInterval(() => {
              atual += passo;
              elemento.textContent = atual >= alvo ? alvo : atual;
              if (atual >= alvo) clearInterval(intervalo);
            }, 18);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });
    if (section) observer.observe(section);
  },
  configuracoesIniciais() {
    this.ui.toastContainer = this.utils.qs("#toast-container");
    this.ui.cursor = this.utils.qs("#cursor");

    if (!this.data.dadosPessoais) {
      this.data.dadosPessoais = this.data.dadosPadrao;
      this.storage.salvar("dadosPessoais", this.data.dadosPessoais);
    }

    this.atualizaDadosTela();
    this.carregarLinhaDoTempo();
    this.carregarHabilidades();
    this.carregarProjetos();
    this.carregarCertificados();
    this.carregarEstudosAtuais();
    this.carregarObjetivos();
    this.aplicarTema();
    this.iniciarDigitacao();
    this.iniciarContador();
    const anoAtual = this.utils.qs("#ano-atual");
    if (anoAtual) anoAtual.textContent = new Date().getFullYear();
  },
  vincularEventos() {
    const botaoMenu = this.utils.qs("#botao-menu");
    const menu = this.utils.qs("#menu");
    botaoMenu.addEventListener("click", () => {
      menu.classList.toggle("aberto");
      botaoMenu.setAttribute("aria-expanded", menu.classList.contains("aberto"));
    });
    this.utils.qsa(".menu a").forEach((link) => {
      link.addEventListener("click", () => menu.classList.remove("aberto"));
    });

    const secoes = this.utils.qsa("main section[id]");
    window.addEventListener("scroll", this.utils.debounce(() => {
      let idAtual = "inicio";
      secoes.forEach((secao) => {
        if (window.scrollY >= secao.offsetTop - 140) idAtual = secao.id;
      });
      this.utils.qsa(".menu a").forEach((link) => {
        link.classList.toggle("ativo", link.getAttribute("href") === `#${idAtual}`);
      });
    }, 50));

    this.utils.qs("#botao-tema").addEventListener("click", () => {
      const tema = document.body.classList.contains("escuro") ? "claro" : "escuro";
      this.aplicarTema(tema);
    });

    this.utils.qs("#editar-dados").addEventListener("click", () => {
      const form = this.utils.qs("#form-dados");
      const dados = this.data.dadosPessoais;
      Object.keys(this.data.dadosPadrao).forEach((campo) => {
        form.elements[campo].value = dados[campo] || "";
      });
      this.abrirModal(this.utils.qs("#modal-dados"));
    });

    this.utils.qs("#form-dados").addEventListener("submit", (evento) => {
      evento.preventDefault();
      const form = evento.currentTarget;
      const dados = {};
      Object.keys(this.data.dadosPadrao).forEach((campo) => {
        dados[campo] = form.elements[campo].value.trim();
      });
      this.salvarDadosPessoais(dados);
      this.fecharModal(this.utils.qs("#modal-dados"));
    });

    this.utils.qs("#form-dados").addEventListener("input", (evento) => {
      const form = evento.currentTarget;
      const rascunho = {};
      Object.keys(this.data.dadosPadrao).forEach((campo) => {
        rascunho[campo] = form.elements[campo].value.trim();
      });
      this.storage.salvar("dadosPessoaisDraft", rascunho);
    });

    this.utils.qs("#exportar-dados").addEventListener("click", () => this.exportarCurriculo());
    this.utils.qs("#importar-dados").addEventListener("click", () => this.utils.qs("#import-file").click());
    this.utils.qs("#import-file").addEventListener("change", (evento) => {
      const arquivo = evento.target.files[0];
      if (arquivo) this.importarDados(arquivo);
      evento.target.value = "";
    });

    this.utils.qs("#download-curriculo").addEventListener("click", () => this.exportarCurriculo());

    this.utils.qs("#form-trajetoria").addEventListener("submit", (evento) => {
      evento.preventDefault();
      const form = evento.currentTarget;
      this.data.eventosUsuario.push({
        periodo: form.periodo.value,
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        icone: "⭐",
        cor: "#8b5cf6",
        usuario: true,
      });
      this.storage.salvar("eventosUsuario", this.data.eventosUsuario);
      form.reset();
      this.carregarLinhaDoTempo();
      this.ui.showToast("Nova conquista adicionada.");
    });

    this.utils.qsa("#filtros-habilidades button").forEach((botao) => {
      botao.addEventListener("click", () => {
        this.utils.qsa("#filtros-habilidades button").forEach((item) => item.classList.remove("ativo"));
        botao.classList.add("ativo");
        this.carregarHabilidades(botao.dataset.filtro);
      });
    });

    this.utils.qsa("#filtros-projetos button").forEach((botao) => {
      botao.addEventListener("click", () => {
        this.utils.qsa("#filtros-projetos button").forEach((item) => item.classList.remove("ativo"));
        botao.classList.add("ativo");
        this.carregarProjetos(botao.dataset.filtro);
      });
    });

    this.utils.qsa(".fechar-modal").forEach((botao) => {
      botao.addEventListener("click", () => this.fecharModal(botao.closest(".modal")));
    });

    this.utils.qsa(".modal").forEach((modal) => {
      modal.addEventListener("click", (evento) => {
        if (evento.target === modal) this.fecharModal(modal);
      });
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        this.utils.qsa(".modal.aberto").forEach((modal) => this.fecharModal(modal));
      }
      // Atalhos inteligentes
      if (evento.altKey && evento.key === "t") {
        const tema = document.body.classList.contains("escuro") ? "claro" : "escuro";
        this.aplicarTema(tema);
        this.ui.showToast(`Tema alterado para ${tema}`);
      }
      if (evento.altKey && evento.key === "p") {
        window.location.hash = "projetos";
      }
    });

    this.utils.qs("#form-contato").addEventListener("submit", (evento) => {
      evento.preventDefault();
      const form = evento.currentTarget;
      const mensagem = this.utils.qs("#mensagem-form");
      if (!form.checkValidity()) {
        mensagem.textContent = "Preencha todos os campos corretamente.";
        return;
      }
      mensagem.textContent = "Mensagem validada com sucesso! Obrigado pelo contato.";
      form.reset();
      this.ui.showToast("Sua mensagem foi enviada localmente.");
      setTimeout(() => (mensagem.textContent = ""), 5000);
    });

    const voltarTopo = this.utils.qs("#voltar-topo");
    window.addEventListener("scroll", () => {
      voltarTopo.classList.toggle("visivel", window.scrollY > 500);
    });
    voltarTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) entrada.target.classList.add("visivel");
      });
    }, { threshold: 0.18 });
    this.utils.qsa(".reveal").forEach((item) => observador.observe(item));

    window.addEventListener("mousemove", (evento) => this.ui.updateCursor(evento));
    this.utils.qsa("button, a").forEach((elemento) => {
      elemento.addEventListener("mouseenter", () => {
        this.ui.cursor.style.transform = `${this.ui.lastTransform} scale(1.4)`;
      });
      elemento.addEventListener("mouseleave", () => {
        this.ui.cursor.style.transform = this.ui.lastTransform;
      });
    });
  },
  init() {
    this.configuracoesIniciais();
    this.vincularEventos();
  },
};

document.addEventListener("DOMContentLoaded", () => app.init());

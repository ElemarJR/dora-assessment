import { Section } from '../types/assessment';

export const assessmentData: Section[] = [
  {
    title: "Entrega Contínua",
    questions: [
      {
        id: 1,
        title: "Controle de Versão",
        description: "O controle de versão é essencial para rastrear mudanças no código e permitir colaboração efetiva entre desenvolvedores. Avalie como sua equipe gerencia isso.",
        text: "Como você classificaria o controle de versão em sua organização?",
        options: [
          { value: 1, text: "Nenhum controle ou apenas backups manuais de código." },
          { value: 2, text: "Uso de sistema para rastreamento de mudanças (SCCS, SVN, Git, etc.)." },
          { value: 3, text: "Sistema de controle de versão que permite mesclar alterações sobrepostas sem bloquear arquivos, incluindo também configuração e/ou testes de unidade." },
          { value: 4, text: "O código abrange configuração, testes e automação de implantação. As alterações são inseridas diariamente e o uso de feature flags está se iniciando." },
          { value: 5, text: "Aprovação em dupla do código da aplicação, incluindo testes, configuração, feature flags e código de infraestrutura. O uso de feature flags é comum e o código é inserido várias vezes por hora." }
        ]
      },
      {
        id: 2,
        title: "Implantações",
        description: "A automação de implantações reduz erros humanos e acelera entregas. Avalie o quanto sua equipe automatizou este processo crítico.",
        text: "Qual o nível de automação nas implantações?",
        options: [
          { value: 1, text: "Nenhuma automação, apenas implantações manuais." },
          { value: 2, text: "Utilização de scripts ad hoc ou listas de verificação manuais para as implantações." },
          { value: 3, text: "Automação abrangente, cobrindo de 70 a 95% dos processos, podendo ou não incluir configuração." },
          { value: 4, text: "Automação de 95% ou mais dos processos, incluindo verificações de testes e configuração, conduzida pela equipe." },
          { value: 5, text: "Processo totalmente automatizado, incluindo verificação, configuração e monitoramento." }
        ]
      },
      {
        id: 3,
        title: "Integração Contínua",
        description: "A integração contínua permite detectar problemas mais cedo através de builds e testes automatizados. Avalie a maturidade deste processo na sua equipe.",
        text: "Como você classificaria a integração contínua em sua organização?",
        options: [
          { value: 1, text: "Sem automação, apenas processos manuais." },
          { value: 2, text: "Builds são agendados ou acionados a partir de um repositório comum de código." },
          { value: 3, text: "Builds incorporam testes básicos de unidade." },
          { value: 4, text: "Builds contam com gates de qualidade que verificam a cobertura de testes de código e realizam análise de segurança." },
          { value: 5, text: "Gates de teste são abrangentes, incluindo testes de integração e regressão." }
        ]
      },
      {
        id: 4,
        title: "Gestão de Branches",
        description: "Uma boa estratégia de branches facilita o desenvolvimento paralelo e entregas. Avalie como sua equipe organiza e gerencia branches no código.",
        text: "Como você classificaria o uso de branches em sua organização?",
        options: [
          { value: 1, text: "Branches desorganizados (falta de documentação) ou sem branches e processo de ramificação (regras ou diretrizes)." },
          { value: 2, text: "Branches baseados em pet. Branches criados como backups ou checkpoints." },
          { value: 3, text: "Branches baseados em projetos ou em ambientes (dev, test, stage, prod)." },
          { value: 4, text: "Branches de longa duração focados em features/histórias (com foco em produto). Pode ou não incluir processo." },
          { value: 5, text: "Branches de história de curta duração que são mesclados ao trunk master." }
        ]
      },
      {
        id: 5,
        title: "Automação de Testes",
        description: "Testes automatizados garantem qualidade e permitem mudanças seguras. Avalie o nível de automação e cobertura dos testes em sua equipe.",
        text: "Como você classificaria a automação de testes em sua organização?",
        options: [
          { value: 1, text: "Nenhum / Testes manuais." },
          { value: 2, text: "Listas de verificação; Scripts escritos para testes manuais." },
          { value: 3, text: "Testes de unidade; Testes de feature; Desenvolvedores principalmente criam e mantêm testes de aceitação." },
          { value: 4, text: "Análise de cobertura orienta os planos de teste; Testes de segurança; Virtualização de serviço usada para integração; Testes são estáveis e precisos." },
          { value: 5, text: "Testes de regressão completos de ponta a ponta contínuos em ambientes criados dinamicamente." }
        ]
      },
      {
        id: 6,
        title: "Dados de Teste",
        description: "Dados de teste bem gerenciados são cruciais para testes efetivos. Avalie como sua equipe cria e mantém dados para testes.",
        text: "Como você classificaria o gerenciamento de dados de teste em sua organização?",
        options: [
          { value: 1, text: "Nenhum; Manual." },
          { value: 2, text: "Dados de teste podem ser copiados." },
          { value: 3, text: "Disponibilidade adequada de dados de teste; Dados de teste são registrados como código." },
          { value: 4, text: "Dados de teste limitam o alcance dos testes que podem ser executados; Dados de teste são minimizados para reduzir o tempo de execução de testes; Dados de teste imitam cenários do mundo real." },
          { value: 5, text: "Dados de teste gerados automaticamente sob demanda; Capacidade de condicionar dados no pipeline." }
        ]
      },
      {
        id: 7,
        title: "Segurança",
        description: "Segurança desde o início do desenvolvimento reduz vulnerabilidades. Avalie como sua equipe integra práticas de segurança no ciclo de desenvolvimento.",
        text: "Como você classificaria as práticas de shift left em segurança em sua organização?",
        options: [
          { value: 1, text: "Sem planejamento ou testes para segurança; Manual." },
          { value: 2, text: "Avaliações de segurança são manuais e feitas após o desenvolvimento e/ou tardiamente nos testes." },
          { value: 3, text: "Verificações irregulares com ferramentas para vulnerabilidades de segurança. Design do produto inclui requisitos de segurança e colaboração com especialistas em segurança." },
          { value: 4, text: "Verificações recorrentes com ferramentas para vulnerabilidades de segurança. A equipe compreende os requisitos de segurança e assume responsabilidade." },
          { value: 5, text: "Verificação automatizada incluída no pipeline de build; tanto estática quanto dinâmica. A equipe monitora o produto para impactos de segurança em tempo real." }
        ]
      },
      {
        id: 8,
        title: "Entrega Contínua (CD)",
        description: "Entrega contínua permite deployments frequentes e confiáveis. Avalie a capacidade da sua equipe de entregar software de forma contínua.",
        text: "Como você classificaria a entrega contínua em sua organização?",
        options: [
          { value: 1, text: "Nenhum / Manual / Lançamentos em cascata / Grande design inicial." },
          { value: 2, text: "Trabalho em pequenos lotes (ou menores). Trabalho com tempo limitado." },
          { value: 3, text: "Uso de sistema pull. Uso de Kanban para permitir fluxo de desenvolvimento." },
          { value: 4, text: "Equipes totalmente capacitadas. Equipes criando/utilizando automação. A última coluna no Kanban significa que o item está totalmente em produção." },
          { value: 5, text: "Automação de todos os processos não relacionados a codificação e revisão de código (Build, Testes, Dados de Teste, Configuração, Implantação, Monitoramento)." }
        ]
      }
    ]
  },
  {
    title: "Arquitetura",
    questions: [
      {
        id: 9,
        title: "Acoplamento",
        description: "Baixo acoplamento permite mudanças independentes e maior resiliência. Avalie o nível de independência entre os componentes do seu sistema.",
        text: "Como você classificaria a arquitetura desacoplada em sua organização?",
        options: [
          { value: 1, text: "Monólitos e sistemas fortemente acoplados por transferências ponto a ponto de dados. Sistemas downstream devem mudar quando sistemas upstream modificam estruturas de dados." },
          { value: 2, text: "Orientação a serviços para sistemas e encapsulamento de sistemas. Abstração das fontes de dados emergente." },
          { value: 3, text: "Uso de APIs para comunicação entre sistemas. Mensagens para eventos independentes." },
          { value: 4, text: "Abstrações de dados versus regras de negócio versus camadas de apresentação." },
          { value: 5, text: "Uso de padrões para design de sistemas distribuídos, e.g., sagas para transações de longa duração." }
        ]
      },
      {
        id: 10,
        title: "Equipes Empoderadas",
        description: "Equipes empoderadas tomam melhores decisões e são mais produtivas. Avalie o nível de autonomia e capacidade de decisão das equipes.",
        text: "Como você classificaria o empoderamento das equipes em sua organização?",
        options: [
          { value: 1, text: "Equipes são instruídas sobre o que trabalhar e têm seus cronogramas definidos por autoridades externas." },
          { value: 2, text: "Participam em decisões relacionadas a cronograma e ferramentas. Escrevem histórias de usuário e definem requisitos." },
          { value: 3, text: "Flexibilidade para escolher ferramentas que se encaixem no ecossistema desejado. Possuem tempo razoável para lidar com trabalho não planejado." },
          { value: 4, text: "Escolhem quando lançar software. Interagem com stakeholders e patrocinadores." },
          { value: 5, text: "Podem levantar problemas e experimentar novas funcionalidades." }
        ]
      }
    ]
  },
  {
    title: "Produto e Processo",
    questions: [
      {
        id: 11,
        title: "Feedback do Cliente",
        description: "Feedback do cliente é vital para melhorar produtos. Avalie como sua equipe coleta e utiliza feedback para guiar o desenvolvimento.",
        text: "Como você classificaria o feedback do cliente em sua organização?",
        options: [
          { value: 1, text: "Nenhum." },
          { value: 2, text: "Coleta ad hoc de feedback do cliente; feedback tardio, como em uma fase de UAT." },
          { value: 3, text: "Coleta regular de métricas do cliente." },
          { value: 4, text: "Busca ativa por insights dos clientes sobre qualidade e funcionalidades; Feedback solicitado cedo no processo de desenvolvimento." },
          { value: 5, text: "Uso de feedback para informar o design de produtos e funcionalidades; Equipes capacitadas para responder ao feedback do cliente; Uso de produtos minimamente viáveis." }
        ]
      },
      {
        id: 12,
        title: "Cadeia de Valor",
        description: "Entender a cadeia de valor ajuda a focar no que importa. Avalie como sua equipe alinha o trabalho com o valor para o negócio.",
        text: "Como você classificaria a compreensão da cadeia de valor em sua organização?",
        options: [
          { value: 1, text: "Sem ligação, ou ligações não documentadas, com valor de negócio subjacente." },
          { value: 2, text: "Estrutura da organização determina, de forma vaga, o valor de negócio do produto." },
          { value: 3, text: "Desenvolvedores entendem o impacto das mudanças na organização como um todo." },
          { value: 4, text: "Consulta regular com proprietários de negócios com visão sobre metas organizacionais." },
          { value: 5, text: "Sinergia completa entre proprietários de negócios e desenvolvedores através de equipes de gerenciamento de produto integradas." }
        ]
      },
      {
        id: 13,
        title: "Lotes de Entrega",
        description: "Entregas em pequenos lotes reduzem riscos e aceleram feedback. Avalie como sua equipe dimensiona e gerencia as entregas.",
        text: "Como você classificaria o trabalho em pequenos lotes em sua organização?",
        options: [
          { value: 1, text: "Trabalho planejado para semanas ou meses em uma abordagem orientada a projetos." },
          { value: 2, text: "Uso de Scrum para dividir grandes projetos e funcionalidades em incrementos de sprint." },
          { value: 3, text: "Decomposição do trabalho em pequenas funcionalidades com uma orientação de produto; Uso de Kanban para gerenciar tempos de lead mais curtos e loops de feedback mais rápidos." },
          { value: 4, text: "Uso de feature flags para permitir a combinação de pequenos incrementos de trabalho em funcionalidades maiores." },
          { value: 5, text: "Mudanças funcionais são implantadas várias vezes por dia; o trabalho é naturalmente dimensionado em unidades muito pequenas." }
        ]
      },
      {
        id: 14,
        title: "Experimentos",
        description: "Experimentos permitem validar hipóteses e reduzir riscos. Avalie como sua equipe usa experimentação para melhorar produtos.",
        text: "Como você classificaria os experimentos em sua organização?",
        options: [
          { value: 1, text: "Nenhum." },
          { value: 2, text: "Teste A-B ou outra estrutura de teste disponível para experimentação." },
          { value: 3, text: "Experimentos podem ser medidos via múltiplas ferramentas e pontos de vista." },
          { value: 4, text: "Busca por atualizar especificações de negócios durante o desenvolvimento para criar valor." },
          { value: 5, text: "Experimentação por desenvolvedores sem necessidade de aprovação externa; Consultas próximas com stakeholders." }
        ]
      }
    ]
  },
  {
    title: "Gestão Lean",
    questions: [
      {
        id: 15,
        title: "Revisão do trabalho",
        description: "Revisões efetivas melhoram qualidade e compartilham conhecimento. Avalie como sua equipe revisa e aprova mudanças no código.",
        text: "Como você classificaria os processos de recisão do trabalho em sua organização?",
        options: [
          { value: 1, text: "Sem automação, apenas processos manuais." },
          { value: 2, text: "Pouco ou nenhum processo para rastrear ou aprovar mudanças. Aprovação fora do time." },
          { value: 3, text: "Processos para aprovação de mudanças no código. Pode incluir configuração e/ou testes (código de teste de unidade)." },
          { value: 4, text: "Aprovação por pares ou equipe de código. Pode incluir testes (código de teste de unidade) e/ou automação de implantação (scripts)." },
          { value: 5, text: "Aprovação em dupla de código, testes, configuração. Inclui também código para infraestrutura (rede, disco e computação)." }
        ]
      },
      {
        id: 16,
        title: "Monitoramento",
        description: "Monitoramento efetivo permite detectar e resolver problemas rapidamente. Avalie como sua equipe monitora sistemas e processos.",
        text: "Como você classificaria o monitoramento em sua organização?",
        options: [
          { value: 1, text: "Monitoramento mínimo ou inexistente. Monitoramento é ad hoc e não relacionado ao valor de negócio." },
          { value: 2, text: "Monitoramento baseado em lotes via processos manuais. Monitoramento é difícil de relacionar ao valor de negócio. Monitoramento é focado apenas em um processo de entrega ou uso da aplicação, mas não em ambos." },
          { value: 3, text: "Exibição visual do trabalho e limites de processo são definidos e aplicados. Monitoramento tanto do processo de entrega quanto da aplicação está emergindo." },
          { value: 4, text: "Métricas definidas para o trabalho, e.g., tempos de ciclo, taxas de defeito. Métricas são visíveis para todos, não apenas para a equipe. Monitoramento tanto do processo de entrega quanto da aplicação tem peso igual." },
          { value: 5, text: "Métricas alinhadas aos objetivos operacionais e valor de negócio. Monitoramento é usado como feedback para processos de entrega." }
        ]
      },
      {
        id: 17,
        title: "Notificação Proativa",
        description: "Notificações proativas permitem ação rápida em problemas. Avalie como sua equipe identifica e comunica questões importantes.",
        text: "Como você classificaria a notificação proativa em sua organização?",
        options: [
          { value: 1, text: "Nenhum." },
          { value: 2, text: "Uso de ferramentas de monitoramento de infraestrutura ou sistemas. Métricas de processo são capturadas." },
          { value: 3, text: "Métricas-chave identificadas, incluindo métricas de sistema, negócio e processo. Métricas de processo incluem tempo de lead, frequência de lançamento e tempo médio de reparo (MTTR)." },
          { value: 4, text: "Dashboards configurados e alertas em vigor para todas as métricas. Métricas são revisadas regularmente." },
          { value: 5, text: "Dados são usados para informar decisões de negócios e processos de planejamento de funcionalidades e trabalho. Coleta e uso de métricas são continuamente refinados para melhores insights." }
        ]
      },
      {
        id: 18,
        title: "Limites de WIP",
        description: "Limitar trabalho em progresso melhora foco e qualidade. Avalie como sua equipe gerencia a quantidade de trabalho simultâneo.",
        text: "Como você classificaria os limites de WIP em sua organização?",
        options: [
          { value: 1, text: "Nenhum." },
          { value: 2, text: "Processos de Trabalho Padronizados." },
          { value: 3, text: "Kanban (Sprint ou Entrega Contínua). Processo está sendo otimizado para fluxo de trabalho." },
          { value: 4, text: "Limites identificados e aplicados (sem dados ou por entidade externa). O fluxo é definido. Sobrecarga é limitada." },
          { value: 5, text: "Trabalho em pequenos lotes. Equipe usa dados para definir seus próprios limites de WIP (não uma entidade externa). Sem sobrecarga." }
        ]
      },
      {
        id: 19,
        title: "Acompanhamento",
        description: "Visualizar o trabalho ajuda a identificar gargalos e melhorar processos. Avalie como sua equipe acompanha e visualiza o progresso.",
        text: "Como você classificaria a visualização do trabalho em sua organização?",
        options: [
          { value: 1, text: "Sem processo / Relatórios ad hoc ou manuais." },
          { value: 2, text: "Processo definido (leve ou abrangente). Relatórios recorrentes (manuais ou automáticos)." },
          { value: 3, text: "Painéis de histórias / Kanban. Dashboards visíveis ou exibições na parede. Hierarquia de produtos." },
          { value: 4, text: "Atualizações em tempo real sobre defeitos, taxas de defeito, etc. Itens trabalhados ligados a atualizações de código." },
          { value: 5, text: "Todas as informações são publicamente disponíveis. Compreensão compartilhada com a alta gerência. Técnicas avançadas (AR, VR)." }
        ]
      }
    ]
  },
  {
    title: "Cultura",
    questions: [
      {
        id: 20,
        title: "Desempenho",
        description: "Uma cultura de alto desempenho promove inovação e melhoria contínua. Avalie como sua organização aborda cooperação e aprendizado.",
        text: "Como você classificaria a cultura orientada para o desempenho em sua organização?",
        options: [
          { value: 1, text: "Baixa cooperação e organizações em silos com interação mínima entre elas." },
          { value: 2, text: "Novidade desencorajada. Silos estão bem definidos com responsabilidades estreitas e possuem interfaces burocráticas." },
          { value: 3, text: "Cooperação modesta entre equipes e entre a organização; Compartilhamento de informações é limitado." },
          { value: 4, text: "Análise de causa raiz é objetiva. Experimentação é abraçada ou encorajada. Responsabilidades são discutidas em termos de risco geral." },
          { value: 5, text: "Alta cooperação. Bom fluxo de informações. Falhas são oportunidades para melhorar o sistema. Riscos são compartilhados entre equipes." }
        ]
      },
      {
        id: 21,
        title: "Apoio ao Aprendizado",
        description: "Aprendizado contínuo é essencial para inovação. Avalie como sua organização incentiva e suporta o desenvolvimento profissional.",
        text: "Como você classificaria o apoio ao aprendizado em sua organização?",
        options: [
          { value: 1, text: "Aprendizado é invisível ou inexistente." },
          { value: 2, text: "Aprendizado é um custo. Tempo para aprendizado é considerado improdutivo e interfere no trabalho real." },
          { value: 3, text: "Aprendizado é orçado e visível. Aprendizado é considerado um benefício ou é reservado para recursos selecionados. Recursos têm capacidade limitada para escolher tópicos de aprendizado." },
          { value: 4, text: "Aprendizado com base em clientes e uso real do sistema. Aprendizado é um investimento amplamente disponível. Mentoria é apoiada." },
          { value: 5, text: "Aprendizado é contínuo. Aprendizado incorpora visões de todos os stakeholders. Aprendizado é encorajado como curso normal de trabalho. Mentoria é vista como prática de aprendizado." }
        ]
      },
      {
        id: 22,
        title: "Colaboração",
        description: "Colaboração efetiva acelera entregas e melhora resultados. Avalie como as equipes trabalham juntas em sua organização.",
        text: "Como você classificaria a colaboração entre equipes em sua organização?",
        options: [
          { value: 1, text: "Pouca confiança e pouca interação entre equipes. Colaboração ocorre tardiamente no processo." },
          { value: 2, text: "Equipes exigem processos excessivamente formais para colaboração." },
          { value: 3, text: "Equipes constroem e apoiam processos de transferência de conhecimento e boa documentação." },
          { value: 4, text: "Liderança apoia assistência entre equipes, em vez de aderir a silos definidos. Equipes exibem confiança em outras equipes." },
          { value: 5, text: "Recursos são encorajados a mover-se entre departamentos. Sucessos são compartilhados e celebrados no nível organizacional. Trabalho que facilita a colaboração é recompensado continuamente." }
        ]
      },
      {
        id: 23,
        title: "Satisfação no Trabalho",
        description: "Satisfação no trabalho impacta produtividade e retenção. Avalie o nível de engajamento e satisfação dos funcionários.",
        text: "Como você classificaria a satisfação no trabalho em sua organização?",
        options: [
          { value: 1, text: "Palavras negativas são usadas para descrever os itens de trabalho e o ambiente de trabalho. Trabalho orientado para tarefas é atribuído aos membros da equipe por outros." },
          { value: 2, text: "O trabalho atribuído aproveita o conjunto de habilidades dos funcionários. As ferramentas certas estão disponíveis para realizar o trabalho necessário." },
          { value: 3, text: "A aquisição de ferramentas é apoiada. Todos os membros se sentem bem-vindos e valorizados. Os membros da equipe escolhem o trabalho de uma lista priorizada de funcionalidades criada pelo negócio." },
          { value: 4, text: "As cargas de trabalho são consistentes e contínuas. Equipes têm discussões espontâneas e membros estão ansiosos para contribuir. O julgamento da equipe é apoiado em toda a organização." },
          { value: 5, text: "Quando problemas são levantados, eles são vistos como oportunidades para resolver problemas. Funcionários se identificam com a organização e têm um senso de contribuição. Colaboração entre diferentes formações é encorajada." }
        ]
      },
      {
        id: 24,
        title: "Transformação",
        description: "Liderança transformacional inspira mudança positiva. Avalie como os líderes motivam e guiam a organização.",
        text: "Como você classificaria a liderança transformacional em sua organização?",
        options: [
          { value: 1, text: "Nenhuma direção clara ou compreensão da visão da organização. Feedback positivo é raro." },
          { value: 2, text: "Liderança transacional focada em medições detalhadas e pouco reconhecimento para abordagens diferentes. Apoia o status quo." },
          { value: 3, text: "Equipes e liderança concordam sobre alinhamento e progresso em direção às metas. Visões mais amplas e holísticas são encorajadas." },
          { value: 4, text: "A visão de longo prazo é articulada por meio de uma comunicação motivadora sobre metas e direções compartilhadas." },
          { value: 5, text: "A liderança confia na equipe e apoia a experimentação da equipe para realizar a visão. Apoia tanto indivíduos quanto os objetivos mais amplos." }
        ]
      }
    ]
  }
];

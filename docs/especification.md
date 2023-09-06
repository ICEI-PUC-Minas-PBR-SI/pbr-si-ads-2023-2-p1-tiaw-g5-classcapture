# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Lara é uma jovem de 18 anos, uma estudante dedicada que atualmente está cursando o 3º ano do ensino médio na cidade de Contagem. Em seu dia dia, após suas aulas regulares, ela investe suas tardes em um cursinho preparatório para o vestibular. Seu maior sonho é conquistar uma vaga na faculdade de medicina, e ela está determinada a alcançar esse objetivo no ano seguinte, logo após concluir o ensino médio. Lara é bastante antenada em metodologia de estudos e sempre que pode consome conteúdos sobre eficiência de aprendizagem, buscando aprimorar cada vez mais seu desempenho. Por ser uma area de grande entusiamos para ela, Lara gostaria de um plataforma que a possibilitasse compartilhar seus estudos, como resumo, mapas mentais e anotações para que ela e seus colegas de turma possam ter uma interação que se estende a sala de aula.

Fernanda tem 17 anos, é solteira e mora em um condomínio de apartamento com seus pais em Belo Horizonte. Atualmente está finalizando o ensino medio na escola estadual Olinto Meireles. Nasceu e morou em Governador Valadares até os 10 anos de idade, até seu pai receber uma proposta melhor de emprego em Belo Horizonte. Gosta de cantar, cozinhar, ler e sair. Deseja um aplicativo que a ajude organizar as fotos na galeria do celular e insumos produzidos em aula por ela ou pelo professor, como videos, PDFs e atividades. Pois com a reta final do ensino medio e com o Enem chegando ela quer se organizar melhor para conseguir uma boa nota e entrar na UFMG que é seu sonho.

Douglas, um jovem de 22 anos, solteiro e residente em Belo Horizonte, enfrenta um cotidiano agitado. Durante o dia, Douglas trabalha como repositor em um supermercado, enquanto à noite se dedica à faculdade no curso de Direito. Ele é um estudante dedicado, sempre preocupado com seu desempenho acadêmico. Contudo, Douglas enfrenta um certo desafio diário: a dificuldade de manter o foco no que o professor diz e, ao mesmo tempo, fazer anotações detalhadas. Ele percebeu que o melhor a se fazer é concentrar-se completamente na explicação do professor para entender e absorver o máximo de conhecimento possível. Ao término de cada aula, Douglas costuma tirar fotos do quadro ou slides para revisar mais tarde em casa. No entanto, enfrenta um certo problema de como organizar efetivamente essas fotos. Geralmente, essas fotos se perdem na galeria do seu dispositivo, e ele não consegue determinar a data ou a origem de cada foto, o que gera uma certa confusão.
Então, certo dia, um amigo de Douglas apresentou-lhe um aplicativo chamado ClassCapture, um app que tem a funcionalidade de organizar fotos do quadro e slides. Com o tempo, Douglas percebeu que o aplicativo atendia todas as suas necessidades. Ele podia criar pastas personalizadas para cada matéria, e o aplicativo automaticamente registrava a data e hora de cada foto, proporcionando um registro preciso do momento em que cada conteúdo foi apresentado.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

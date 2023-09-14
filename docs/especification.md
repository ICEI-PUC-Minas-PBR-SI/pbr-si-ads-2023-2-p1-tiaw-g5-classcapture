# Especificações do Projeto

A plataforma "ClassCapture" busca resolver desafios enfrentados por estudantes e professores. Ela visa melhorar a recuperação de informações, facilitar o acompanhamento do desempenho dos alunos e promover interações entre eles. Professores podem classificar notas e disponibilizar materiais, contribuindo para o acompanhamento da turma. O objetivo é criar uma ferramenta completa para aprimorar a experiência acadêmica, simplificando o compartilhamento de conhecimento.

Técnicas e Ferramentas Utilizadas no projeto "ClassCapture":
• Visual Studio Code (VSCode): Utilizado como ambiente de desenvolvimento integrado (IDE) para escrever, editar e gerenciar o código-fonte do projeto.

- Desenvolvimento Front-end:
• HTML: Utilizado para criar a estrutura básica do site, incluindo páginas, formulários e elementos de interface do usuário.
• CSS: Empregado para estilizar e formatar o site, tornando-o visualmente atraente e responsivo.
• Bootstrap: Usado como framework para facilitar o design e a responsividade da interface do usuário.

- Back-end Fictício:
• CRUD (Create, Read, Update, Delete): Implementado para realizar operações básicas de gerenciamento de dados, como criação, leitura, atualização e exclusão de informações.

- Armazenamento de Dados:
• Local Storage: Utilizado para armazenar temporariamente os dados do aplicativo no navegador do usuário, permitindo que as informações persistam entre sessões.

- Controle de Versões:
• Git: Usado para o controle de versões do código-fonte, permitindo o acompanhamento das alterações ao longo do desenvolvimento do projeto.
• GitHub: Plataforma de hospedagem de código-fonte que facilita o trabalho colaborativo e o compartilhamento de projetos entre usuários.

## Personas

Lara é uma jovem de 18 anos, uma estudante dedicada que atualmente está cursando o 3º ano do ensino médio na cidade de Contagem. Em seu dia dia, após suas aulas regulares, ela investe suas tardes em um cursinho preparatório para o vestibular. Seu maior sonho é conquistar uma vaga na faculdade de medicina, e ela está determinada a alcançar esse objetivo no ano seguinte, logo após concluir o ensino médio. Lara é bastante antenada em metodologia de estudos e sempre que pode consome conteúdos sobre eficiência de aprendizagem, buscando aprimorar cada vez mais seu desempenho. Por ser uma area de grande entusiamos para ela, Lara gostaria de um plataforma que a possibilitasse compartilhar seus estudos, como resumo, mapas mentais e anotações para que ela e seus colegas de turma possam ter uma interação que se estende a sala de aula.

Fernanda tem 17 anos, é solteira e mora em um condomínio de apartamento com seus pais em Belo Horizonte. Atualmente está finalizando o ensino medio na escola estadual Olinto Meireles. Nasceu e morou em Governador Valadares até os 10 anos de idade, até seu pai receber uma proposta melhor de emprego em Belo Horizonte. Gosta de cantar, cozinhar, ler e sair. Deseja uma plataforma que a ajude organizar as fotos na galeria do celular e insumos produzidos em aula por ela ou pelo professor, como videos, PDFs e atividades. Pois com a reta final do ensino medio e com o Enem chegando ela quer se organizar melhor para conseguir uma boa nota e entrar na UFMG que é seu sonho.

Douglas, um jovem de 22 anos, solteiro e residente em Belo Horizonte, enfrenta um cotidiano agitado. Durante o dia, Douglas trabalha como repositor em um supermercado, enquanto à noite se dedica à faculdade no curso de Direito. Ele é um estudante dedicado, sempre preocupado com seu desempenho acadêmico. Contudo, Douglas enfrenta um certo desafio diário: a dificuldade de manter o foco no que o professor diz e, ao mesmo tempo, fazer anotações detalhadas. Ele percebeu que o melhor a se fazer é concentrar-se completamente na explicação do professor para entender e absorver o máximo de conhecimento possível. Ao término de cada aula, Douglas costuma tirar fotos do quadro ou slides para revisar mais tarde em casa. No entanto, enfrenta um certo problema de como organizar efetivamente essas fotos. Geralmente, essas fotos se perdem na galeria do seu dispositivo, e ele não consegue determinar a data ou a origem de cada foto, o que gera uma certa confusão.
Então, certo dia, um amigo de Douglas apresentou-lhe uma plataforma chamado ClassCapture, um app que tem a funcionalidade de organizar fotos do quadro e slides. Com o tempo, Douglas percebeu que a plataforma atendia todas as suas necessidades. Ele podia criar pastas personalizadas para cada matéria e registrar o conteúdo contendo a data e a hora.

Marcelo é um jovem adulto de 24 anos que atualmente estuda Relações Internacionais e faz estágio na área. Marcelo se dedica bastante ao seu trabalho, almejando ser efetivado na empresa em que está. Por fazer isso muitas vezes, ele acaba ficando esgotado quando chega à faculdade no turno da noite e não consegue dar 100% de atenção para a aula. Por conta desse cansaço, ele acaba não anotando o conteúdo dado em sala. Então, ele desenvolveu o costume de tirar fotos do quadro para poder revisar o conteúdo em casa. No entanto, com certa frequência, quando vai estudar para uma prova ou trabalho importante, ele acaba se perdendo em meio a tantas fotos em sua galeria. Marcelo procura constantemente por uma ferramenta que possam ajudá-lo a se organizar em seus estudos.

Fernando é um professor de Matemática de 45 anos, formado na UFMG. Atualmente, trabalha em duas escolas, uma na região da Pampulha e outra na região do Barreiro. No seu dia-a-dia, ele passa a maior parte do tempo lecionando, e nos fins de semana, Fernando auxilia alguns estudantes com aula particular. Como o cotidiano de Fernando é bastante movimentado, com diversas tarefas, notas e trabalhos, ele necessita de bastante controle, e às vezes, fazer isso sozinho gera bastante sobrecarregamento. Fernando procura constantemente por uma ferramenta que possa organizar e distribuir as tarefas para que o auxilie em seu trabalho e economize seu tempo.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Estudante  | Armazenar, organizar e compartilhar conteúdo produzido em sala | Aumentar a eficiência nos estudos |
|Professor       | Distribuir atividades e avaliar os alunos através da avaliação por pares | Aumentar a interatividade do aluno e atribuir terefas de forma automatizada |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir o cadastro dos alunos | ALTA |  |
|RF-002| Permitir o cadastro dos professores  | ALTA | |
|RF-003| Permitir a criação de pastas para que os alunos possa armazenar os insumos produzidos em aula | ALTA | |
|RF-004| Permitir que o professor tenha a possibilidade de avaliar os alunos através da avaliação por pares | MÉDIA | |
|RF-005| Permitir que cada aluno possa editar suas informações no perfil | ALTA | |
|RF-006| Permitir a interação entre alunos e professores através do forum | BAIXA | |
|RF-007| Permitir que o aluno possa compartilhar o seus estudos | MÉDIA | |
|RF-008| Permitir que o professor possa distribuir atividades | MÉDIA | |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve conter uma interface intuitiva e amigável | ALTA |
|RNF-004| O sistema deve ser acessivel para usuário que usam leitores de tela | ALTA |
|RNF-005| O sistema deve ser compatível com diferentes navegadores | MÉDIA |
|RNF-006| O sistema deve permitir a redefinição de senha | ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O desenvolvimento do projeto estará limitado a 8 alunos |
|04| O aplicativo deve se restringir às tecnologias básicas do Front-end |
|05|	O sistema deve garantir a segurança das informações dos usuários |
|06|	O sistema deve ser capaz de lidar com um grande volume de acessos simultâneos |
|07| O sistema deve ter backups regulares para garantir o armazenamento e a disponibilidade dos dados |

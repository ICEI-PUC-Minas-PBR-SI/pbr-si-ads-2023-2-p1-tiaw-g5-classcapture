# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

# Teste de Software

## Plano de Testes de Software


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa e-mail, nome completo, nome de acesso, senha, confirmação de senha e clica no botão "Finalizar Cadastro".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.html.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação do cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa e-mail, nome completo, nome de acesso, senha, confirmação de senha e clica no botão "Finalizar Cadastro".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A Aplicação informa que os dados não estão nos padrões aceitaveis.
**Requisitos associados** | RF-001
**Resultado esperado** | Mensagem de erro nos campos.
**Dados de entrada** | Inserção de dados inválidos no formulário de cadastro.
**Resultado obtido** | Falha.

**Caso de Teste** | **CT03 - Login parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome de acesso, senha, e clica no botão "Entrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela home.html.
**Requisitos associados** | RF-012
**Resultado esperado** | Login efetuado.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Login parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome de acesso, senha, e clica no botão "Entrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A Aplicação informa que os dados não estão de acordo com o formulário de cadastro.
**Requisitos associados** | RF-012
**Resultado esperado** | Login não efetuado.
**Dados de entrada** | Inserção de dados inválidos no formulário de cadastro.
**Resultado obtido** | Falha.

**Caso de Teste** | **CT05 - Tela Home**
 :--------------: | ------------
**Procedimento**  | 1) Caso o usuário queira fazer uma assinatura, clicando no botão "Fazer assinatura" e inserindo os dados para efetuar a compra da assinatura.<br>2) A aplicação verifica se os dados de compra são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela home.html.
**Requisitos associados** | RF-004
**Resultado esperado** | Compra efetuada.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Tela Dashboard - Tarefa**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica no botão "Digita sua nova tarefa" e coloca o nome da tarefa que deseja armazenar.<br>2) A aplicação armazena os dados e adiciona a tarefa na tela dashboard.html.
**Requisitos associados** | RF-006
**Resultado esperado** | Tarefa criada
**Dados de entrada** | Nome da nova tarefa.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Tela Dashboard - Gráfico**
 :--------------: | ------------
**Procedimento**  | 1) Usuário seleciona as matérias de sua grade curricular e preenche nos campos vázios o número de sua nota.<br>2) A aplicação armazena os dados e adiciona o cálculo da nota e o gráfico comparativo na tela dashboard.html.
**Requisitos associados** | RF-006
**Resultado esperado** | Gráfico criado.
**Dados de entrada** | Números das notas de matérias.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Tela Dashboard - Anotações**
 :--------------: | ------------
**Procedimento**  | 1) Usuário preenche no campo de anotação vázio o texto que quer anotar.<br>2) A aplicação armazena o texto e adiciona a mensagem nas anotações da tela dashboard.html.
**Requisitos associados** | RF-006
**Resultado esperado** | Anotação criada.
**Dados de entrada** | Texto da anotação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Tela Dashboard - Foto Perfil**
 :--------------: | ------------
**Procedimento**  | 1) Usuário adiciona a foto de perfil na tela perfil.html.<br>2) A aplicação armazena a imagem e adiciona no campo de imagem de perfil da tela dashboard.html.
**Requisitos associados** | RF-006
**Resultado esperado** | Foto criada.
**Dados de entrada** | Imagem do perfil.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 - Tela Perfil**
 :--------------: | ------------
**Procedimento**  | 1) Usuário adiciona a foto de perfil na tela perfil.html e pode alterar os dados de cadastro.<br>2) A aplicação armazena a imagem e adiciona no campo de imagem de perfil nas telas dashboard.html e perfil.html.<br>3) A aplicação armazena os novos dados de cadastro do perfil nas telas dashboard.html e perfil.html.
**Requisitos associados** | RF-005
**Resultado esperado** | Dados alterados.
**Dados de entrada** | Imagem do perfil e alteraçaões dos dados de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT11 - Tela Galeria**
 :--------------: | ------------
**Procedimento**  | 1) Usuário adiciona as imagens na pasta para serem adicionadas na tela galeria.html clicando no quadrado "Choose a image".<br>2) A aplicação armazena a imagem e adiciona nos campos de imagens correspondentes em sequência na tela galeria.html.
**Requisitos associados** | RF-003
**Resultado esperado** | Imagens adicionadas.
**Dados de entrada** | Imagem do perfil e alteraçaões dos dados de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT12 - Tela Faltas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário adiciona a quantidade de aulas de uma matéria no campo "Número total de aulas" e a quantidade de faltas no campo "Número de faltas totais".<br>2) A aplicação armazena as informações de quantidade de aulas e faltas e faz o cálculo se o usuário pode faltar na matéria.
**Requisitos associados** | RF-009
**Resultado esperado** | Informações sobre a quantidade de faltas.
**Dados de entrada** | Número da quantidade de aulas e faltas totais da matéria.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta (usuário autenticado e não autenticado)*                                         |
|---|---|
|Requisito Associado | RF-001	Permitir o cadastro dos alunos (Cadastro).|
|Link do vídeo do teste realizado: | https://www.dropbox.com/scl/fi/4jv2g7zih2u7dx27d2id7/cadastro.webm?rlkey=gdih7tzrd6fqejhy7iq2eompm&dl=0 | 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado e não autenticado)*                                         |
|---|---|
|Requisito Associado | RF-012	Permitir realizar o login para acessar recursos do site (Login).|
|Link do vídeo do teste realizado: | https://www.dropbox.com/scl/fi/ocek6m6fccts77ln9hyhp/login.webm?rlkey=uqvlznuzmq4611ysjvi22i3xf&dl=0 | 

|*Caso de Teste*                                 |*TC-03 - Tela Home (Assinatura e redirecionamento a outras páginas)*                                         |
|---|---|
|Requisito Associado | RF-011	Permitir que o usuário visualize o site antes de fazer o login (Tela inicial).|
|Link do vídeo do teste realizado: | https://www.dropbox.com/scl/fi/m882z5hhutmi99bo1v2ro/home_telas.webm?rlkey=zz27pbe82vn5r3836ejftqz7i&dl=0 - https://www.dropbox.com/scl/fi/ys4yi0kd3zhrufnqz3hpo/home_assinatura.webm?rlkey=ovq6jm6utcz5jawqszf0vuf4z&dl=0 | 

|*Caso de Teste*                                 |*TC-04 - Tela Dashboard (Tarefas, gráfico, anotações e foto perfil)*                                         |
|---|---|
|Requisito Associado | RF-006	Permitir que o aluno tenha controle de suas notas (Dashboard).|
|Link do vídeo do teste realizado: | https://www.dropbox.com/scl/fi/ii7beku8rn4pgxb8iy06l/dashboard.webm?rlkey=xckw9sinwethqe8z1xgp9vg2b&dl=0 | 

|*Caso de Teste*                                 |*TC-05 - Tela Perfil (Trocar foto perfil e dados cadastro)*                                         |
|---|---|
|Requisito Associado | RF-005	Permitir que cada aluno possa editar suas informações no perfil (Perfil).|
|Link do vídeo do teste realizado: | https://www.dropbox.com/scl/fi/upt4phn9pxu7qqw2wdl1x/perfil-foto.webm?rlkey=axe6ey3sb4hqq6c844k5w0t8b&dl=0 | 

|*Caso de Teste*                                 |*TC-06 - Tela Galeria (Adicionando imagens na pasta da galeria)*                                         |
|---|---|
|Requisito Associado | RF-003	Permitir a criação de pastas para que os alunos possa armazenar os insumos produzidos em aula (Galeria).|
|Link do vídeo do teste realizado: | https://www.dropbox.com/scl/fi/e3xr1uhv78v5rudxle48w/galeria.webm?rlkey=q73pyccdcacpbfw3duc3hhfrq&dl=0 | 

|*Caso de Teste*                                 |*TC-07 - Tela Faltas (Adicionando qtde. de aulas e faltas totais de uma matéria)*                                         |
|---|---|
|Requisito Associado | RF-009	Permitir que o aluno tenha controle de suas faltas em cada disciplina (Controle de faltas).|
|Link do vídeo do teste realizado: | https://www.dropbox.com/scl/fi/biky5uglhb7zbxm52qyzs/faltas.webm?rlkey=y8i2o1wn8qdd9pjfblvrhz2zp&dl=0 | 

|*Caso de Teste*                                 |*TC-08 - Teste End to end*                                         |
|---|---|
|Descrição: | Testando todo o site e funcionalidades por completo.|
|Link do vídeo do teste realizado: | https://www.dropbox.com/scl/fi/t1yyfcvue2c9toacwk175/endtoend.webm?rlkey=fycn0qdd9i9qjl8360d39vnpa&dl=0 | 



## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja acessar o controle de faltas de uma matéria. Encontre no site a aba Faltas e faça o cálculo da quantidade de aulas e faltas totais que possuí em uma matéria. |
| 2             | Você é uma pessoa que deseja acessar o dashboard de controle de notas de uma matéria. Encontre no site a aba Dashboard e adicione a nota que tem em cada matéria e as tarefas que precisa finalizar. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja acessar o controle de faltas de uma matéria. Encontre no site a aba Faltas e faça o cálculo da quantidade de aulas e faltas totais que possuí em uma matéria.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 10 segundos                  |
| 2       | SIM             | 5                    | 30 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 20 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15 segundos |


    Comentários dos usuários: O site corresponde com o que eu estava procurando para saber quantas faltas ainda poderia ter em uma matéria.




Cenário 2:  Você é uma pessoa que deseja acessar o dashboard de controle de notas de uma matéria. Encontre no site a aba Dashboard e adicione a nota que tem em cada matéria e as tarefas que precisa finalizar.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 50 segundos                          |
| 2       | SIM             | 5                    | 40 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 45 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 45 segundos |


    Comentários dos usuários: O site correspondeu com os dados de controle de notas e taredas em cada matéria, algo que precisava saber.




## Avaliação dos Testes de Usabilidade


Com base nos resultados obtidos nos testes de usabilidade, constatamos que a aplicação web apresentou eficiência significativa na interação dos usuários, resultando na conclusão bem-sucedida de todos os cenários propostos.

Adicionalmente, os usuários expressaram uma elevada satisfação subjetiva ao realizar os cenários. As avaliações médias para cada cenário variaram entre 5 (ótimo), indicando que a experiência do usuário foi positiva e atendeu às expectativas.

Ao analisar o tempo médio de conclusão de cada tarefa/cenário, observamos que não há discrepância entre a média de tempo dos usuários e o tempo registrado pelo especialista/desenvolvedor em todos os cenários. Não teve uma discrepância pelo motivo das tarefas solicitadas serem fáceis de serem executadas.

Diante dessas observações, identificamos áreas potenciais para otimização, visando proporcionar uma experiência ainda mais eficiente e satisfatória aos usuários. A equipe de desenvolvimento pode considerar essas informações para aprimorar a usabilidade da aplicação e garantir uma experiência positiva para todos os usuários.










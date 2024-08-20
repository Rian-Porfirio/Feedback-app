# Feedback App
Este é um projeto desenvolvido em React, onde os feedbacks são gerenciados com dados inseridos e buscados de um arquivo local db.json. O projeto permite que os usuários adicionem feedbacks com uma avaliação de 1 a 10, editem, excluam e calculem a média das avaliações.

## Funcionalidades
Adicionar Feedback: O usuário pode escrever um feedback e atribuir uma nota entre 1 e 10. O feedback deve conter pelo menos 10 caracteres.
![image](https://github.com/user-attachments/assets/ce46c4e6-2fc3-4bfe-9343-6c1b95249a8a)
![image](https://github.com/user-attachments/assets/46e0b3da-72bc-4aa6-bfc1-b64b01bc8d1b)
![image](https://github.com/user-attachments/assets/b8987f17-3140-4a1c-8760-8f918dc1ac28)
![image](https://github.com/user-attachments/assets/d1b06989-610c-4862-9be4-d32032b75253

### Média das Notas: O sistema calcula automaticamente a média das avaliações fornecidas pelos usuários.
![image](https://github.com/user-attachments/assets/4a3e09c2-6480-4ab4-a2c6-f5ff519224ca)


### Editar Feedback: O feedback existente pode ser editado diretamente pelo usuário.

Excluir Feedback: Feedbacks indesejados podem ser removidos.
![Desktop_1_1](https://github.com/user-attachments/assets/f20079ac-12d0-4c0e-8863-1cb989d2f636)


# Como Rodar o Projeto
Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos
Node.js instalado

### Passo a Passo
###### Clone o Repositório

```
git clone https://github.com/seu-usuario/feedback-app.git
cd feedback-app
code .
```
###### Instale as Dependências

Use o comando abaixo para instalar as dependências necessárias do projeto:

```
npm install
```

###### Configure o JSON Server

O projeto utiliza o json-server para gerenciar o arquivo db.json. Para rodá-lo, use o comando abaixo:

```
Copy code
npx json-server --watch db.json --port 5000
```
Nota: O projeto está configurado para usar a porta 5000. Caso essa porta já esteja em uso, você pode alterar o número da porta, mas lembre-se de ajustar o arquivo de contexto no projeto para usar a nova porta.

###### Rode o Projeto

Para iniciar a aplicação React, utilize o comando:

```
npm start
Acesse o Projeto
```

O projeto estará rodando em *http://localhost:3000* e o servidor JSON estará acessível em *http://localhost:5000/feedback*.

# Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces.
JSON Server: Simula uma API REST para manipulação dos dados.
CSS: Estilização personalizada da interface.

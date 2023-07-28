# Projeto de Estudos com Docker

Este é um projeto de estudos desenvolvido utilizando Docker e Cypress.

## Descrição

Este projeto tem como objetivo proporcionar uma prática efetiva no uso do Docker, bem como a realização de testes de backend automatizados com o Cypress. Os testes foram feitos em cima da [API](https://github.com/KubeDev/api-produto/tree/main) criada pelo Professor Fabricio Veronez, no curso de Docker da Devops Pro.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Node.js (versão 12.18.3 ou superior)
- Cypress (versão 12.17.1 ou superior)

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/gabrielfeola/docker-project.git

2. Navegue até o diretório do projeto:
    ```bash
    cd docker-project

## Executando o projeto

1. Inicie os serviços do projeto em modo detached (em segundo plano) usando o Docker Compose:
    ```bash
    docker-compose up -d
    ```
    Esse comando criará e executará os containers necessários para o projeto, incluindo a execução dos testes automatizados pelo Cypress.

2. Aguarde até que os serviços estejam completamente configurados e em execução. Isso pode levar alguns segundos ou minutos.

3. Caso queira visualizar os logs dos testes executados em modo "headless" (sem interface gráfica), você pode usar o seguinte comando para exibir os logs do container do Cypress:
    ```bash
    docker container logs docker-project-cypress-1
    ```
    Os logs mostram o andamento dos testes, bem como qualquer possível erro ou mensagem de sucesso.

4. Enquanto os containers estão em execução, é possível acessar a documentação da API para mais informações: http://localhost:8080/api-docs/
    

5. Para encerrar a execução do projeto e parar os serviços, execute o seguinte comando:
    ```bash
    docker-compose down
    ```
    Isso desligará e removerá os containers, redes e volumes criados pelo Docker Compose para esse projeto.
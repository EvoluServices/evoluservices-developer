---
sidebar_position: 1
---
# Introdução

A API Evoluservices Orders facilita a criação de links de pagamento para clientes pagarem os estabelecimentos por serviços ou produtos adquiridos digitalmente. Ela também permite a consulta dos status dos pagamentos, a data estipulada para a liquidação das transações realizadas e os métodos de pagamento disponíveis. Para demonstração, use as credenciais `orders:123mudar` para testar os filtros de autorização.

## Começando a integrar

### Autenticação
A API utiliza o modo de autenticação basicAuth, mais comum no protocolo HTTP. A autenticação é feita através de um credencial na codificação base 64 e uma senha no formato `credencial:senha` inserido no campo Authorization do Header.

Além disso, é necessário merchantCode que é um código único para cada estabelecimento cadastrado no API.

O credencial, a senha e o merchantCode são adquiridos no processo homologatório.

### Postman

O Postman é uma ferramenta cujo objetivo é testar e desenvolver APIs que utilizam requisições HTTP para extrair, inserir, postar e deletar dados (RESTful APIs). Além disso, ele analisa as respostas da API e as exibe de forma clara e agradável, o Postman também permite a configuração de testes para as Interface de Programação de Aplicações.

Para saber mais informações sobre o Postman, acesse o site do [Postman](https://www.postman.com/) que será possível encontrar diversos conteúdos e diversas formas de se utilizar o mesmo.

No Postman, é possível importar Collections que são um conjunto de exemplos de requisições que podem ser utilizadas para fins de teste. Para importá-la clique no botão abaixo:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5da5c26a20c0e076c7c2)

### Ambiente de testes
Para uma boa integração, disponibilizamos um ambiente de testes encontrado pela seguinte url: https://sandbox.evoluservices.com.

Para ter acesso a esse ambiente de teste, será recebido um e-mail com as credenciais de acesso no endereço de e-mail cadastrado assim que o processo homologatório for iniciado.

#### Cartões de teste

Para ser possível realizar testes, seguimos um conjunto de regras definidas pelos adquirentes. São elas:

|Status da transação|Final do cartão|
|-------------------|---------------|
|Autorizado|1 e 4|
|Não autorizado|2, 3, 5, 6, 7 e 8|
|Autorização aleatória|9|

É possível encontrar geradores de cartão de crédito de teste na internet para auxiliar,
pois é conferido se o número do cartão respeita o algoritmo de Luhn. A
data de vencimento do cartão deve ser futura, ou seja, caso inserido datas passadas, será considerado
como falha de transação. O código de segurança não será verificado para fins de testes.

Para aprovar transações com cartão Hiper e HiperCard, deve ser usado especificamente
os seguintes números:

|         |                |
|---------|----------------|
|Hipercard|6062825624254001|
|Hiper|6370950847866501|

Para simular erros com esses dois últimos cartões, basta realizar transações com o valor `amount` com valor de `10300` ou `10400`.

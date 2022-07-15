---
sidebar_position: 1
---

# Requisições

A seguir, é possível ter uma visão geral das requisições que fazem parte dos processos de autenticação, registro de uma transação e retorno dos dados:

* **Autenticação: `[POST] /remote/token`**

Para acessar os endpoints da API é necessário apresentar o token da sua aplicação que pode ser obtido através deste método, mediante apresentação das credenciais de acesso fornecidas pelo suporte (username e apiKey)

* **Cria uma transação remota: `[POST] /remote/transaction`**

Cria uma nova transação referente a uma cobrança. Os parâmetros permitem detalhar o modo que a transação será executada e informar o endereço de retorno.

* **Retorno dos dados: Callback**

Durante todo o ciclo de vida da transação (criação, aprovação/cancelamento, pagamento, etc), os dados da transação referentes às mudanças de estado são enviadas ao endereço informado ao criar a cobrança.
:::info informações
Para as transações remotas na maquininha (POS), a chamada à callback será feita após um período de 10 a 15 minutos do término da transação, visto que a callback só será chamada após a inserção das transações no sistema.
:::

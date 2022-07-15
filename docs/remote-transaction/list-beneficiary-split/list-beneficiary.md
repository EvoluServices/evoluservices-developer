---
sidebar_position: 1
---

# Listar os beneficiários

Retorna a lista de beneficiários aptos a receber splits de pagamentos para este estabelecimento.

## Requisição HTTP

`GET /remote/merchants/{merchantCode}/recipients`

## Header

Você deve especificar no cabeçalho da requisição o tipo de conteúdo enviado no corpo, bem como o token de acesso.

|Parâmetro|Valor|
|---------|-----|
|`Content-Type`|`application/json`|
|`Bearer`|`TOKEN`|

## Parâmetros da URL

|Parâmetro|Descrição|
|---------|---------|
|`merchantCode`|O código do estabelecimento (obtido junto ao suporte).|

## Resposta

|<div style={{width:100}}>Propriedade</div>|Tipo|Descrição|
|-----------|----|---------|
|`name`|Texto|O nome do beneficiário.|
|`document`|Texto|O documento do beneficiário.|
|`code`|Texto|O código do beneficiário.|

```json
[
  {
    "name": "<name>",
    "document": "<document>",
    "code": "<code>"
  }
]
```

## Erros

Os erros desse método são do tipo `HTTP 401` e `HTTP 500`

`Status: 401 `

|Mensagem|Descrição|
|-----------|---------|
|`INVALID_TOKEN`|Token inválido.|
|`MERCHANT_CODE_INVALID`|Código do estabelecimento inválido.|

```json
{
   "success": "false",
   "error": "<Error message>"
}
```

:::info informações
Para o erro INVALID_TOKEN peça um novo token de **[Autenticação](../../category/autenticação)**.
:::
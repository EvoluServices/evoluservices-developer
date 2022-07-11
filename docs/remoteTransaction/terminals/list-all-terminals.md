---
sidebar_position: 1
---

# Listar todos os terminais

Retorna os terminais do estabelecimento que estão aptos a receber transação remota.

## Requisição HTTP

`GET /remote/merchants/{merchantCode}/terminals`

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
|`macAddress`|Texto|O endereço físico (MAC Address) associado ao terminal.|
|`computerName`|Texto|O nome do computador associado ao terminal.|
|`terminalId`|Texto|O id do terminal que pode ser utilizado como parâmetro para [iniciar uma transação remota](../create-remote-transaction).|
|`terminalStatus`|Texto|O status do terminal (consulte a [tabela de status do terminal](../value-table/terminal-status)).|

```json
[
    {
        "macAddress": "8d:c1:d3:12:14:bb",
        "computerName": "DESKTOP",
        "terminalId": "AA009999",
        "terminalStatus": "ONLINE"
	}
]
```

## Erros

Os erros desse método são do tipo `HTTP 401` e `HTTP 500`

`Status: 401 `

```json
{
   "success": "false",
   "error": "<Error message>"
}
```

|Mensagem|Descrição|
|-----------|---------|
|`INVALID_TOKEN`|Token inválido.|

:::info informações
Para o erro acima peça um novo token de [token](../category/autenticação)
:::

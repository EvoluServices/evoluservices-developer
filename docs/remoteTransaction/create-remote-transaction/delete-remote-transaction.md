---
sidebar_position: 4
---

# Excluir Transação Remota

É possivel remover transações remotas que ainda não foram processadas, enviando uma requisição do tipo
Delete para a URL raiz da transação remota.

### Requisição HTTP
`DELETE /remote/{id}`

### Parâmetros da URL
|Parâmetro|Descrição|
|---------|---------|
|`id`|Identificador da transação remota (retornada na requisição da transação).|

:::danger atenção
  A requisição precisa incluir um <b>token de autenticação válido</b> no header.
:::

### Erros

Os erros desse método são do tipo `HTTP 500`

`Status: 500 `

|Mensagem|Descrição|
|-----------|---------|
|`INEXISTENT_REMOTE_TRANSACTION`|Transação remota inexistente|
|`REMOTE_TRANSACTION_ALREADY_PROCESSED`|Já foi iniciado o processamento da transação remota|
|`ID_INVALID`|Id da transação inválido|

```json
{
   "success": "false",
   "error": "<Error message>"
}
```
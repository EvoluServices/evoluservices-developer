---
sidebar_position: 8
---

# Erros Gerais

Códigos retornados em caso de erro, identificando o motivo do erro e suas respectivas mensagens.

Os erros desse método são do tipo `HTTP 401` e `HTTP 500`

`Status: 401`

|Mensagem|Descrição|
|--------|---------|
|`REVOKED_TOKEN`|O token foi revogado antes da data de expiração.|
|`INVALID_TOKEN`|O token informado não é igual ao cadastrado.|
|`EXPIRED_TOKEN`|O token não tem mais validade.|

```json
{
   "success": "false",
   "error": "<Error message>"
}
```

:::info informações
Para qualquer um dos casos acima peça um novo token de [token](../remote-transaction/autentication)
:::
<br></br>

`Status: 500`

|Mensagem|Descrição|
|--------|---------|
|`MERCHANT_NOT_FOUND`|Estabelecimento não encontrado.|

```json
{
   "success": "false",
   "error": "<Error message>"
}
```

:::info informações
Verifique se o ID do estabelecimento está correto. Se o problema persistir, entre em contato com o suporte.
:::
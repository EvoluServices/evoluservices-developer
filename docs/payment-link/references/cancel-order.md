---
sidebar_position: 5
---
# Cancelar um link de pagamento

`DELETE /api/orders/{uuid}`

Cancela um Link de Pagamento de acordo com o seu uuid.

:::caution Atenção
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
:::

## Parâmetros

|Nome|In|Tipo|Obrigatório|Descrição|
|---|---|---|---|---|
|uuid|path|string|sim|Uuid do Link de Pagamento a ser cancelado|

## Erros

Os erros desse método são do tipo `HTTP 500`

`Status: 500`

|Mensagem| Descrição                                                                                                                        |
|---|----------------------------------------------------------------------------------------------------------------------------------|
|`ORDER_STATUS_INVALID_FOR_CANCELLATION`| O link de pagamento já foi aprovado e não pode ser cancelado. Só é possível cancelar links de pagamento que não foram efetuados. |

```json
{
  "success": "false",
  "error": "ORDER_STATUS_INVALID_FOR_CANCELLATION"
}
```
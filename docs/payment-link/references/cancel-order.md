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

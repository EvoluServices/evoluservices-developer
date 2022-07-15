---
sidebar_position: 5
---
# Cancelar um link de pagamento

`DELETE /api/orders/{uuid}`

Cancela um Link de Pagamento de acordo com o seu uuid.

## Parâmetros

|Nome|In|Tipo|Obrigatório|Descrição|
|---|---|---|---|---|
|uuid|path|string|sim|Uuid do Link de Pagamento a ser cancelado|

## Respostas

|Status|Descrição Padronizada|Descrição Detalhada|
|---|---|---|
|200|OK|OK|
|400|Bad Request|Exceção de validação|
|401|Unauthorized|Credenciais invalidas, não autorizado|
|403|Forbidden|Não autorizado|
|404|Not Found|Pedido não encontrado|
|500|Internal Server Error|Erro interno no servidor|

:::caution Atenção
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
:::

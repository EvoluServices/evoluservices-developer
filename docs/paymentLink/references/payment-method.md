---
sidebar_position: 2
---

# Obter os métodos de pagamento disponíveis

`GET /api/payment-methods`

Obtém as formas de pagamento disponíveis ao estabelecimento dado o valor pré-definido.

## Parâmetros

|Nome|In|Tipo|Obrigatório|Descrição|
|---|---|---|---|---|
|paymentMethods.amount|query|string|sim|Valor do pagamento|
|paymentMethods.merchantCode|query|string|sim|Código de identificação do estabelecimento|

## Respostas

|Status|Descrição Padronizada|Descrição Detalhada|
|---|---|---|
|200|OK|OK|
|400|Bad Request|Exceção de validação|
|401|Unauthorized|Não autorizado|
|404|Not Found|Estabelecimento não encontrado|
|422|Unprocessable Entity|Erro de integração|
|500|Internal Server Error|Erro interno no servidor|

### Schema

|Nome|Tipo|Descrição|
|---|---|---|
|paymentMethods|[paymentMethod]|Lista contendo os métodos de pagamento disponíveis.|
|paymentMethod.type|string|Determina o método de pagamento, podendo ser crédito ou recorrente.|
|paymentMethod.options|[option]|Opção para o tipo de pagamento do estabelecimento.|
|option.maxInstallments|number|Número máximo de parcelas permitido para a opção.|
|option.paymentBrands|object|Bandeiras disponíveis para opção.|
|option.paymentBrands.value|[string]|Lista contendo nome das bandeiras.|


#### Valores Enumerados

##### paymentMethod.type
|Valor|
|---|
|MONTHLY|
|FLEXIBLE|


### Exemplo
> 200 OK

```json
{
  "paymentMethods": [
    {
      "type": "CREDIT",
      "options": {
        "maxInstallments": "12",
        "paymentBrands": {
          "value": [
            "VISA"
          ]
        }
      }
    }
  ]
}
```

:::caution Atenção
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
:::
---
sidebar_position: 3
---

# Criar um link de pagamento

`POST /api/orders`

Cria novo link de pagamento e retorna url para o pagamento a ser realizado.

:::caution Atenção
Para executar esta operação, você deve estar autenticado através do método:
BasicAuth
:::

## Requisição

### Schema

| Nome                   |In| Tipo    |Obrigatório|Descrição|
|------------------------|---|---------|---|---|
| order                  |body| object  |sim|
| order.reference        |body| string  |sim|Identificação referenciando o order|
| order.redirectUrl      |body| string  |não|Redireciona a URL depois do pagamento do pedido. Faça um retorno de chamada 'POST' com o formato 'x-www-form-urlencoded' e com os parâmetros 'uuid' e 'transactionNumber'|
| order.amount           |body| string  |sim|Valor do order, com menor unidade de contagem|
| order.maxInstallments  |body| number  |sim|Número máximo de parcelas permitidos pelo order|
| order.minInstallments  |body| number  |não|Número mínimo de parcelas permitidos pelo order. Opcional, caso não seja inserido um valor será considerado como `1`, por padrão. Não pode ser maior do que o valor inserido em `maxInstallments`.|
| order.merchantCode     |body| string  |sim|Código do estabelecimento referente ao order|
| order.customerName     |body| string  |sim|Nome do cliente do order|
| order.customerDocument |body| string  |não|Documento do cliente do order. CPF ou CNPJ, apenas números, documentos formatados com sinais gráficos de ponto, hífen e barra não são válidos.|
| order.customerPhone    |body| boolean |não|Telefone do cliente do order|
| order.customerEmail    |body| boolean |não|Email do cliente do order|
| order.recurrent        |body| boolean |não|Indica se o pagamento do order é do tipo recorrente ou não|
| order.recurrenceType   |body| string  |não|Tipo de recorrência do pagamento do order podendo ser mensal ou flexível  (por período fixo determinado). O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
| order.quantityCharges  |body| number  |não|Quantidade de recorrências que serão cobradas no order O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
| order.frequency        |body| number  |não|Período fixo entre as cobranças da recorrência, em dias. O preenchimento do campo é Obrigatório caso o campo `recurrent` seja definido como `true`.|
| order.description      |body| string  |não|Descrição mais detalhada referente à order.|
| order.expirationDate   |body| string  |não|Data de vencimento da order. O campo é opcional.|
| order.splits           |body| object  |não|Parâmetros de splits|

### Exemplo
```json
{
  "order": {
    "reference": "123CLIENTS",
    "redirectUrl": "https://example.com/callback",
    "amount": "1000000",
    "maxInstallments": "2",
    "minInstallments": "1",
    "merchantCode": "A1B2C3",
    "customerName": "Rodrigo",
    "customerDocument": "01234567890",
    "customerPhone":"+5511987654321",
    "customerEmail":"integracoes@evoluservices.com",
    "recurrent": true,
    "recurrenceType": "MONTHLY",
    "quantityCharges": "10",
    "frequency": "30",
    "description": "Venda de equipamento efetuada na data 13/05/2020",
    "expirationDate": "2020-07-16",
    "splits": [
      {
        "code": "PGV1YN",
        "value": "9600",
        "chargeFees": false
      }
    ]
  }
}
```

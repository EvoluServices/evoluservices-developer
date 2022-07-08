---
sidebar_position: 2
---

# Criar Transação Remota

Para criar uma transação que utilizará cartão de crédito, é necessário enviar uma requisição utilizando o método `POST` utilizando no header o token informado além dos dados de uma transação para registro na EvoluServices, conforme o exemplo.

:::info informações
Antes de criar um transação, verifique o status do terminal. Veja a seção [Listar Terminais](../terminals/list-all-terminals).
:::

## Requisição HTTP
`POST /remote/transaction`

## Header

É necessário especificar no header o tipo de conteúdo enviado no body da requisição, junto com o Bearer.

|Parâmetro|Valor|
|---------|-----|
|`Content-Type`|`application/json`|
|`Bearer`|`TOKEN`|

:::danger atenção
A requisição precisa incluir um <b>token de autenticação válido</b> no header.
:::

## Body

```java
 public static void main(String[] args) throws IOException {
		// JSON com as informações de inicio da transação remota
        String rawData = "{'transaction': { 'merchantId': 'ABC123','value': '10.00','installments': '2','paymentBrand': 'VISA_CREDITO'}}";
        
		// Endpoint com somente os atributos necessários setados
		URL u = new URL("https://sandbox.evoluservices.com/remote/transaction");
        HttpURLConnection conn = (HttpURLConnection) u.openConnection();
        conn.setDoOutput(true);
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json; charset=utf8");
        conn.setRequestProperty(
                "Bearer",
                "xyz_456");
        OutputStream os = conn.getOutputStream();
        os.write(rawData.toString().getBytes("UTF-8"));
        os.close();

        StringBuilder sb = new StringBuilder();
        int HttpResult = conn.getResponseCode();
		
		// Se o resultado for HTTP OK, recebemos uma mensagem de sucesso
        if (HttpResult == HttpURLConnection.HTTP_OK) {
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            while ((line = br.readLine()) != null) {
                sb.append(line + "\n");
            }
            br.close();
            System.out.println("" + sb.toString());

        } else {
			// Caso contrário, lemos o código e mensagem de erro
            System.out.println(conn.getResponseCode());
            System.out.println(conn.getResponseMessage());
        }

    }
```

```csharp
private static void CreateTransaction()
	{
		HttpWebRequest request = (HttpWebRequest)WebRequest.Create("http://sandbox.evoluservices.com/remote/transaction");
		request.Method = "POST";
		request.ContentType = "application/json";
		request.Headers["Bearer"] = "XYZ456";
		using (Stream requestStream = request.GetRequestStream())
		{
			string auth = JsonConvert.SerializeObject(new { transaction = new { merchantId = "ABC123", value = "10.00", installments = "2", paymentBrand = "VISA_CREDITO" } });
			byte[] buffer = Encoding.ASCII.GetBytes(auth);
			requestStream.Write(buffer, 0, buffer.Length);
		}

		try
		{
			using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
			{
				using (Stream responseStream = response.GetResponseStream())
				{
					using (StreamReader sr = new StreamReader(responseStream))
					{
						dynamic transactionApproved = JsonConvert.DeserializeObject<dynamic>(sr.ReadToEnd());
						string transactionId = transactionApproved.transactionId.Value;
						Debug.WriteLine("TransactionID:" + transactionId);
					}
				}
			}
		}
		catch (WebException webException)
		{
			throw new ApiError(webException.Message, ((HttpWebResponse)webException.Response).StatusCode, ((HttpWebResponse)webException.Response).StatusDescription);
		}
	}

	public class ApiError : Exception
	{
		public HttpStatusCode StatusCode { get; set; }
		public string ReasonPhrase { get; set; }

		public ApiError(string message, HttpStatusCode statusCode, string reasonPhrase) : base(message)
		{
			ReasonPhrase = reasonPhrase;
			StatusCode = statusCode;
		}
	}
```

```json
{
  "transaction": { 
    "merchantId": "<id>",
    "terminalId": "<id>",
    "value": "10.00",
    "installments": 2,
    "paymentBrand": "VISA_CREDITO",
    "callbackUrl": "<url>",
    "clientName": "<name>",
    "installmentsCanChange" : "false",
    "clientEmail": "<email>",
    "splits": [{
      "code": "<code>",
      "value": "2.00",
      "chargeFees": true
    },  {
      "code": "<code>",
      "value": "3.00",
      "chargeFees": false
    }]
  }
}
```

|Propriedade|Tipo|Obrigatório|Descrição|Validação|
|-----------|----|-----------|---------|---------|
|`merchantId`|Texto|Sim|Identificador do estabelecimento (obtido junto ao suporte).|`[0-9A-Za-z]+`|
|`terminalId`|Texto|Não|Id do terminal reponsável por processar a transação. Caso especificado, a transação iniciará automaticamente, caso contrário, uma notificação será exibida nos dispositivos habilitados. A lista de ids pode ser obtida através do método [Listar terminais](../terminals/list-all-terminals)|`[0-9A-Za-z+/*]{6,300}`|
|`value`|Número|Sim|Valor do orçamento (em decimal, com o "." como separador e 2 casas decimais).|`\d+\.\d{2}`|
|`installments`|Número|Não|Número de parcelas|`\d{1,9}`|
|`paymentBrand`|Texto|Não|Bandeira do cartão. Se o número de parcelas for especificado, a bandeira se torna *obrigatória*.|[Tabela de bandeiras](../value-table/brand)|
|`callbackUrl`|Texto|Não|URL de retorno com os dados da transação após processamento. A URL deve ser https.|[URLValidator](https://commons.apache.org/proper/commons-validator/apidocs/org/apache/commons/validator/routines/UrlValidator.html) (Com schema apenas `https`)|
|`clientName`|Texto|Não|Nome do cliente final ao qual a transação pertence. Apesar de não obrigatório, recomenda-se fortemente que esse campo se preenchido.|`[0-9A-Za-záéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛãõÃÕçÇäëïöüÄËÏÖÜ&!() #%@$+',-.]+`|
|`installmentsCanChange`|Booleano|Não|Define se o número de parcelas e a bandeira da transação podem ou não ser alterados pelo cliente.|<code>(true&#124;false)</code>|
|`clientEmail`|Texto|Não|Email do cliente, para onde pode ser enviado o comprovante da venda, opcionalmente|`.+`|
|`splits`|Lista de objetos|Não|Lista contendo informações de split de pagamento para cada beneficiário.|Ver <i>Parâmetros do Split</i> abaixo.|

```json
// Exemplos
{
  "paymentBrand" : "MAESTRO", // Transação de débito
},
{
  "paymentBrand" : "MASTERCARD", // Transação de crédito
}
```

:::info informações
Para especificar o tipo de cobrança (crédito/débito) da transação remota na maquininha (POS), utilize o campo 'paymentBrand' com uma bandeira referente ao tipo desejado. Consulte a tabela de bandeiras para os demais
casos.
:::


## Parâmetros do split

|Propriedade|Tipo|Obrigatório|Descrição|Validação|
|-----------|----|-----------|---------|---------|
|`code`|Texto|Sim|Código do beneficiário.|`[0-9]+`|
|`value`|Número|Sim|Valor do split destinado ao beneficiário.|`\d+\.\d{2}`|
|`chargeFees`|Booleano|Não|Define se aplica taxas sobre o valor do split ou não. Considera como `true`, caso o campo não seja definido.|<code>(true&#124;false)</code>|

:::danger atenção
A URL de callback tem que ser https.
:::

## Resposta

```json
{
  "success": "true",
  "error": "REMOTE_TRANSACTION_SUCCESS",
  "transactionId": "NTcwMA*3"
}
```

**Em caso de sucesso**, retorna Status 200 e o json contendo transactionId e mensagem de sucesso.

## Erros

`Status: 500 `

|Mensagem|Descrição|
|-----------|---------|
|`PAYMENT_BRAND_ID_INVALID`|A bandeira não existe.|
|`INSTALLMENTS_INVALID_FOR_DEBIT`|Cartão de débito não pode ter mais de uma parcela.|
|`INVALID_PAYMENT_BRAND`|A bandeira não está habilitada para o estabelecimento.|
|`INVALID_INSTALLMENTS_QUANTITY_OR_VALUE`|O número de parcelas ou valor minimo da parcela não é aceito pelo estabelecimento.|
|`MERCHANT_ID_INVALID`|Id do estabelecimento não existe.|
|`TERMINAL_ID_INVALID`|Id do terminal não existe.|
|`MERCHANT_TERMINAL_INVALID`|Terminal do estabelecimento não está apto a receber transações remotas|
|`VALUE_FIELD_INVALID`|Formato do campo `value` inválido|
|`NAME_CLIENT_INVALID`|Campo `clientName` inválido|
|`SPLIT_SUM_GREATER_THAN_TRANSACTION_VALUE`|A soma dos valores do split ultrapassam o valor total a receber.|
|`SUPPLIER_NOT_FOUND`|O código informado não corresponde a um beneficiário existente|
|`SUPPLIER_INVALID`|O beneficiário informado não está conectado ao estabelecimento|

```json
{
   "success": "false",
   "error": "<Error message>"
}
```
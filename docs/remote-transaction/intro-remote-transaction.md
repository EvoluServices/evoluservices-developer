---
sidebar_position: 1
---
# Transação Remota

O objetivo desta documentação é orientar o desenvolvedor sobre como utilizar nossas APIs para integrar com a solução Evo/SaúdeService de transações Pinpad, descrevendo as funcionalidades, os métodos a serem utilizados, listando informações a serem enviadas e recebidas, e provendo exemplos.

As APIs estão organizadas em torno de um conjunto de endpoints acessíveis via HTTP que recebem e respondem JSON.

Antes do início da operação em ambiente de produção, é necessário passar pelo processo de homologação para que as implementações sejam certificadas junto à EvoluServices. Para maiores informações, por favor, entre em contato com a equipe de suporte.

## Visão Geral

A API de transação remota permite que o processamento de transações de cartões de crédito e débito, através de dispositivos físicos (PinPad), seja disparadas por uma chamada HTTP.

Cada transação remota é reconhecida como uma cobrança que deverá ser efetivada através de uma transação. Para realizar a conciliação das cobranças e manter os dados consistentes, ao criar uma nova transação remota, você pode registrar um endereço de retorno (através do parâmetro `callbackUrl`) que receberá notificações sobre mudanças de estado da transação.

# DIA 3 JavaScript e Testes Assíncronos

## Jest - Testes Assíncronos

### Exercício 1

1 - Complete a sintaxe.
Abra o arquivo `exercise-one.test.js`, nele você encontrará a estrutura inicial dos testes já montada. Essa estrutura no entanto está incompleta e precisa de ajustes para funcionar corretamente.

2 - Implemente um teste que verifique se a propriedade `name` possui valor `Ancestor's Chosen`.

3 - Implemente um teste que verifique se `getMagicCard` é uma função.

4 - Implemente um teste que verifique se, ao chamar a função `getMagicCard` com o argumento "**130550**", a função *fetch* foi chamada.

5 - Implemente um teste que verifique se, ao chamar a função `getMagicCard` com o argumento "**130550**", a função *fetch* foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550".

6 - Implemente um teste que verifique se o retorno da função `getMagicCard` é igual ao objeto `card`.


7 - Implemente um teste que verifica se, ao chamar a função `getMagicCard` com o argumento `'idDesconhecido'`, retorna um erro com a mensagem: "Id is not found!".

---

## Exercício 2

1 - Implemente um teste que verifique que após a execução da função `saveFavoriteMagicCard`, `favoriteCards` passa a possuir `length === 5`.

2 - Dentro do mesmo it, implemente um teste que verifique que na última posição do array `favoriteCards` existe um card com o a propriedade `name` e valor "Beacon of Immortality".

3 - Ainda no mesmo it, chame a função `saveFavoriteMagicCard` com o argumento "**130554**" e verifique se `favoriteCards` passa a possuir `length === 6`.

Para os próximos exercícios, descomente o teste dentro do escopo do segundo it.

4 - Após descomentar o teste dentro do segundo it, rode os testes. 

Você vai perceber que o teste falhou. Consegue entender porque ele falha? Isso mesmo, a função `saveFavoriteMagicCard` modificou o arquivo `favoriteCards` no escopo do it anterior. Desta maneira, para o Jest, o array `favoriteCards` não possui quatro cards, mas sim, seis.

5 - Implemente a função `retrievesFavoriteCards` com uma lógica capaz de restaurar o array `favoriteCards`, depois chame essa função dentro do método `afterEach` para os testes poderem passar.

## Bônus

* Este exercício será feito na mesma do exercício anterior: `exercise-two`. 

1 - Utilizando a função `map`, crie um array contendo apenas a propriedade `name` de todos os cards presentes no deck original, ou seja, no `favoriteCards`. Este array deve conter quatro nomes e deve ser salvo em uma nova variável.

2 - Implemente um teste que verifique que o array que você obteve com o `map` do exercício anterior contém a seguinte estrutura e valores:

```js
['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']
```
---
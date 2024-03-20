## TypeScript

Repositorio criado para os estudos realacionados ao estudo de TypeScript, com o intuito de armazenar todos os exemplos e projetos desenvolvidos durante a curso. </br>
Vou deixar anotações para me lembrar depois:

- TypeScript, é um supersharet
- Ele deixa a tipagem estatica
- Momentos precisa tipar e outros não
- Temos modificadores de acesso
- Ele é multiparadigma

## Intalação

Para a instalação é bem simples, podemos optar para colocar global ou somente no projeto

````powershell
npm i typescript -g  # Para instalar como dependencia global
````
````powershell
npm i typescript -D  # Para instalar como dependencia, mais especificamente como Devdependecie
````
````powershell
npm i ts-node -D  # Para que seja possivel rodar o ts no coderuner (Não é rodado em prod)
````
````powershell
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D # Para fazer a configuração do ESlint
````
````powershell
npm i prettier eslint-config-prettier eslint-plugin-prettier -D # Para a coinfiguração do Prettier
````



Nos vamos usar o tsc para compilar os arquivos .ts para .js, já o tsserver, ele é usado mais nos editores

- Algumas vezes é preciso usar o "export default NOME DA VARIAVEL", para que ela não seja detectada no escopo global e comecesse a dar trabalho


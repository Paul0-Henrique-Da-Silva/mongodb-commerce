# MongoDb Commerce :leaves:

Crie um container com um volume apontando para a pasta do projeto 

```bash
docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0;
```
Com o container em execução, acesse o terminal do container

```bash
docker exec -it nomeDoContainer bash;
```
No terminal do container, acesse o diretório ``` /app ```  mapeado no volume conforme o passo.

Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados commerce:

```bash
DBNAME=commerce ./scripts/resetdb.sh assets/produtos
```
Utiltize plugs  [MongoDB](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode) para VS Code, facilitara a execuçâo das queryies 

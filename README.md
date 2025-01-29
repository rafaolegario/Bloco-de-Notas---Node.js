
# Bloco de Notas - Node.js

Este é um aplicativo de linha de comando simples para criar, listar, ler e excluir anotações usando Node.js. Ele permite ao usuário interagir com o terminal para gerenciar suas notas de maneira prática.

---

## Funcionalidades

1. **Criar uma nova nota**  
   O usuário pode criar uma nova nota fornecendo um nome e o conteúdo desejado. A nota será salva em um arquivo `.txt` dentro de um diretório chamado `NotesStorage`.

2. **Listar todas as notas**  
   Exibe uma lista de todas as notas criadas, com o nome e o ID associado a cada uma.

3. **Ler uma nota específica**  
   O usuário pode digitar o ID de uma nota e visualizar o conteúdo da mesma.

4. **Excluir uma nota**  
   Permite ao usuário excluir uma nota especificando o ID da nota que deseja remover.

5. **Menu interativo**  
   O aplicativo oferece um menu no terminal para navegar pelas opções de maneira simples.

---

## Pré-requisitos

- **Node.js** (versão 14 ou superior recomendada)

---

## Como Usar

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <diretório_do_repositório>
```

### 2. Instale as dependências

Este projeto não possui dependências externas além das bibliotecas padrão do Node.js, então você pode pular esta etapa.

### 3. Execute o programa

No terminal, execute o script principal usando Node.js:

```bash
node <nome_do_arquivo>.js
```

### 4. Interaja com o menu

Ao iniciar, você verá um menu com as seguintes opções:

```
------BLOCO DE NOTAS------
Notas existentes: X
1- Criar uma nova notação
2- Listar todas notações
3- Ler uma notação especifica
4- Excluir uma notação
5- Sair do programa
ESCOLHA UM NUMERO:
```

Escolha o número desejado e siga as instruções para criar, listar, ler ou excluir notas.

### 5. Como salvar e acessar as notas

As notas criadas serão armazenadas no diretório `NotesStorage` com o nome que você especificou, em formato `.txt`.

---

## Estrutura do Código

- **Função `createNote()`**  
  Permite criar uma nova nota, solicitando ao usuário o nome e o conteúdo. A nota será salva no diretório `NotesStorage`.

- **Função `listNotes()`**  
  Exibe todas as notas armazenadas, incluindo o nome, ID e conteúdo de cada uma.

- **Função `readNote()`**  
  Permite ao usuário ler uma nota específica, digitando o ID da nota.

- **Função `deleteNote()`**  
  Exclui uma nota especificada pelo ID, tanto do sistema de arquivos quanto do banco de dados temporário (array `NOTES_DATABASE`).

- **Função `Menu()`**  
  Exibe o menu principal e permite ao usuário escolher entre as opções de criar, listar, ler ou excluir notas.

- **Função `backToMenu()`**  
  Pergunta ao usuário se deseja continuar e voltar ao menu principal.

---

## Como Funciona

1. O aplicativo começa exibindo o menu.
2. O usuário escolhe uma opção.
3. Dependendo da opção, o aplicativo executa a ação correspondente, como criar uma nova nota, listar as notas existentes, ler uma nota específica ou excluir uma nota.
4. Após cada ação, o aplicativo retorna ao menu principal, permitindo ao usuário continuar interagindo com o sistema.

---

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

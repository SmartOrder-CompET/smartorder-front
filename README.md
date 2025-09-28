## 💡 Sobre o Projeto

O **Brasas burger** é um sistema web que permite que clientes de Tacaratu acessem o cardápio digital do Brasas e realizem seus pedidos ou tirem dúvidas com o chatbot.

### Problemática

A empresa encontra muitos problemas no seus sistema atual, como ele não respondendo da maneira que deveria, problemas no gateway de pagamento, acúmulo de função para os colaboradores.

A plataforma do cardápio digital visa preencher essas lacunas, oferecendo um espaço para que os clientes possam realizar seus pedidos de maneira simples e dinâmica, com poucos passos e tendo uma plataforma adaptada para as suas necessidades.

<img width="370" height="808" alt="image" src="https://github.com/user-attachments/assets/e6614c5a-438c-4528-b56d-b41da2e200e1" />

---

## 🛠️ Tecnologias usadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🧩 Requisitos para rodar o projeto

- [Node.js](https://www.nodejs.tech/pt-br)

### Como rodar na minha maquina?

- clone o projeto
- rode `npm install`
- rode `npm run dev`
- Pronto!

## Estrutura do projeto

- `./src` pasta fonte, onde vai conter todas as pastas com os códigos do projeto
- `./src/app` pasta responsável por organizar todas as rotas/páginas do nosso sistema
- `./src/components` são todos os fragmentos essencias de interface do projeto como Título, botão, Inputs e etc.
- `./src/contexts` são as varíaveis globais, que podem ser acessadas em qualquer parte do sistema como dados do carrinho
- `./src/reducers` contém os reducers que atualizam os estados do context, como remover ou adicionar itens no carrinho
- `./src/types` Contém todas as tipagens do sistema.
- `./src/utils` contém funções úteis que vão ser usadas no projeto como função para formatar número em preço em real

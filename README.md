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

###  Integrações Externas

O projeto possui integração com a **API do Mercado Pago**, permitindo a realização de pagamentos diretamente dentro do sistema.  

Para utilizar essa funcionalidade, é necessário configurar uma **chave de teste** do Mercado Pago no arquivo de variáveis de ambiente (`.env`).

###  Configuração do ambiente

1. Crie (ou edite) o arquivo `.env` na raiz do projeto.  
2. Adicione a variável abaixo com a sua **Access Token** de teste do Mercado Pago:

   ```bash
   MP_ACCESS_TOKEN=SEU_TOKEN_DE_TESTE_AQUI
3. você pode obter seu token de teste no painel [Mercado Pago Developers](https://www.mercadopago.com.br/developers/panel)

## Estrutura do projeto

- `./src` pasta fonte, onde vai conter todas as pastas com os códigos do projeto
- `./src/app` pasta responsável por organizar todas as rotas/páginas do nosso sistema
- `./src/components` são todos os fragmentos essencias de interface do projeto como Título, botão, Inputs e etc.
- `./src/services` pasta responsável por armazenar todas as funções que interagem com a API
- `./src/contexts` são as varíaveis globais, que podem ser acessadas em qualquer parte do sistema como dados do carrinho
- `./src/reducers` contém os reducers que atualizam os estados do context, como remover ou adicionar itens no carrinho
- `./src/types` Contém todas as tipagens do sistema.
- `./src/utils` contém funções úteis que vão ser usadas no projeto como função para formatar número em preço em real



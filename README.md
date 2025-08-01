## 💡 Sobre o Projeto

O **Brasas burger** é um sistema web que permite que clientes de Tacaratu acessem o cardápio digital do Brasas e realizem seus pedidos ou tirem dúvidas com o chatbot.

### Problemática

A empresa encontra muitos problemas no seus sistema atual, como ele não respondendo da maneira que deveria, problemas no gateway de pagamento, acúmulo de função para os colaboradores.

A plataforma do cardápio digital visa preencher essas lacunas, oferecendo um espaço para que os clientes possam realizar seus pedidos de maneira simples e dinâmica, com poucos passos e tendo uma plataforma adaptada para as suas necessidades.

---

## 🛠️ Tecnologias usadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🧩 Componentes 

### QuantityAction
Componente de controle de quantidade com botões de "+" e "-", e um ícone de lixeira quando a quantidade está em 1.

Usa: useState, react-icons
Finalidade: Permite ao usuário alterar a quantidade de um item (ex: em um carrinho).

Exemplo de uso: (futuramente vai receber 2 props referente a quantidade)
import { QuantityAction } from '@/components/QuantityAction'

<QuantityAction />

### Button
Botão reutilizável com texto customizável.

Props:
- label: string – Texto exibido no botão
- onClick?: () => void – Função executada ao clicar

### SectionTitle
Título de seção com ação à direita (como "Ver tudo").

Props:
- title: string – Texto principal (título da seção)
- onClick: () => void – Função chamada ao clicar em "Ver tudo"

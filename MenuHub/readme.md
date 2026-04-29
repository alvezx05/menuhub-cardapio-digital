# 🍔 MenuHub — Cardápio Digital

> Sistema de cardápio digital com autenticação de usuário, carrinho de compras, histórico de pedidos e painel administrativo.

---

## 📋 Sobre o Projeto

O **MenuHub** é um cardápio digital desenvolvido para restaurantes e lanchonetes. O cliente acessa via navegador, cria uma conta, navega pelo cardápio, monta seu pedido e o envia diretamente ao restaurante pelo **WhatsApp**. O proprietário gerencia produtos, ofertas e visualiza pedidos pelo **Painel Administrativo**.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript (ES6+) | Lógica de negócio e interações |
| LocalStorage | Banco de dados no navegador |
| Font Awesome 6 | Ícones da interface |
| Google Fonts | Tipografia (Playfair Display + DM Sans) |
| WhatsApp API | Envio de pedidos |

---

## 📁 Estrutura do Projeto

```
MenuHub/
├── index.html        → Landing page + Login/Cadastro do cliente
├── cardapio.html     → Cardápio digital com carrinho e histórico
├── admin.html        → Painel do administrador
├── data.js           → Banco de dados (localStorage)
├── images.js         → Imagens dos produtos em base64
└── README.md         → Documentação do projeto
```

---

## 🔐 Acesso

| Perfil | Como acessar |
|---|---|
| **Cliente** | `index.html` → Criar conta ou fazer login |
| **Administrador** | `admin.html` → Senha padrão: `admin123` |

---

## 📌 Requisitos Funcionais (RF)

| ID | Requisito | Prioridade |
|---|---|---|
| RF01 | O sistema deve permitir que o cliente realize cadastro informando nome, e-mail e senha | Alta |
| RF02 | O sistema deve permitir que o cliente faça login com e-mail e senha | Alta |
| RF03 | O sistema deve exibir o cardápio com nome, descrição, preço e imagem de cada produto | Alta |
| RF04 | O sistema deve permitir filtrar produtos por categoria (hambúrguer, bebida) | Média |
| RF05 | O sistema deve permitir ao cliente adicionar e remover produtos do carrinho | Alta |
| RF06 | O sistema deve permitir ao cliente ajustar a quantidade de cada item no carrinho | Alta |
| RF07 | O sistema deve permitir ao cliente incluir uma observação no pedido | Média |
| RF08 | O sistema deve calcular e exibir o total do pedido em tempo real | Alta |
| RF09 | O sistema deve enviar o pedido formatado via WhatsApp ao restaurante | Alta |
| RF10 | O sistema deve salvar o histórico de pedidos do cliente | Alta |
| RF11 | O sistema deve permitir ao cliente repetir um pedido anterior com um clique | Média |
| RF12 | O sistema deve exibir sugestões de produtos com base no histórico do cliente | Baixa |
| RF13 | O sistema deve exibir ofertas da semana com destaque na tela | Média |
| RF14 | O administrador deve poder fazer login com senha exclusiva | Alta |
| RF15 | O administrador deve poder adicionar novos produtos ao cardápio | Alta |
| RF16 | O administrador deve poder editar informações de produtos existentes | Alta |
| RF17 | O administrador deve poder excluir produtos do cardápio | Alta |
| RF18 | O administrador deve poder definir desconto (%) em produtos | Alta |
| RF19 | O administrador deve poder marcar produtos como "destaque da semana" | Média |
| RF20 | O administrador deve poder visualizar todos os pedidos realizados | Média |
| RF21 | O administrador deve poder visualizar estatísticas gerais (total de produtos, pedidos, clientes e receita) | Baixa |
| RF22 | O administrador deve poder alterar sua própria senha de acesso | Média |

---

## 📌 Requisitos Não Funcionais (RNF)

| ID | Requisito | Categoria |
|---|---|---|
| RNF01 | O sistema deve funcionar nos navegadores Chrome, Firefox, Edge e Safari (versões atuais) | Compatibilidade |
| RNF02 | O sistema deve ser responsivo e funcionar em dispositivos móveis (telas a partir de 320px) | Usabilidade |
| RNF03 | As páginas devem carregar em menos de 3 segundos em conexão de 10 Mbps | Performance |
| RNF04 | As senhas dos usuários devem ser armazenadas sem transmissão para servidores externos | Segurança |
| RNF05 | O sistema não deve exigir instalação de software adicional — apenas um navegador moderno | Portabilidade |
| RNF06 | O painel administrativo deve ser protegido por senha e inacessível sem autenticação | Segurança |
| RNF07 | A interface deve seguir um padrão visual consistente em todas as páginas | Usabilidade |
| RNF08 | O sistema deve persistir os dados do usuário entre sessões usando localStorage | Confiabilidade |
| RNF09 | O sistema deve ser desenvolvido sem dependências de backend ou banco de dados externo | Portabilidade |
| RNF10 | O código deve ser organizado em arquivos separados por responsabilidade | Manutenibilidade |
| RNF11 | O sistema deve exibir mensagens de erro claras em caso de dados inválidos | Usabilidade |
| RNF12 | O envio do pedido deve redirecionar ao WhatsApp sem necessidade de app instalado (versão web) | Compatibilidade |

---

## 👨‍💻 Autor
Adriano Alves
Desenvolvido como projeto acadêmico — Cardápio Digital MenuHub.

---

## 📄 Licença

Este projeto foi desenvolvido como projeto acadêmico 

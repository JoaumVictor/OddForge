![Logotipo da OddForge](public/logotipo.png)

# 🏟️ Plataforma de Visualização de Apostas Esportivas Odd Forge

Este projeto é uma plataforma de apostas esportivas construída com **Next.js**, **TypeScript**, e foco em performance, UX e componentização moderna.

---

## 🚀 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/) — Autenticação via GitHub
- [Vercel](https://vercel.com/) — Deploy contínuo

---

## 🧩 Funcionalidades

- ✅ Login com GitHub
- ✅ Proteção de rotas
- ✅ Redirecionamento automático para `/login` caso não autenticado
- ✅ Estrutura pronta para usar componentes reutilizáveis
- ✅ Deploy automático via Vercel

---

## 📁 Estrutura do Projeto

```
app/
├── api/
│ └── auth/ # API Routes do NextAuth
├── login/ # Página de login
├── home/ # Página principal após login
├── odd/ # Página de visualização detalhada da odd
├── layout.tsx # Layout global da aplicação
└── page.tsx # Página inicial ou redirecionamento

components/
├── home/ # Componentes específicos da Home
├── odd/ # (opcional) Componentes específicos da Odd
├── shared/ # Componentes reutilizáveis entre páginas
└── ui/ # Componentes de UI genéricos (ex: botões, cards - vindos do shadcn)
```

---

## 🔐 Autenticação com GitHub

Para funcionar localmente, crie um arquivo `.env` com as seguintes variáveis:

```env
GITHUB_ID=seu_client_id
GITHUB_SECRET=seu_client_secret
NEXTAUTH_SECRET=algum_valor_seguro
```

---

## 🧪 Como rodar localmente

# Instale as dependências

```
npm install
```

# Rode o servidor de desenvolvimento

```
npm run dev
```

Acesse http://localhost:3000

---

## 🧱 Em andamento

- Instalar e configurar o shadcn/ui

- Criar componente de card de odd

- Adicionar drag & drop para categorias favoritas

- Implementar detalhamento de odds na rota /odd/[id]

- Testes automatizados com Jest/Testing Library

- Configuração de Docker e docker-compose

- Otimização de SEO com metadata e tags estruturadas

---

## 📦 Deploy

O projeto está publicado na Vercel com deploy automático a cada push na branch main.

## 🧠 Autor

João Victor Fausto Souza

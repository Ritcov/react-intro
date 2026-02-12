# React Intro

Um projeto educacional para aprender os fundamentos do **React** com **TypeScript** e **Vite**.

## 🎯 Funcionalidades

- **Home Page**: Um contador interativo que aumenta a cada clique
- **Form Page**: Um formulário com:
  - Campos de entrada (nome, idade)
  - Dropdown de estados brasileiros (integrado com a API do IBGE)
  - Validação e manipulação de estado com React Hooks
- **Roteamento**: Navegação entre páginas usando React Router

## 🛠 Tech Stack

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server ultrarrápido
- **React Router v7** - Roteamento de página
- **Axios** - Cliente HTTP para chamadas à API
- **ESLint** - Linting de código

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/[seu-usuario]/react-intro.git
cd react-intro

# Instale as dependências
npm install
```

## 🚀 Como Rodar

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint
```

O app estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## 📝 Estrutura do Projeto

```
src/
├── components/
│   └── Header.tsx       # Componente reutilizável de header
├── pages/
│   ├── Home.tsx         # Página inicial com contador
│   ├── Home.css         # Estilos da home
│   └── Form.tsx         # Página de formulário
├── assets/              # Imagens e assets
├── main.tsx             # Ponto de entrada
├── router.tsx           # Configuração de rotas
└── index.css            # Estilos globais
```

## 🎓 Conceitos Aprendidos

- ✅ Componentes funcionais
- ✅ Hooks: `useState`, `useEffect`
- ✅ Props e tipagem com TypeScript
- ✅ State management
- ✅ Formulários controlados
- ✅ Requisições HTTP (Axios)
- ✅ Roteamento SPA com React Router

## 📚 Referências

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)
- [API IBGE](https://servicodados.ibge.gov.br)

## 📄 Licença

MIT

# Expo Boilerplate – Auto Empresa App

Este repositório serve como **boilerplate base** para criação de aplicações **Expo + React Native** com suporte a **Android**, **iOS** e **Web**, utilizando arquitetura modular, roteamento baseado em arquivos e integração com ferramentas modernas como `react-query`, `react-native-paper` e `zod`.

---

## Arquitetura

Este boilerplate separa as responsabilidades entre rotas (na pasta `app`) e a lógica de negócio/UI (em `src/`), permitindo que você replique facilmente a estrutura em novos projetos.

### Estrutura de pastas:

| Caminho         | Descrição                                                                 |
|-----------------|---------------------------------------------------------------------------|
| `app/`          | Rotas definidas com `expo-router`, organizadas por layout (`(auth)`, `(dashboard)` etc.) |
| `src/screens/`  | Telas modulares por domínio: `auth`, `home`, etc.                         |
| `src/services/` | Acesso a dados, chamadas HTTP (axios), cache (storage)                |
| `src/shared/`   | Componentes reutilizáveis, UI, formulários, toast, tema                   |
| `src/config/`   | Temas, i18n e constantes globais                                          |
| `types/`        | Tipagens globais para o app                                               |

---

## Principais recursos

| Biblioteca                         | Finalidade                                                     |
|-----------------------------------|----------------------------------------------------------------|
| **Expo Router**                   | Navegação baseada em arquivos                                 |
| **React Native Paper (MD3)**      | Componentes UI com tema personalizado                         |
| **React Query (TanStack)**        | Cache e gerenciamento de estado assíncrono                    |
| **Axios**                         | Requisições HTTP com interceptadores                          |
| **React Hook Form + Zod**         | Formulários com validação robusta                             |
| **i18n-js**                       | Internacionalização (multiidioma)                             |

---

## Features incluídas

### 🎯 Navegação modular com `expo-router`
- Roteamento automático com suporte a layouts (`(auth)`, `(dashboard)`)
- Importação direta das telas via `src/screens`

### 🎨 Tema claro/escuro
- Detecção automática com `useColorScheme()`
- Compatível com `react-native-paper` v5+

### 💬 Internacionalização
- Configuração inicial com `i18n-js`
- Suporte multiidioma com fallback padrão

### 📡 Requisições HTTP e Cache
- Instância Axios centralizada
- `@tanstack/react-query` com cache automático e invalidação

### 🧾 Formulários reativos
- Validação com `Zod`
- Controle e erros com `react-hook-form`
- Inputs reutilizáveis com integração a schema

### 🍞 Toasts globais
- Componente `ToastHost` integrado
- Disparo de mensagens de qualquer lugar da aplicação

### ⚙️ Variáveis de ambiente
- Suporte ao `.env` local
- Integração com `eas.json` em builds remotos
- Acesso via `expo-constants`

---

## 🌐 Multiplataforma

Compatível com:

- 📱 Android
- 🍏 iOS
- 💻 Web

Inclui fontes customizadas (`expo-font`) e adaptações para uso web com `react-native-paper`.

---

## 📦 Scripts

```bash
npm install         # Instala dependências
npm start           # Inicia o projeto com Expo
npm run android     # Abre no Android
npm run ios         # Abre no iOS
npm run web         # Abre no navegador
npm run lint        # Lint com eslint-config-expo
npm run reset-project # Restaura o projeto ao estado inicial
```

---

## Como usar este boilerplate

1. **Clone este repositório:**

```bash
git clone https://github.com/fernandopascoalbr/expo-boilerplate.git
cd expo-boilerplate
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure suas variáveis de ambiente no `.env`**

4. **Inicie seu projeto:**

```bash
npx expo start
```

---

## Testado com:

- Node.js `>=18`
- Expo SDK `53.x`
- Android/iOS/Web
- React Native `0.79+`

---

## Licença

Este boilerplate está disponível sob a licença MIT e pode ser usado livremente em projetos pessoais e comerciais.

## Theme

O expo tem um helper para criar o tema utilizado na aplicação, você pode acessar [aqui](https://callstack.github.io/react-native-paper/docs/guides/theming/#creating-dynamic-theme-colors)

## Warnings web console

- Animated prop *useNativeDriver* is not supported on Web. This project using react-native-paper and some components using useNativeDriver with true.
- The *<View/>* component prop *pointerEvents* is deprecated. Need to use that into style object like this '<View style={{ pointerEvents: 'none' }} />'. Need to fix it into react-native-paper too. Exist a issue about it [here](https://github.com/callstack/react-native-paper/issues/4112). Warning about "shadow*" too.

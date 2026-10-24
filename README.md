# OFERTAS IRRESISTÍVEIS — Landing Page Oficial

Landing page de alta conversão para o projeto **OFERTAS IRRESISTÍVEIS**, focada em transformar visitantes provenientes de tráfego pago (Meta Ads — Facebook & Instagram) em membros qualificados da comunidade de achadinhos, promoções e cupons no WhatsApp.

---

## 🛠️ Tecnologias e Arquitetura

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components + Client Interactivity onde estritamente necessário)
- **Linguagem:** TypeScript (Strict mode ativo)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) com paleta personalizada (#16A34A, #14532D, #FACC15, #F8FAFC, #0F172A)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **SEO & Metadados:** Geração dinâmica de Open Graph (1200x630) e Favicon via `ImageResponse` (`@vercel/og`), `robots.ts` e `sitemap.ts` automáticos.
- **Rastreamento & LGPD:**
  - Meta Pixel modular com consentimento explícito prévio.
  - Rota de backend segura (`/api/meta-capi`) preparada para Meta Conversions API (CAPI) sem expor tokens no cliente.
  - Captura e persistência de parâmetros de tráfego (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid`).
  - Banner e modal de privacidade e cookies conforme a Lei Geral de Proteção de Dados (LGPD).
  - Identificação de cliques em botões específicos (`hero_cta`, `benefits_cta`, `final_cta`, `header_cta`, `floating_whatsapp`).

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ (testado no Node v22.23.3)
- pnpm (ou npm / yarn)

### 1. Clonar ou Acessar a Pasta
```bash
cd d:/Ofertas_inrresistiveis
```

### 2. Instalar Dependências
```bash
pnpm install
```

### 3. Executar em Modo de Desenvolvimento
```bash
pnpm dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 4. Compilar e Executar em Modo de Produção
```bash
pnpm build
pnpm start
```

---

## ⚙️ Variáveis de Ambiente e Configurações

O projeto conta com o arquivo `.env.example` e `.env.local` na raiz.

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site em produção | `https://ofertasirresistiveis.com.br` |
| `NEXT_PUBLIC_BRAND_NAME` | Nome da marca | `OFERTAS IRRESISTÍVEIS` |
| `NEXT_PUBLIC_WHATSAPP_GROUP_URL` | Link oficial de entrada no grupo do WhatsApp | `https://chat.whatsapp.com/LOLQwz5hqgzAxfpKupaoXi?s=cl&p=a&mlu=4&ilr=4` |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID numérico do Meta Pixel (deixe vazio em dev se não tiver) | `123456789012345` |
| `META_CAPI_ACCESS_TOKEN` | Token de Acesso da Meta Conversions API (**Server-only**) | `EAAB...` |
| `META_CAPI_TEST_EVENT_CODE` | Código de teste do Events Manager (opcional) | `TEST12345` |
| `NEXT_PUBLIC_COMPANY_LEGAL_NAME` | Razão Social do controlador (LGPD) | `Razão Social Ltda` |
| `NEXT_PUBLIC_COMPANY_CNPJ` | CNPJ para rodapé e termos legais | `00.000.000/0001-00` |
| `NEXT_PUBLIC_COMPANY_EMAIL` | E-mail de suporte e encarregado de dados (DPO) | `contato@ofertasirresistiveis.com.br` |

### Como Alterar o Link do Grupo de WhatsApp
O link oficial do WhatsApp está centralizado em duas camadas para facilidade máxima:
1. **Pela variável de ambiente:** Altere `NEXT_PUBLIC_WHATSAPP_GROUP_URL` no `.env.local` ou nas configurações do seu provedor de hospedagem (Vercel/Netlify/etc).
2. **Direto no arquivo de configuração padrão:** [src/config/site.ts](file:///d:/Ofertas_inrresistiveis/src/config/site.ts).
Todos os botões principais, secundários e flutuantes herdam essa variável automaticamente.

---

## 📊 Arquitetura de Analytics e Meta Ads

### Eventos Disparados:
- **`PageView`**: Disparado no carregamento após concessão de consentimento.
- **`ViewContent`**: Disparado ao visualizar a landing page (com parâmetros de campanha).
- **`JoinGroupClick`**: Disparado como Custom Event quando o visitante clica para entrar no grupo, registrando o ID do botão clicado e as UTMs.
> ⚠️ **Atenção Ética e Técnica:** Conforme boas práticas e requisitos, não disparamos eventos de `Lead` ou `Purchase` para simular entradas de grupo, nem enviamos dados pessoais não consentidos em parâmetros de URL.

---

## 📋 Checklist de Publicação em Produção

Antes de colocar as campanhas no ar:
- [ ] Preencher a variável `NEXT_PUBLIC_META_PIXEL_ID` com o ID real do Meta Ads Manager.
- [ ] (Opcional) Gerar o Token de Acesso da Conversions API no Meta Events Manager e preencher `META_CAPI_ACCESS_TOKEN`.
- [ ] Atualizar os dados cadastrais do controlador em `.env.local` (`NEXT_PUBLIC_COMPANY_LEGAL_NAME`, `NEXT_PUBLIC_COMPANY_CNPJ`).
- [ ] Apontar o domínio oficial em `NEXT_PUBLIC_SITE_URL`.
- [ ] Configurar hospedagem (Vercel recomendada: basta conectar o repositório Git e definir as variáveis de ambiente).

---

## 🧪 Resultados dos Testes Técnicos Realizados

- **TypeScript Typecheck:** 0 erros.
- **Next.js Production Build:** Sucesso total (`next build`).
- **First Load JS:** Apenas **112 kB** (extremamente veloz e otimizado para 4G/3G móvel).
- **Rotas e Endpoints Testados:**
  - `GET /`: HTTP 200 OK (Renderizado e verificado)
  - `POST /api/meta-capi`: HTTP 200 OK (Comportamento resiliente e seguro)
  - `GET /robots.txt`: HTTP 200 OK
  - `GET /sitemap.xml`: HTTP 200 OK
  - `GET /opengraph-image`: HTTP 200 OK (Geração nativa de banner social)

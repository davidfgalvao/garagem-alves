# Garagem do Alves – Ordem de Serviço

Sistema web de ordem de serviço para a **Garagem do Alves**, oficina mecânica em São Francisco, Brasília.

Acesse de qualquer dispositivo com internet — computador, tablet ou celular (Android/iOS). Preencha os dados, imprima ou salve em PDF.

## Funcionalidades

- Formulário completo de ordem de serviço / recibo
- Cálculo automático de totais e descontos
- Máscaras para telefone e placa
- Numeração sequencial de OS (salva no navegador)
- Layout responsivo e otimizado para impressão
- Funciona offline após o primeiro carregamento

## Desenvolvimento local

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Deploy na Vercel

### Primeira vez

1. Instale a CLI da Vercel (se ainda não tiver):

```bash
npm i -g vercel
```

2. Na pasta do projeto, faça login e deploy:

```bash
cd garagem_alves
vercel login
vercel
```

3. Para publicar em produção:

```bash
vercel --prod
```

### Via GitHub (recomendado)

1. Crie um repositório no GitHub e envie o código:

```bash
git init
git add .
git commit -m "feat: Adiciona sistema de ordem de serviço da Garagem do Alves"
git remote add origin https://github.com/SEU_USUARIO/garagem-alves.git
git push -u origin main
```

2. Acesse [vercel.com](https://vercel.com), clique em **Add New Project** e importe o repositório.
3. A Vercel detecta automaticamente o site estático — basta clicar em **Deploy**.

## Estrutura do projeto

```
garagem_alves/
├── index.html          # Página principal
├── css/style.css       # Estilos
├── js/app.js           # Lógica do formulário
├── assets/logo.png     # Logo da oficina
├── manifest.json       # PWA (adicionar à tela inicial)
├── vercel.json         # Configuração de deploy
└── package.json
```

## Contato da oficina

- **Telefone / WhatsApp:** (61) 99863-3589
- **Endereço:** Quadra 21, Casa 06 – São Francisco
- **Horário:** Personalizado

---

Desenvolvido por **David Galvão – Arquiteto de Soluções**

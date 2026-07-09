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

## Deploy na Vercel (conta `brunodab10-7017`)

### Passo 1 — Publicar no GitHub (`davidfgalvao`)

No terminal, dentro da pasta do projeto:

```bash
cd /Users/davidgalvao/garagem_alves
gh auth login
gh repo create garagem-alves --public --source=. --remote=origin --push
```

> Se preferir criar pelo site: acesse [github.com/new](https://github.com/new), nomeie `garagem-alves` e depois rode:
>
> ```bash
> git remote add origin https://github.com/davidfgalvao/garagem-alves.git
> git push -u origin main
> ```

### Passo 2 — Conectar na Vercel

1. Acesse [vercel.com/brunodab10-7017s-projects](https://vercel.com/brunodab10-7017s-projects)
2. Clique em **Add New… → Project**
3. Selecione o repositório **`davidfgalvao/garagem-alves`**
4. Mantenha as configurações padrão (Framework: **Other**, sem build command)
5. Clique em **Deploy**

A URL ficará algo como: **`https://garagem-alves.vercel.app`**

### Atualizações futuras

Basta fazer commit e push — a Vercel publica automaticamente:

```bash
git add .
git commit -m "feat: sua alteração"
git push
```

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

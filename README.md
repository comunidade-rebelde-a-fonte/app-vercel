# Quarta Rebelde — A Fonte

Página estática em Astro para a aula de Claude e Claude Code de 25/11/2026, com materiais gratuitos e oferta de Black Friday.

## Desenvolvimento

```sh
npm install
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Produção

```sh
npm run build
```

Publique a pasta `dist/`. Na Vercel, selecione o preset Astro, build `npm run build` e saída `dist`. Não há backend, variáveis de ambiente ou integrações de pagamento nesta página; o botão da oferta abre o carrinho oficial.

## Conteúdo

- `src/pages/index.astro`: textos, link da aula, preço e prazo da oferta.
- `src/styles/global.css`: identidade visual e estilos responsivos.
- `src/data/prompts.json`: os dois prompts completos, extraídos do guia fornecido.
- `src/data/courses.json`: nomes e capas das trilhas oficiais.
- `public/material/slides.html`: apresentação com 24 slides, imagens, navegação por teclado e botões.
- `public/material/prompts-da-aula.txt`: download dos prompts.

As imagens e fontes são servidas localmente. As imagens da aula foram convertidas para WebP; os arquivos de referência originais permanecem nas pastas fornecidas.

Oferta conferida no carrinho em 25/11/2026: de R$ 3.600,00 por R$ 2.700,00 ou 12x de R$ 225,00 sem juros; 12 meses de acesso, garantia de 7 dias e prazo até 30/11/2026 às 23h59 (Brasília). Revise esses textos quando a campanha terminar.

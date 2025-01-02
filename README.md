# Financial Dashboard

Um dashboard financeiro desenvolvido com React e TypeScript para análise e visualização de dados financeiros através de arquivos CSV.

## 🚀 Funcionalidades

### Upload e Processamento de CSV
- Drag and drop de arquivos
- Preview dos dados antes do processamento
- Validação automática de dados
- Suporte para diferentes formatos de delimitadores (vírgula e ponto-vírgula)
- Feedback visual do processo de upload

### Validações Implementadas
- Formato de data (DD/MM/YYYY)
- Tipos de transação (receita/despesa)
- Valores monetários positivos
- Categorias predefinidas
- Campos obrigatórios

### Interface Responsiva
- Layout adaptativo
- Botões flutuantes em mobile
- Feedback visual em tempo real
- Barra de progresso animada

## 🛠️ Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── upload/                      # Componentes de upload
│       ├── CSVUpload.tsx            # Componente principal
│       ├── FileInstructions.tsx     # Instruções do formato
│       ├── FilePreview/             # Preview de dados
│       └── StatusIndicator/         # Indicadores de status
├── services/                        # Serviços
│   ├── csvService.ts               # Processamento CSV
│   └── validationService.ts        # Validações
└── types/                          # Definições de tipos
    └── financial.ts                # Tipos financeiros
```

## 📋 Formato do CSV

O arquivo CSV deve conter as seguintes colunas:

| Coluna     | Formato     | Obrigatório | Descrição                |
|------------|-------------|-------------|--------------------------|
| data       | DD/MM/YYYY  | Sim         | Data da transação        |
| tipo       | texto       | Sim         | receita ou despesa       |
| valor      | número      | Sim         | Valor positivo           |
| categoria  | texto       | Sim         | Categoria da transação   |
| descrição  | texto       | Não         | Descrição opcional       |

### Categorias Válidas
- Salário
- Alimentação
- Transporte
- Freelance
- Lazer
- Saúde
- Vendas
- Aluguel
- Bônus

## 🚀 Como Usar

1. Clone o repositório:
\`\`\`bash
git clone [url-do-repositorio]
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Rode o projeto:
\`\`\`bash
npm run dev
\`\`\`

## 📊 Sprints

### Sprint 1 ✅
- Configuração inicial
- Estrutura básica
- Componentes UI base

### Sprint 2 ✅
- Upload e validação de CSV
- Preview de dados
- Feedback visual
- Interface responsiva

### Sprint 3 🚧
- Visualizações financeiras
- Gráficos interativos
- Filtros de dados
- Dashboard completo

## 📄 Licença

MIT

## 👥 Contribuindo

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

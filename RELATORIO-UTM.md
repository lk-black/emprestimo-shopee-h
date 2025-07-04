# Relatório de Preservação de Parâmetros UTM

## Resumo das Alterações Realizadas

### 1. Página 1 (`1/js/page-handler.js`)
- ✅ Substituída função `getUTMParams()` por `preserveImportantParams()`
- ✅ Adicionada função `createUrlWithParams()` 
- ✅ Atualizado redirecionamento para página 2 para usar a nova função
- ✅ Preserva agora 13 tipos de parâmetros (UTM + tracking)

### 2. Página 2 (`2/index.html`)
- ✅ Adicionadas funções de preservação no início do script
- ✅ Atualizado redirecionamento success para página 3
- ✅ Atualizado redirecionamento error (catch) para página 3
- ✅ Removido código duplicado de criação manual de URLSearchParams

### 3. Página 3 (`3/index.html`)
- ✅ Adicionadas funções de preservação no início do script
- ✅ Atualizado redirecionamento para página 4
- ✅ Simplificado código de preservação de parâmetros

### 4. Página 4 (`4/index.html`)
- ✅ Adicionadas funções de preservação no início do script
- ✅ Preparado para futuros redirecionamentos se necessário

## Parâmetros Preservados

### UTM Parameters (Marketing)
- `utm_source` - Fonte da campanha
- `utm_medium` - Meio da campanha  
- `utm_campaign` - Nome da campanha
- `utm_term` - Termo da campanha
- `utm_content` - Conteúdo da campanha
- `utm_id` - ID da campanha

### Tracking Parameters
- `fbclid` - Facebook Click ID
- `gclid` - Google Click ID
- `xcod` - Código personalizado
- `src` - Source
- `referrer` - Referrer
- `source` - Source alternativo
- `affiliate` - ID de afiliado
- `campaign_id` - ID de campanha
- `ad_id` - ID do anúncio
- `keyword` - Palavra-chave
- `placement` - Posicionamento
- `creative` - Criativo
- `device` - Dispositivo
- `landing` - Página de destino

## Arquivos Criados

### `utm-utils.js` 
Arquivo utilitário com funções reutilizáveis:
- `preserveImportantParams()` - Extrai parâmetros importantes da URL
- `createUrlWithParams()` - Cria URLs com parâmetros preservados
- `getUrlParam()` - Obtém parâmetro específico
- `logTracking()` - Log para debug

### `test-utm.html`
Página de teste para verificar se a preservação está funcionando:
- Mostra parâmetros atuais da URL
- Verifica status da preservação
- Links de teste com diferentes parâmetros
- Testa as funções JavaScript

## Fluxo de Preservação

```
Página 1 (utm_source=facebook&utm_medium=cpc...)
    ↓ [preserva todos os parâmetros + adiciona cpf]
Página 2 (utm_source=facebook&utm_medium=cpc&cpf=123...)
    ↓ [preserva todos os parâmetros + adiciona nome, numero]
Página 3 (utm_source=facebook&utm_medium=cpc&cpf=123&nome=João...)
    ↓ [preserva todos os parâmetros]
Página 4 (utm_source=facebook&utm_medium=cpc&cpf=123&nome=João...)
```

## Como Testar

1. Acesse: `test-utm.html` para verificar as funções
2. Use os links de teste com parâmetros UTM
3. Navegue pelo funil e verifique se os parâmetros são mantidos
4. Verifique o console para logs de tracking

## Benefícios

1. **Consistência**: Mesma lógica em todas as páginas
2. **Completude**: Preserva mais tipos de parâmetros
3. **Manutenibilidade**: Funções centralizadas
4. **Debugging**: Logs para facilitar troubleshooting
5. **Flexibilidade**: Fácil adicionar novos parâmetros

## Próximos Passos

1. Incluir `utm-utils.js` em todas as páginas se desejar centralizar
2. Integrar com Google Analytics/Facebook Pixel usando `logTracking()`
3. Adicionar testes automatizados
4. Monitorar performance de conversão por fonte

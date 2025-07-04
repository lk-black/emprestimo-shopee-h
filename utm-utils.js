// Funções utilitárias para preservação de parâmetros UTM
// Este arquivo deve ser incluído em todas as páginas do funil

/**
 * Função para preservar parâmetros importantes (UTM, tracking, etc.)
 * @returns {URLSearchParams} Objeto com os parâmetros preservados
 */
function preserveImportantParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const importantParams = [
    // Parâmetros UTM principais
    "utm_source", 
    "utm_medium", 
    "utm_campaign", 
    "utm_term", 
    "utm_content", 
    "utm_id",
    // Parâmetros de tracking adiccionais
    "fbclid",      // Facebook Click ID
    "gclid",       // Google Click ID
    "xcod",        // Código personalizado
    "src",         // Source
    "referrer",    // Referrer
    "source",      // Source alternativo
    // Outros parâmetros que podem ser importantes
    "affiliate",   // ID de afiliado
    "campaign_id", // ID de campanha
    "ad_id",       // ID do anúncio
    "keyword",     // Palavra-chave
    "placement",   // Posicionamento
    "creative",    // Criativo
    "device",      // Dispositivo
    "landing"      // Página de destino
  ];
  
  const preservedParams = new URLSearchParams();
  
  importantParams.forEach((param) => {
    if (urlParams.has(param)) {
      preservedParams.set(param, urlParams.get(param));
    }
  });
  
  return preservedParams;
}

/**
 * Função para criar URL com todos os parâmetros preservados
 * @param {string} baseUrl - URL base para redirecionamento
 * @param {Object} additionalParams - Parâmetros adicionais para incluir
 * @returns {string} URL completa com todos os parâmetros
 */
function createUrlWithParams(baseUrl, additionalParams = {}) {
  const preservedParams = preserveImportantParams();
  
  // Adicionar parâmetros adicionais
  Object.entries(additionalParams).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      preservedParams.set(key, value);
    }
  });
  
  const queryString = preservedParams.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * Função para obter um parâmetro específico da URL
 * @param {string} paramName - Nome do parâmetro
 * @returns {string|null} Valor do parâmetro ou null se não existir
 */
function getUrlParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

/**
 * Função para log de tracking para debug
 * @param {string} page - Nome da página
 * @param {string} action - Ação realizada
 */
function logTracking(page, action) {
  const trackingData = {
    page: page,
    action: action,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    params: Object.fromEntries(preserveImportantParams())
  };
  
  console.log('Tracking:', trackingData);
  
  // Aqui você pode adicionar integração com ferramentas de analytics
  // Por exemplo: Google Analytics, Facebook Pixel, etc.
}

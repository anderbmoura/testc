#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para gerar automaticamente componentes React dos SVGs
 *
 * Este script:
 * 1. Lê todos os arquivos .svg da pasta src/assets/icons/
 * 2. Converte cada SVG em um componente React TypeScript
 * 3. Gera exports no index.ts da pasta svg
 */

const ICONS_DIR = path.join(__dirname, '../src/assets/icons');
const SVG_COMPONENTS_DIR = path.join(__dirname, '../src/components/Icon/svg');

/**
 * Converte nome do arquivo SVG para nome do componente
 * Ex: "loterias.svg" -> "Loterias"
 */
function toCamelCase(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase())
    .replace(/\s/g, '');
}

/**
 * Converte nome do arquivo SVG para nome da prop
 * Ex: "loterias.svg" -> "loterias"
 */
function _toPropName(str) {
  return str.replace(/\.svg$/, '').toLowerCase();
}

/**
 * Processa conteúdo do SVG para ser compatível com React
 */
function processSvgContent(svgContent) {
  return (
    svgContent
      // Remove declaração XML
      .replace(/<\?xml[^>]*\?>/g, '')
      // Remove comentários
      .replace(/<!--[\s\S]*?-->/g, '')
      // Converte atributos para camelCase
      .replace(/clip-path=/g, 'clipPath=')
      .replace(/fill-rule=/g, 'fillRule=')
      .replace(/stroke-width=/g, 'strokeWidth=')
      .replace(/stroke-linecap=/g, 'strokeLinecap=')
      .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
      // Substitui cores fixas por props
      .replace(/fill="[^"]*"/g, 'fill={color}')
      .replace(/stroke="[^"]*"/g, 'stroke={color}')
      // Remove espaços desnecessários
      .trim()
  );
}

/**
 * Gera componente React para um SVG
 */
function generateReactComponent(fileName, svgContent) {
  const componentName = toCamelCase(fileName.replace('.svg', ''));
  const processedSvg = processSvgContent(svgContent);

  // Extrai viewBox do SVG
  const viewBoxMatch = processedSvg.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extrai width e height padrão
  const widthMatch = processedSvg.match(/width="([^"]*)"/);
  const heightMatch = processedSvg.match(/height="([^"]*)"/);
  const defaultWidth = widthMatch ? widthMatch[1] : '24';
  const defaultHeight = heightMatch ? heightMatch[1] : '24';

  // Extrai apenas o conteúdo interno do SVG
  const svgInnerContent = processedSvg
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();

  return `import React from 'react';

export interface ${componentName}Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  width = ${defaultWidth},
  height = ${defaultHeight},
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="${viewBox}"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    ${svgInnerContent}
  </svg>
);
`;
}

/**
 * Gera index.ts na pasta svg para exportar todos os componentes
 */
function generateSvgIndex(iconData) {
  const exports = iconData
    .map(
      ({ componentName }) =>
        `export { ${componentName} } from './${componentName}';`
    )
    .join('\n');

  const indexContent = `// Gerado automaticamente - não editar manualmente
${exports}`;

  const svgIndexPath = path.join(SVG_COMPONENTS_DIR, 'index.ts');
  fs.writeFileSync(svgIndexPath, indexContent);
  console.log('✅ Gerado svg/index.ts');
}

/**
 * Função principal
 */
function generateIconComponents() {
  console.log('🚀 Gerando componentes React dos SVGs...');

  // Verifica se a pasta de ícones existe
  if (!fs.existsSync(ICONS_DIR)) {
    console.log('⚠️  Pasta de ícones não encontrada:', ICONS_DIR);
    return;
  }

  // Cria pasta de componentes SVG se não existir
  if (!fs.existsSync(SVG_COMPONENTS_DIR)) {
    fs.mkdirSync(SVG_COMPONENTS_DIR, { recursive: true });
  }

  // Lê arquivos SVG
  const svgFiles = fs
    .readdirSync(ICONS_DIR)
    .filter(file => file.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.log('⚠️  Nenhum arquivo SVG encontrado em:', ICONS_DIR);
    return;
  }

  console.log(`📁 Encontrados ${svgFiles.length} arquivos SVG:`, svgFiles);

  const iconData = [];

  // Processa cada arquivo SVG
  svgFiles.forEach(fileName => {
    try {
      const svgPath = path.join(ICONS_DIR, fileName);
      const svgContent = fs.readFileSync(svgPath, 'utf8');

      const componentName = toCamelCase(fileName.replace('.svg', ''));

      // Gera componente React
      const reactComponent = generateReactComponent(fileName, svgContent);

      // Salva arquivo do componente
      const componentPath = path.join(
        SVG_COMPONENTS_DIR,
        `${componentName}.tsx`
      );
      fs.writeFileSync(componentPath, reactComponent);

      iconData.push({ fileName, componentName });

      console.log(`✅ Gerado: ${componentName}.tsx`);
    } catch (error) {
      console.error(`❌ Erro ao processar ${fileName}:`, error.message);
    }
  });

  // Gera exports dos componentes SVG
  generateSvgIndex(iconData);

  // Executa prettier/lint fix nos arquivos gerados
  try {
    console.log('🔧 Formatando arquivos com Prettier...');
    execSync(`npx prettier --write "${SVG_COMPONENTS_DIR}/*.{ts,tsx}"`, {
      cwd: path.join(__dirname, '../../../'),
      stdio: 'pipe',
    });
    console.log('✅ Arquivos formatados com sucesso!');
  } catch (_error) {
    console.log(
      '⚠️  Aviso: Não foi possível executar o Prettier automaticamente'
    );
    console.log('💡 Execute manualmente: yarn lint --fix');
  }

  console.log(
    `🎉 Gerados ${iconData.length} componentes de ícones com sucesso!`
  );
  console.log(
    '📦 Para usar os ícones, importe diretamente os componentes SVG como children do Icon'
  );
}

// Executa se chamado diretamente
if (require.main === module) {
  generateIconComponents();
}

module.exports = { generateIconComponents };

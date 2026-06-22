import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.resolve('/Users/uxorious/Projects/TEAM-CDI-Content-Creation-Antigravity/Content-Files');
const OUTPUT_FILE = path.resolve('/Users/uxorious/Projects/TEAM-CDI-Content-Creation-Antigravity/src/data/playbook-content.json');

// Ensure output directory exists
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, content: text };
  }
  const fmText = match[1];
  const content = match[2];
  const fm = {};
  fmText.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      } else if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
      } else if (value === 'null') {
        value = null;
      } else if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      }
      fm[key] = value;
    }
  });
  return { frontmatter: fm, content };
}

function inlineParse(text) {
  let html = text;
  
  // Escape standard HTML tags so we don't accidentally execute anything, but allow our custom markup
  // First, temporarily hide our highlights and links so they aren't messed up
  const placeholders = [];
  
  html = html.replace(/\[HIGHLIGHT-(MISS|WARN|OK)\]([\s\S]*?)\[\/HIGHLIGHT-(?:MISS|WARN|OK)\]/g, (match, type, content) => {
    const placeholder = `__HIGHLIGHT_PLACEHOLDER_${placeholders.length}__`;
    placeholders.push({
      placeholder,
      html: `<span class="highlight-${type.toLowerCase()}">${content}</span>`
    });
    return placeholder;
  });

  // Parse inline code: `code`
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // Parse links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="link-custom">$1</a>');

  // Parse bold: **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Parse italic: *text* or _text_
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');

  // Restore placeholders
  placeholders.forEach(p => {
    html = html.replace(p.placeholder, p.html);
  });

  return html;
}

function parseMarkdownToHtml(md) {
  // Normalize line endings
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let i = 0;
  
  while (i < lines.length) {
    let line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Skip horizontal dividers: ---
    if (line.trim() === '---' && lines[i - 1]?.trim() === '' && lines[i + 1]?.trim() === '') {
      html += '<hr class="border-slate-800/40 dark:border-slate-800/50 my-8" />';
      i++;
      continue;
    }

    // Skip comments
    if (line.trim().startsWith('<!--') && line.trim().endsWith('-->')) {
      i++;
      continue;
    }

    // Headings
    if (line.startsWith('# ')) {
      const id = line.slice(2).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      html += `<h1 id="${id}" class="text-3xl sm:text-4xl font-extrabold font-display text-slate-800 dark:text-slate-100 mt-8 mb-6">${inlineParse(line.slice(2))}</h1>`;
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      const id = line.slice(3).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      html += `<h2 id="${id}" class="text-2xl sm:text-3xl font-bold font-display text-slate-850 dark:text-slate-200 mt-10 mb-4 pb-2 border-b border-slate-200/60 dark:border-slate-800/40">${inlineParse(line.slice(3))}</h2>`;
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      const id = line.slice(4).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      html += `<h3 id="${id}" class="text-xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8 mb-3">${inlineParse(line.slice(4))}</h3>`;
      i++;
      continue;
    }
    if (line.startsWith('#### ')) {
      const id = line.slice(5).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      html += `<h4 id="${id}" class="text-lg font-semibold font-display text-slate-800 dark:text-slate-350 mt-6 mb-2">${inlineParse(line.slice(5))}</h4>`;
      i++;
      continue;
    }

    // Code blocks
    if (line.trim().startsWith('```')) {
      let codeLines = [];
      i++; // Skip opening ```
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing ```
      
      const rawCode = codeLines.join('\n');
      // Format highlights inside code blocks
      let formattedCode = rawCode
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\[HIGHLIGHT-(MISS|WARN|OK)\]/g, '<span class="highlight-$1">')
        .replace(/\[\/HIGHLIGHT-(?:MISS|WARN|OK)\]/g, '</span>');
      
      html += `<div class="my-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 font-mono text-sm leading-relaxed overflow-x-auto text-slate-700 dark:text-slate-300 shadow-inner"><pre><code>${formattedCode}</code></pre></div>`;
      continue;
    }

    // Tables
    if (line.trim().startsWith('|')) {
      let tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      
      // Parse Table
      if (tableLines.length >= 2) {
        const headerCols = tableLines[0].split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
        // Skip tableLine[1] as it is the separator (e.g., |---|---|)
        const bodyRows = tableLines.slice(2).map(row => 
          row.split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1)
        );
        
        let tableHtml = '<div class="overflow-x-auto my-6 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-md"><table class="w-full text-sm text-left border-collapse bg-white dark:bg-slate-900/40">';
        tableHtml += '<thead class="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800"><tr class="text-xs uppercase font-semibold font-display tracking-wider text-slate-500 dark:text-slate-400">';
        headerCols.forEach(col => {
          tableHtml += `<th class="py-3 px-4 font-bold">${inlineParse(col)}</th>`;
        });
        tableHtml += '</tr></thead>';
        tableHtml += '<tbody class="divide-y divide-slate-100 dark:divide-slate-800/60">';
        bodyRows.forEach(row => {
          tableHtml += '<tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">';
          row.forEach(cell => {
            tableHtml += `<td class="py-3 px-4 text-slate-650 dark:text-slate-300 font-medium">${inlineParse(cell)}</td>`;
          });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table></div>';
        
        html += tableHtml;
      }
      continue;
    }

    // Bullet Lists
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      let listHtml = '<ul class="list-disc pl-6 my-4 space-y-2 text-slate-600 dark:text-slate-300">';
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        const itemContent = lines[i].trim().substring(2).trim();
        listHtml += `<li class="font-medium">${inlineParse(itemContent)}</li>`;
        i++;
      }
      listHtml += '</ul>';
      html += listHtml;
      continue;
    }

    // Ordered Lists
    if (/^\d+\.\s/.test(line.trim())) {
      let listHtml = '<ol class="list-decimal pl-6 my-4 space-y-2 text-slate-600 dark:text-slate-300">';
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const match = lines[i].trim().match(/^\d+\.\s(.*)/);
        const itemContent = match ? match[1].trim() : '';
        listHtml += `<li class="font-medium">${inlineParse(itemContent)}</li>`;
        i++;
      }
      listHtml += '</ol>';
      html += listHtml;
      continue;
    }

    // Blockquotes & Callouts
    if (line.trim().startsWith('>')) {
      let quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      
      const quoteBody = quoteLines.join('\n').trim();
      let calloutClass = 'callout-info bg-blue-500/5 border-blue-500/20 text-slate-700 dark:text-slate-300';
      let title = 'Clinical Note';
      let cleanBody = quoteBody;
      
      if (quoteBody.startsWith('[CALLOUT-CRITICAL]')) {
        calloutClass = 'callout-critical bg-red-500/5 border-red-500/20 dark:border-red-950/40 text-slate-700 dark:text-slate-300';
        title = 'Critical Structural Fact';
        cleanBody = quoteBody.substring('[CALLOUT-CRITICAL]'.length).trim();
      } else if (quoteBody.startsWith('[CALLOUT-PHRASING]')) {
        calloutClass = 'callout-phrasing bg-emerald-500/5 border-emerald-500/20 text-slate-700 dark:text-slate-300';
        title = 'Documentation Phrasing';
        cleanBody = quoteBody.substring('[CALLOUT-PHRASING]'.length).trim();
      } else if (quoteBody.startsWith('[CALLOUT-WARNING]')) {
        calloutClass = 'callout-warning bg-amber-500/5 border-amber-500/20 text-slate-700 dark:text-slate-300';
        title = 'Audit Warning';
        cleanBody = quoteBody.substring('[CALLOUT-WARNING]'.length).trim();
      } else if (quoteBody.startsWith('[CALLOUT-INFO]')) {
        calloutClass = 'callout-info bg-blue-500/5 border-blue-500/20 text-slate-700 dark:text-slate-300';
        title = 'Reimbursement Info';
        cleanBody = quoteBody.substring('[CALLOUT-INFO]'.length).trim();
      } else if (quoteBody.startsWith('[CALLOUT-MISS]')) {
        calloutClass = 'callout-miss bg-rose-500/5 border-rose-500/20 text-slate-700 dark:text-slate-300';
        title = 'Documentation Miss';
        cleanBody = quoteBody.substring('[CALLOUT-MISS]'.length).trim();
      } else if (quoteBody.startsWith('[CALLOUT-OK]')) {
        calloutClass = 'callout-ok bg-emerald-500/5 border-emerald-500/20 text-slate-700 dark:text-slate-300';
        title = 'Optimal Capture';
        cleanBody = quoteBody.substring('[CALLOUT-OK]'.length).trim();
      } else if (quoteBody.startsWith('[PEARL]')) {
        calloutClass = 'callout-pearl bg-teal-500/5 border-teal-500/20 text-slate-700 dark:text-slate-300';
        title = 'TEAM Documentation Pearl';
        cleanBody = quoteBody.substring('[PEARL]'.length).trim();
      } else if (quoteBody.startsWith('[NOTE]')) {
        calloutClass = 'callout-note bg-slate-500/5 border-slate-500/20 text-slate-700 dark:text-slate-300';
        title = 'Important Note';
        cleanBody = quoteBody.substring('[NOTE]'.length).trim();
      } else if (quoteBody.startsWith('[DENIAL-RISK]')) {
        calloutClass = 'callout-denial bg-orange-500/5 border-orange-500/20 text-slate-700 dark:text-slate-300';
        title = 'Audit Denial Risk';
        cleanBody = quoteBody.substring('[DENIAL-RISK]'.length).trim();
      }

      // Convert double newlines inside blockquote to p tags
      const blocksHtml = cleanBody.split('\n\n').map(pText => `<p class="mb-2 last:mb-0">${inlineParse(pText.replace(/\n/g, '<br />'))}</p>`).join('');

      html += `<div class="my-6 p-4 pl-5 rounded-lg border-l-4 ${calloutClass}">`;
      html += `<div class="text-xs uppercase font-bold tracking-wider font-display mb-1.5 opacity-90">${title}</div>`;
      html += `<div class="text-sm font-medium leading-relaxed">${blocksHtml}</div>`;
      html += `</div>`;
      continue;
    }

    // Paragraph callouts (starting with inline tags: [PEARL], [NOTE], [DENIAL-RISK])
    let pContent = line.trim();
    if (pContent.startsWith('[PEARL]') || pContent.startsWith('[NOTE]') || pContent.startsWith('[WARN]') || pContent.startsWith('[DENIAL-RISK]')) {
      let calloutClass = 'bg-slate-500/5 border-slate-500/20';
      let title = 'Note';
      let cleanText = pContent;
      
      if (pContent.startsWith('[PEARL]')) {
        calloutClass = 'bg-teal-500/5 border-teal-500/20 text-teal-800 dark:text-teal-400';
        title = 'TEAM Pearl';
        cleanText = pContent.substring('[PEARL]'.length).trim();
      } else if (pContent.startsWith('[NOTE]')) {
        calloutClass = 'bg-slate-500/5 border-slate-500/20 text-slate-700 dark:text-slate-300';
        title = 'Note';
        cleanText = pContent.substring('[NOTE]'.length).trim();
      } else if (pContent.startsWith('[DENIAL-RISK]')) {
        calloutClass = 'bg-orange-500/5 border-orange-500/20 text-orange-850 dark:text-orange-400';
        title = 'Denial Risk';
        cleanText = pContent.substring('[DENIAL-RISK]'.length).trim();
      } else if (pContent.startsWith('[WARN]')) {
        calloutClass = 'bg-amber-500/5 border-amber-500/20 text-amber-850 dark:text-amber-400';
        title = 'Warning';
        cleanText = pContent.substring('[WARN]'.length).trim();
      }
      
      html += `<div class="my-6 p-4 rounded-lg border border-l-4 ${calloutClass}">`;
      html += `<strong class="font-display font-bold text-xs uppercase tracking-wider block mb-1">${title}</strong>`;
      html += `<p class="text-sm font-medium leading-relaxed mb-0">${inlineParse(cleanText)}</p>`;
      html += `</div>`;
      i++;
      continue;
    }

    // Default Paragraph
    html += `<p class="my-4 text-slate-650 dark:text-slate-300 font-medium leading-relaxed">${inlineParse(line)}</p>`;
    i++;
  }
  
  return html;
}

function processFiles() {
  const contentMap = {};
  
  // 1. Process files in Content-Files root
  const rootFiles = fs.readdirSync(CONTENT_DIR);
  rootFiles.forEach(file => {
    const fullPath = path.join(CONTENT_DIR, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile() && file.endsWith('.md')) {
      const rawText = fs.readFileSync(fullPath, 'utf8');
      const { frontmatter, content } = parseFrontmatter(rawText);
      const html = parseMarkdownToHtml(content);
      
      const route = frontmatter.route || `/${file.replace('.md', '')}`;
      contentMap[route] = {
        title: frontmatter.title || '',
        procedure: frontmatter.procedure || null,
        drgFamily: frontmatter['drg-family'] || null,
        tierStructure: frontmatter['tier-structure'] || null,
        route,
        html
      };
    }
  });

  // 2. Process files in procedures-5-quick-reference-cards subdirectory
  const cardsDir = path.join(CONTENT_DIR, 'procedures-5-quick-reference-cards');
  if (fs.existsSync(cardsDir)) {
    const cardFiles = fs.readdirSync(cardsDir);
    cardFiles.forEach(file => {
      const fullPath = path.join(cardsDir, file);
      if (fs.statSync(fullPath).isFile() && file.endsWith('.md')) {
        const rawText = fs.readFileSync(fullPath, 'utf8');
        const { frontmatter, content } = parseFrontmatter(rawText);
        const html = parseMarkdownToHtml(content);
        
        const route = frontmatter.route || `/reference/${file.replace('reference-', '').replace('.md', '')}`;
        contentMap[route] = {
          title: frontmatter.title || '',
          procedure: frontmatter.procedure || null,
          drgFamily: frontmatter['drg-family'] || null,
          tierStructure: frontmatter['tier-structure'] || null,
          route,
          html
        };
      }
    });
  }

  // Write content map to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(contentMap, null, 2), 'utf8');
  console.log(`Successfully compiled ${Object.keys(contentMap).length} modules to ${OUTPUT_FILE}`);
}

processFiles();

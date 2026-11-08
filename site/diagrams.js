// Original diagrams as inline SVG (no extra requests, no layout shift, theme-aware via CSS variables).
// Drawn vertically so text stays readable on phones.
import { esc } from './html.js'

const FILL = 'fill:color-mix(in srgb,var(--color-accent) 12%,transparent);stroke:var(--color-accent);stroke-width:1.5'
const ARROW = 'stroke:var(--color-accent-2);stroke-width:2;fill:none'

const wrapText = (text, max) => {
  const words = text.split(' '); const lines = []; let cur = ''
  for (const w of words) { if ((cur + ' ' + w).trim().length > max) { lines.push(cur); cur = w } else cur = (cur + ' ' + w).trim() }
  if (cur) lines.push(cur); return lines
}
const box = (x, y, w, h, title, sub, maxChars) => {
  const sl = sub ? wrapText(sub, maxChars) : []
  const total = 1 + sl.length; const lh = 17; const startY = y + h / 2 - ((total - 1) * lh) / 2 + 5
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" style="${FILL}"/>` +
    `<text x="${x + w / 2}" y="${startY}" text-anchor="middle" style="fill:#fff;font:600 15px system-ui,sans-serif">${esc(title)}</text>` +
    sl.map((l, i) => `<text x="${x + w / 2}" y="${startY + (i + 1) * lh}" text-anchor="middle" style="fill:#d4d4d8;font:13px system-ui,sans-serif">${esc(l)}</text>`).join('')
}
const svg = (id, w, h, title, desc, inner) =>
  `<svg role="img" aria-labelledby="${id}-t ${id}-d" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" class="h-auto w-full" xmlns="http://www.w3.org/2000/svg"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc)}</desc>${inner}</svg>`

/** Trigger -> AI step -> human review -> action */
export function pipelineSvg() {
  const steps = [
    ['1. Trigger', 'A new order, message, product or scheduled time'],
    ['2. AI step', 'Classify, summarise, extract or draft'],
    ['3. Human review', 'Approve anything risky: prices, refunds, publishing'],
    ['4. Action', 'Save, send, publish or update, and log what happened'],
  ]
  let inner = ''
  steps.forEach(([t, s], i) => {
    const y = 10 + i * 100
    inner += box(30, y, 360, 66, t, s, 44)
    if (i < steps.length - 1) inner += `<path d="M210 ${y + 66} V${y + 100}" style="${ARROW}"/><path d="M203 ${y + 92} L210 ${y + 100} L217 ${y + 92}" style="${ARROW}"/>`
  })
  return svg('pipeline', 420, 376, 'How a safe automation flows', 'Four steps from top to bottom: a trigger starts it, an AI step does the thinking, a person reviews anything risky, then an action is carried out and logged.', inner)
}

/** Three questions that choose between workflow, chatbot and agent */
const lines = (cx, y, h, text, max, size, weight, color) => {
  const ls = wrapText(text, max); const lh = size + 4
  return ls.map((l, k) => `<text x="${cx}" y="${y + h / 2 - ((ls.length - 1) * lh) / 2 + size / 2.4 + k * lh}" text-anchor="middle" style="fill:${color};font:${weight} ${size}px system-ui,sans-serif">${esc(l)}</text>`).join('')
}
export function decisionSvg() {
  const rows = [
    ['Are the steps known and repeatable?', 'Build a workflow, with an AI step where input is messy'],
    ['Do people mainly need answers to questions?', 'Use a chatbot grounded in your approved content'],
    ['Does the next step depend on what is found?', 'Consider an agent, with guardrails and approval'],
  ]
  let inner = ''
  rows.forEach(([q, a], i) => {
    const y = 10 + i * 104
    inner += `<rect x="10" y="${y}" width="190" height="80" rx="14" style="${FILL}"/>` + lines(105, y, 80, q, 22, 14, 600, '#fff')
    inner += `<path d="M200 ${y + 40} H238" style="${ARROW}"/><path d="M231 ${y + 33} L238 ${y + 40} L231 ${y + 47}" style="${ARROW}"/>`
    inner += `<text x="219" y="${y + 28}" text-anchor="middle" style="fill:#a5f3fc;font:600 12px system-ui,sans-serif">Yes</text>`
    inner += `<rect x="238" y="${y}" width="172" height="80" rx="14" style="${FILL}"/>` + lines(324, y, 80, a, 22, 13, 400, '#e4e4e7')
  })
  return svg('decision', 420, 322, 'Workflow, chatbot or agent: three questions', 'Three rows, each a question on the left and the answer if yes on the right: known steps mean a workflow, mostly questions mean a chatbot, and a next step that depends on what is found means an agent.', inner)
}

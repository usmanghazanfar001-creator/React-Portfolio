import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, MotionConfig, useScroll, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight, ArrowUp, Phone, MapPin, X, Menu, Check, Send,
  Code2, BrainCircuit, Globe2, Workflow, Sparkles, LayoutTemplate, Building2, Server, Wrench,
  GraduationCap, Briefcase, Handshake, Search, Target,
} from 'lucide-react'
import {
  PROFILE, HERO, NAV_LINKS, ABOUT, SKILL_GROUPS, SERVICES, PROJECTS,
  PROJECT_FILTERS, TIMELINE, WHY_WORK,
} from './data/content'
import profileImg from './assets/images/profile.webp'
import { SITE } from '../site/config'
import { GithubIcon, WhatsAppIcon, FiverrIcon, GmailIcon, LinkedInIcon } from './components/BrandIcons'

const ICONS = { Code2, BrainCircuit, Globe2, Workflow, Sparkles, LayoutTemplate, Building2, MapPin, GraduationCap, Briefcase, Handshake, Search, Target, Server, Wrench }
const Icon = ({ name, ...p }) => { const C = ICONS[name] || Sparkles; return <C aria-hidden="true" {...p} /> }

// Optional screenshots: src/assets/projects/<project-key>.webp|png|jpg (see the README in that folder).
const SHOTS = import.meta.glob('./assets/projects/*.{webp,png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })
const shotFor = (key) => Object.entries(SHOTS).find(([path]) => path.split('/').pop().replace(/\.\w+$/, '') === key)?.[1]

/* ---------- primitives ---------- */
const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
)

// Editorial layout: title column on the left (desktop), content on the right. `wide` stacks them for dense content.
const Section = ({ id, n, eyebrow, title, wide, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
    <div className={wide ? '' : 'grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12'}>
      <Reveal className={wide ? 'mb-12 max-w-3xl' : 'lg:col-span-4'}>
        <p className="eyebrow">{n} — {eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      </Reveal>
      <div className={wide ? '' : 'lg:col-span-8'}>{children}</div>
    </div>
  </section>
)

/* ---------- navigation ---------- */
const NUM = { about: '01', skills: '02', projects: '03', experience: '04', services: '05', why: '06', contact: '07' }
function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const btn = useRef(null)
  const { scrollYProgress } = useScroll()
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV_LINKS.forEach(({ href }) => { const el = document.querySelector(href); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    if (!open) return
    const k = (e) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus() } }
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [open])
  const link = (cur) => `relative rounded-full px-3 py-2 text-sm transition ${cur ? 'text-white' : 'text-zinc-400 hover:text-white'}`
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/95">
      <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent" aria-hidden="true" />
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-white" aria-label={`${PROFILE.name} — home`}>
          <span aria-hidden="true" className="size-2 rounded-sm bg-accent" />{PROFILE.name}
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.filter((l) => l.href !== '#home').map((l) => (
            <li key={l.href} className={l.href === '#services' ? 'group relative' : undefined}>
              <a href={l.href} aria-current={active === l.href.slice(1) ? 'true' : undefined} className={link(active === l.href.slice(1))}>
                <span aria-hidden="true" className="mr-1.5 font-mono text-[10px] text-zinc-500">{NUM[l.href.slice(1)]}</span>{l.label}
                {active === l.href.slice(1) && <motion.span layoutId="nav-ind" aria-hidden="true" className="absolute inset-x-3 -bottom-[14px] h-px bg-accent" />}
              </a>
              {l.href === '#services' && (
                <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-xl border border-line bg-panel p-2">
                    <li aria-hidden="true" className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">AI, automation &amp; development</li>
                    {SITE.globalPages.map((s) => <li key={s.slug}><a href={`/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5 hover:text-white">{s.label}</a></li>)}
                    <li aria-hidden="true" className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Web design · Sharjah &amp; UAE</li>
                    {SITE.servicePages.map((s) => <li key={s.slug}><a href={`/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5 hover:text-white">{s.label}</a></li>)}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li><a href="/blog" className={link(false)}>Blog</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary hidden md:inline-flex">Contact Me</a>
        <button ref={btn} className="grid size-11 place-items-center rounded-full md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-line bg-ink p-3 md:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block rounded-lg px-4 py-3 text-white hover:bg-white/5">{l.label}</a>
                {l.href === '#services' && [...SITE.globalPages, ...SITE.servicePages].map((s) => <a key={s.slug} href={`/${s.slug}`} className="block rounded-lg px-4 py-2.5 pl-8 text-sm text-zinc-400 hover:bg-white/5 hover:text-white">{s.label}</a>)}
              </li>
            ))}
            <li><a href="/blog" className="block rounded-lg px-4 py-3 text-white hover:bg-white/5">Blog</a></li>
            <li className="p-2"><a onClick={() => setOpen(false)} href="#contact" className="btn btn-primary w-full">Contact Me</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- hero ---------- */
// Simplified architecture of the real "AI E-Commerce Store Manager" project (LangGraph orchestrating specialised agents over a Shopify store).
const AGENTS = ['Product research', 'SEO', 'Listing generation', 'Customer support', 'Analytics']
function AgentDiagram() {
  const rm = useReducedMotion()
  const y = (i) => 22 + i * 40
  const draw = (d) => ({ initial: { pathLength: rm ? 1 : 0 }, animate: { pathLength: 1 }, transition: { duration: rm ? 0 : 0.8, delay: rm ? 0 : d, ease: 'easeOut' } })
  return (
    <figure className="mt-5">
      <svg viewBox="0 0 440 232" role="img" aria-labelledby="agent-t agent-d" className="h-auto w-full">
        <title id="agent-t">Agent architecture</title>
        <desc id="agent-d">A LangGraph orchestrator routes tasks to five specialised agents (product research, SEO, listing generation, customer support and analytics) that operate on a Shopify store.</desc>
        <rect x="2" y="86" width="96" height="48" rx="10" className="fill-ink stroke-line" />
        <text x="50" y="115" textAnchor="middle" className="fill-zinc-300 font-mono text-[11px]">store task</text>
        <rect x="150" y="76" width="112" height="68" rx="10" className="fill-accent/10 stroke-accent" />
        <text x="206" y="107" textAnchor="middle" className="fill-white font-display text-[13px] font-semibold">LangGraph</text>
        <text x="206" y="125" textAnchor="middle" className="fill-zinc-400 font-mono text-[10px]">orchestrator</text>
        <motion.path d="M98 110 H150" className="stroke-accent" fill="none" strokeWidth="1.5" {...draw(0.2)} />
        {AGENTS.map((a, i) => (
          <g key={a}>
            <motion.path d={`M262 110 C 290 110, 290 ${y(i) + 14}, 318 ${y(i) + 14}`} className="stroke-accent/60" fill="none" strokeWidth="1.25" {...draw(0.6 + i * 0.12)} />
            <rect x="318" y={y(i)} width="118" height="28" rx="8" className="fill-ink stroke-line" />
            <circle cx="330" cy={y(i) + 14} r="2.5" className="fill-signal" />
            <text x="342" y={y(i) + 18} className="fill-zinc-300 font-mono text-[10px]">{a}</text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 border-t border-line pt-3 font-mono text-[11px] text-zinc-500">Simplified architecture of my AI E-Commerce Store Manager: LangGraph, LangChain, Shopify.</figcaption>
    </figure>
  )
}

// Decorative typed line (hero only). Hidden from assistive tech; shows instantly under reduced motion.
function Typed({ text }) {
  const rm = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (rm) { setN(text.length); return }
    let i = 0
    const t = setInterval(() => { i += 1; setN(i); if (i >= text.length) clearInterval(t) }, 38)
    return () => clearInterval(t)
  }, [text, rm])
  return <code aria-hidden="true">{text.slice(0, n)}{n < text.length && <span className="ml-px inline-block h-3 w-1.5 translate-y-0.5 bg-signal" />}</code>
}

function Hero() {
  const social = [
    { Ic: GithubIcon, label: 'GitHub', href: PROFILE.github },
    { Ic: LinkedInIcon, label: 'LinkedIn', href: PROFILE.linkedin },
    { Ic: GmailIcon, label: 'Email', href: `mailto:${PROFILE.email}` },
  ]
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="aurora absolute inset-0" aria-hidden="true" /><div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div>
          {PROFILE.openToWork && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="chip inline-flex items-center gap-2">
              <motion.span aria-hidden="true" initial={{ scale: 1 }} animate={{ scale: [1, 1.8, 1] }} transition={{ duration: 1.2, delay: 0.6 }} className="size-1.5 rounded-full bg-signal" />Open to work and freelance projects
            </motion.p>
          )}
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mt-6 font-display tracking-tight">
            <span className="block text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">{HERO.headline}</span>
            <span className="mt-4 block text-xl font-medium text-accent-2 sm:text-2xl">{HERO.headlineRest}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-6 max-w-xl text-lg text-zinc-400">{HERO.support}</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">View Projects <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="#contact" className="btn btn-ghost">Contact Me</a>
            </div>
            <ul aria-label="Social links" className="mt-8 flex flex-wrap items-center gap-2">
              {social.map(({ Ic, label, href }) => (
                <li key={label}>
                  <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-zinc-300 transition hover:border-accent/50 hover:text-white">
                    <Ic size={16} aria-hidden="true" />{label}{href.startsWith('http') && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-zinc-500"><MapPin size={14} aria-hidden="true" /> {PROFILE.location}</p>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="card p-5 sm:p-6">
          <div className="flex items-center gap-4 border-b border-line pb-5">
            <img src={profileImg} width="470" height="470" fetchPriority="high" decoding="async" alt={`${PROFILE.name}, ${PROFILE.title}, based in Faisalabad, Pakistan`} className="size-16 shrink-0 rounded-full border border-line object-cover object-top" />
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold text-white">{PROFILE.name}</p>
              <p className="text-sm text-zinc-400">{PROFILE.title}</p>
            </div>
          </div>
          <div className="mt-5 rounded-lg border border-line bg-ink px-3 py-2 font-mono text-xs text-zinc-400"><span aria-hidden="true" className="mr-2 text-signal">$</span><Typed text={'graph.invoke({"task": "update product SEO"})'} /></div>
          <AgentDiagram />
          <ul aria-label="Core technologies" className="mt-5 flex flex-wrap gap-2">{HERO.badges.map((b) => <li key={b} className="chip">{b}</li>)}</ul>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- about ---------- */
const ABOUT_LABELS = ['Who I am', 'What I build', 'Now & next']
const About = () => (
  <Section id="about" n="01" eyebrow="About" title="Engineering with both the product and the growth in mind.">
    <div className="space-y-8">
      <Reveal>
        <div className="space-y-6">
          {ABOUT.intro.map((p, i) => (
            <div key={i} className="grid gap-2 border-t border-line pt-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">{ABOUT_LABELS[i]}</h3>
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">{p}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-display text-lg text-white">At a glance</h3>
            <ul className="mt-4 space-y-3">{ABOUT.highlights.map((h) => <li key={h.text} className="flex items-start gap-3 text-sm text-zinc-300"><Icon name={h.icon} size={18} className="mt-0.5 shrink-0 text-accent" />{h.text}</li>)}</ul>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg text-white">Technical interests</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{ABOUT.interests.map((i) => <li key={i} className="chip">{i}</li>)}</ul>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>
)

/* ---------- skills ---------- */
const Skills = () => (
  <Section id="skills" n="02" eyebrow="Skills" title="The stack behind the products." wide>
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SKILL_GROUPS.map((g, i) => (
        <li key={g.key}>
          <Reveal delay={(i % 3) * 0.05} className="h-full">
            <div className="card h-full p-6">
              <Icon name={g.icon} className="text-accent" size={24} />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{g.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{g.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
)

/* ---------- projects ---------- */
const hostOf = (url) => { try { return new URL(url).host } catch { return '' } }

// Architecture overview built only from each project's real features/stack (see `flow` in content.js).
function MiniFlow({ steps }) {
  if (!steps?.length) return null
  return (
    <ol aria-label="Architecture overview" className="flex flex-wrap items-center gap-y-2 rounded-xl border border-line bg-ink p-4 font-mono text-[11px] text-zinc-300">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center">
          <motion.span initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.35 }}
            className="flex items-center gap-2 rounded-md border border-line bg-panel px-2.5 py-1.5"><span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />{s}</motion.span>
          {i < steps.length - 1 && <motion.span aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 + 0.1, duration: 0.3 }} className="mx-1 h-px w-4 origin-left bg-accent/70 sm:w-6" />}
        </li>
      ))}
    </ol>
  )
}

const TABS = ['Problem', 'Solution', 'Stack']
function ProjectModal({ p, no, onClose }) {
  const closeRef = useRef(null)
  const [tab, setTab] = useState(0)
  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus()
    const k = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = ''; opener?.focus?.() }
  }, [onClose])
  const trap = (e) => {
    if (e.key !== 'Tab') return
    const els = [...e.currentTarget.querySelectorAll('a[href],button:not([disabled])')]
    if (!els.length) return
    const first = els[0], last = els[els.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }
  const tabKey = (e) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    e.preventDefault()
    const next = (tab + d + TABS.length) % TABS.length
    setTab(next); document.getElementById(`pm-tab-${next}`)?.focus()
  }
  const shot = shotFor(p.key)
  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/75 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-labelledby="pm-title" onKeyDown={trap} onClick={(e) => e.stopPropagation()} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }}
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-panel p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="eyebrow">Case {no} · {p.kind}</p><h3 id="pm-title" className="mt-2 font-display text-2xl font-semibold text-white">{p.title}</h3></div>
          <button ref={closeRef} onClick={onClose} aria-label="Close dialog" className="grid size-11 shrink-0 place-items-center rounded-full hover:bg-white/10"><X size={20} aria-hidden="true" /></button>
        </div>
        {shot && <img src={shot} width="1280" height="800" loading="lazy" decoding="async" alt={`Screenshot of ${p.title}`} className="mt-5 aspect-[16/10] w-full rounded-xl border border-line object-cover object-top" />}
        <div className="mt-5"><MiniFlow steps={p.flow} /></div>
        <div role="tablist" aria-label="Case file" onKeyDown={tabKey} className="mt-6 flex gap-1 border-b border-line">
          {TABS.map((t, i) => (
            <button key={t} id={`pm-tab-${i}`} role="tab" aria-selected={tab === i} aria-controls={`pm-panel-${i}`} tabIndex={tab === i ? 0 : -1} onClick={() => setTab(i)}
              className={`-mb-px min-h-11 border-b-2 px-4 font-mono text-xs uppercase tracking-widest transition ${tab === i ? 'border-accent text-white' : 'border-transparent text-zinc-500 hover:text-white'}`}>{t}</button>
          ))}
        </div>
        <div id={`pm-panel-${tab}`} role="tabpanel" aria-labelledby={`pm-tab-${tab}`} tabIndex={0} className="mt-5 min-h-32">
          {tab === 0 && <p className="text-zinc-400">{p.problem}</p>}
          {tab === 1 && <p className="text-zinc-400">{p.solution}</p>}
          {tab === 2 && (
            <>
              <ul className="flex flex-wrap gap-2" aria-label="Technologies">{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
              <ul className="mt-4 space-y-1.5">{p.features.map((f) => <li key={f} className="flex items-start gap-2 text-zinc-400"><Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-accent" />{f}</li>)}</ul>
            </>
          )}
        </div>
        {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-7">{p.linkType === 'github' ? 'View source' : 'Open live demo'} <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ p, no, onOpen, lead }) {
  const src = shotFor(p.key)
  return (
    <motion.article layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
      className={`card flex flex-col p-5 ${lead ? 'md:col-span-3' : 'md:col-span-2'}`}>
      <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest">
        <p className="text-accent-2">Case {no} · {p.kind}</p>
        {p.link && <p className="flex items-center gap-1.5 text-zinc-500"><span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />{p.linkType === 'github' ? 'Open source' : hostOf(p.link)}</p>}
      </div>
      <h3 className={`mt-3 font-display font-semibold text-white ${lead ? 'text-2xl' : 'text-xl'}`}>{p.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
      {src && <img src={src} width="1280" height="800" loading="lazy" decoding="async" alt={`Screenshot of ${p.title}`} className="mt-4 aspect-[16/10] w-full rounded-xl border border-line object-cover object-top" />}
      <div className="mt-4"><MiniFlow steps={p.flow} /></div>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
        {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{p.linkType === 'github' ? 'Source' : 'Live demo'}<span className="sr-only"> for {p.title} (opens in a new tab)</span><ArrowUpRight size={15} aria-hidden="true" /></a>}
        <button onClick={() => onOpen(p)} className="btn btn-ghost">Case file<span className="sr-only"> for {p.title}</span></button>
      </div>
    </motion.article>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const [sel, setSel] = useState(null)
  const ordered = [...PROJECTS].sort((a, b) => (a.featured || 99) - (b.featured || 99))
  const no = (p) => String(ordered.findIndex((x) => x.key === p.key) + 1).padStart(2, '0')
  const list = ordered.filter((p) => filter === 'All' || p.filters.includes(filter))
  return (
    <Section id="projects" n="03" eyebrow="Projects" title="Selected work, shipped and live where possible." wide>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {PROJECT_FILTERS.map((f) => (
          <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)} className={`min-h-11 rounded-full border px-4 font-mono text-xs transition ${filter === f ? 'border-accent bg-accent text-ink' : 'border-line text-zinc-300 hover:border-white/25'}`}>{f}</button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">Showing {list.length} project{list.length === 1 ? '' : 's'}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => <ProjectCard key={p.key} p={p} no={no(p)} onOpen={setSel} lead={i < 2} />)}
        </AnimatePresence>
      </div>
      <AnimatePresence>{sel && <ProjectModal p={sel} no={no(sel)} onClose={() => setSel(null)} />}</AnimatePresence>
      <p className="mt-8 text-sm"><a href="/portfolio" className="text-accent-2 underline underline-offset-4 hover:text-white">Read the full case studies</a></p>
    </Section>
  )
}

/* ---------- services (kept: feeds the service landing pages) ---------- */
const Services = () => (
  <Section id="services" n="05" eyebrow="Services" title="What I can build for you.">
    <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
      {SERVICES.map((s, i) => (
        <li key={s.key}>
          <Reveal delay={(i % 2) * 0.05}>
            <div className="border-t border-line py-6">
              <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">{s.points.map((pt) => <li key={pt} className="flex items-center gap-2"><Check size={14} aria-hidden="true" className="text-accent" />{pt}</li>)}</ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
    <Reveal className="mt-6">
      <div className="card flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
        <p className="font-display text-xl font-semibold text-white">Need help with AI automation or a website?</p>
        <a href="#contact" className="btn btn-primary shrink-0">Get a free consultation</a>
      </div>
    </Reveal>
    <Reveal className="mt-10">
      <p className="text-sm text-zinc-500">AI, automation and development services (worldwide)</p>
      <ul className="mt-3 flex flex-wrap gap-2">{SITE.globalPages.map((s) => <li key={s.slug}><a href={`/${s.slug}`} className="chip inline-block transition hover:border-accent/50 hover:text-white">{s.label}</a></li>)}</ul>
      <p className="mt-6 text-sm text-zinc-500">Web services for businesses in Sharjah, Dubai and the UAE</p>
      <ul className="mt-3 flex flex-wrap gap-2">{SITE.servicePages.map((s) => <li key={s.slug}><a href={`/${s.slug}`} className="chip inline-block transition hover:border-accent/50 hover:text-white">{s.label}</a></li>)}</ul>
      <p className="mt-6 text-sm text-zinc-500">Popular guides</p>
      <ul className="mt-3 flex flex-wrap gap-2">{SITE.featuredGuides.map((g) => <li key={g.slug}><a href={`/blog/${g.slug}`} className="chip inline-block transition hover:border-accent/50 hover:text-white">{g.label}</a></li>)}</ul>
      <p className="mt-6 text-sm"><a href="/services" className="text-accent-2 underline underline-offset-4 hover:text-white">View all services</a></p>
    </Reveal>
  </Section>
)

/* ---------- experience & education ---------- */
const Experience = () => (
  <Section id="experience" n="04" eyebrow="Experience & Education" title="Where I work and what I'm studying.">
    <ol className="relative space-y-6 border-l border-line pl-8">
      {TIMELINE.map((t) => (
        <li key={t.key}>
          <Reveal>
            <div className="card relative p-6">
              <span aria-hidden="true" className="absolute -left-[3.15rem] top-6 grid size-9 place-items-center rounded-full border border-line bg-ink text-accent">
                {t.type === 'education' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
              </span>
              <p className="eyebrow">{t.type === 'education' ? 'Education' : 'Experience'} · {t.date}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{t.title}</h3>
              <p className="text-sm text-zinc-500">{t.place}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-zinc-300 sm:grid-cols-2">{t.bullets.map((b) => <li key={b} className="flex items-start gap-2"><Check size={14} aria-hidden="true" className="mt-1 shrink-0 text-accent" />{b}</li>)}</ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
)

/* ---------- why work with me ---------- */
const WhyWork = () => (
  <Section id="why" n="06" eyebrow="Approach" title="What you get when we work together.">
    <ol className="space-y-0">
      {WHY_WORK.map((w, i) => (
        <li key={w.title}>
          <Reveal>
            <div className="grid gap-2 border-t border-line py-5 sm:grid-cols-[3rem_1fr] sm:gap-4">
              <span aria-hidden="true" className="font-mono text-sm text-accent-2">{String(i + 1).padStart(2, '0')}</span>
              <div><h3 className="font-display text-lg font-semibold text-white">{w.title}</h3><p className="mt-1 text-sm leading-relaxed text-zinc-400">{w.text}</p></div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
)

/* ---------- contact ---------- */
const PROJECT_TYPES = [...SERVICES.map((s) => s.title), 'Something else']
// Set VITE_CONTACT_ENDPOINT (e.g. a Formspree form URL) to send messages straight from the page. Without it the form
// opens the visitor's email app with the message filled in, so it works with zero backend.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const fieldCls = (bad) => `mt-2 w-full rounded-xl border bg-ink px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent/50 ${bad ? 'border-red-400' : 'border-line focus:border-accent'}`
const validate = (f) => {
  const e = {}
  if (!f.name.trim()) e.name = 'Enter your name.'
  if (!f.email.trim()) e.email = 'Enter your email address.'
  else if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter an email address like name@example.com.'
  if (f.message.trim().length < 10) e.message = 'Tell me a little about the project (at least 10 characters).'
  return e
}
function Contact() {
  const [f, setF] = useState({ name: '', email: '', type: PROJECT_TYPES[0], message: '', _gotcha: '' })
  const [errs, setErrs] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | mailto
  const summary = useRef(null)
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }))
  const blur = (k) => () => setErrs((v) => ({ ...v, [k]: validate(f)[k] }))
  const text = () => [`Name: ${f.name}`, `Email: ${f.email}`, `Project type: ${f.type}`, '', 'Message:', f.message].join('\n')
  const fail = (e) => { setErrs(e); requestAnimationFrame(() => summary.current?.focus()) }
  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate(f)
    if (Object.keys(e).length) return fail(e)
    setErrs({})
    if (!ENDPOINT) { setStatus('mailto'); window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Project enquiry: ' + f.type)}&body=${encodeURIComponent(text())}`; return }
    setStatus('sending')
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: f.name, email: f.email, type: f.type, message: f.message, _gotcha: f._gotcha }) })
      if (!r.ok) throw new Error(String(r.status))
      setStatus('sent'); setF({ name: '', email: '', type: PROJECT_TYPES[0], message: '', _gotcha: '' })
    } catch { setStatus('error') }
  }
  const whatsapp = () => {
    const e = validate(f)
    if (Object.keys(e).length) return fail(e)
    window.open(`${PROFILE.whatsappLink}?text=${encodeURIComponent(text())}`, '_blank', 'noopener')
  }
  const links = [
    { Ic: GmailIcon, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { Ic: GithubIcon, label: 'GitHub', value: PROFILE.githubLabel, href: PROFILE.github },
    { Ic: LinkedInIcon, label: 'LinkedIn', value: PROFILE.linkedinLabel, href: PROFILE.linkedin },
    { Ic: WhatsAppIcon, label: 'WhatsApp', value: PROFILE.whatsapp, href: PROFILE.whatsappLink },
    { Ic: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
    { Ic: FiverrIcon, label: 'Fiverr', value: 'fiverr.com/afidevelopers', href: PROFILE.fiverr },
  ]
  const errList = Object.entries(errs).filter(([, v]) => v)
  return (
    <Section id="contact" n="07" eyebrow="Contact" title="Let's build something intelligent together." wide>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-lg text-zinc-400">Available for AI automation, web development and modern portfolio projects. Email is the fastest way to reach me.</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {links.map(({ Ic, label, value, href }) => (
              <li key={label}>
                <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="group flex min-h-14 items-center gap-4 py-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-ink"><Ic size={18} aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1"><span className="block text-xs text-zinc-500">{label}</span><span className="block truncate text-white">{value}</span></span>
                  <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 text-zinc-600 transition group-hover:text-white" />
                  {href.startsWith('http') && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="card space-y-5 p-6 sm:p-8" aria-labelledby="cf-title">
          <h3 id="cf-title" className="font-display text-2xl text-white">Tell me about your project</h3>
          {errList.length > 0 && (
            <div ref={summary} tabIndex={-1} role="alert" aria-labelledby="cf-err-title" className="rounded-xl border border-red-400/60 bg-red-400/5 p-4 text-sm">
              <p id="cf-err-title" className="font-medium text-white">Please fix {errList.length === 1 ? 'this' : 'these'}:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-red-200">{errList.map(([k, v]) => <li key={k}><a href={`#cf-${k}`} className="underline underline-offset-2">{v}</a></li>)}</ul>
            </div>
          )}
          <div><label htmlFor="cf-name" className="text-sm font-medium text-white">Name</label>
            <input id="cf-name" name="name" type="text" autoComplete="name" required aria-invalid={!!errs.name} aria-describedby={errs.name ? 'cf-name-e' : undefined} value={f.name} onChange={set('name')} onBlur={blur('name')} className={fieldCls(errs.name)} />
            {errs.name && <p id="cf-name-e" className="mt-1.5 text-sm text-red-300">{errs.name}</p>}</div>
          <div><label htmlFor="cf-email" className="text-sm font-medium text-white">Email</label>
            <input id="cf-email" name="email" type="email" autoComplete="email" required aria-invalid={!!errs.email} aria-describedby={errs.email ? 'cf-email-e' : undefined} value={f.email} onChange={set('email')} onBlur={blur('email')} className={fieldCls(errs.email)} />
            {errs.email && <p id="cf-email-e" className="mt-1.5 text-sm text-red-300">{errs.email}</p>}</div>
          <div><label htmlFor="cf-type" className="text-sm font-medium text-white">Project type</label>
            <select id="cf-type" name="type" value={f.type} onChange={set('type')} className={fieldCls(false)}>{PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
          <div><label htmlFor="cf-message" className="text-sm font-medium text-white">Message</label>
            <textarea id="cf-message" name="message" rows={5} required aria-invalid={!!errs.message} aria-describedby={errs.message ? 'cf-message-e' : 'cf-message-h'} value={f.message} onChange={set('message')} onBlur={blur('message')} placeholder="What do you need, and by when?" className={fieldCls(errs.message)} />
            {errs.message ? <p id="cf-message-e" className="mt-1.5 text-sm text-red-300">{errs.message}</p> : <p id="cf-message-h" className="mt-1.5 text-xs text-zinc-500">A few sentences on scope and timeline is plenty.</p>}</div>
          <div aria-hidden="true" className="absolute -left-[9999px]"><label>Leave this empty<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={f._gotcha} onChange={set('_gotcha')} /></label></div>
          <div className="flex flex-wrap gap-3">
            <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:opacity-60"><Send size={16} aria-hidden="true" />{status === 'sending' ? 'Sending…' : ENDPOINT ? 'Send message' : 'Send by email'}</button>
            <button type="button" onClick={whatsapp} className="btn btn-ghost">Send on WhatsApp</button>
          </div>
          <p role="status" aria-live="polite" className={`text-sm ${status === 'sent' ? 'text-emerald-300' : status === 'error' ? 'text-red-300' : 'text-zinc-500'}`}>
            {status === 'sent' && 'Thanks, your message was sent. I will reply by email.'}
            {status === 'error' && `Something went wrong sending that. Please email ${PROFILE.email} directly.`}
            {status === 'mailto' && 'Your email app should open with the message filled in. If it does not, email me directly.'}
            {status === 'idle' && (ENDPOINT ? 'Your message goes straight to my inbox.' : 'The buttons open your email app or WhatsApp with your message filled in, so nothing is stored on this website.')}
          </p>
        </form>
      </div>
    </Section>
  )
}

/* ---------- footer ---------- */
function Footer() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <>
      <footer className="border-t border-line text-sm text-zinc-500">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold text-white">{PROFILE.name}</p>
            <p className="mt-1 text-zinc-400">{PROFILE.title} · {PROFILE.location}</p>
            <p className="mt-3 leading-relaxed">AI automation and web development for businesses worldwide, including Sharjah, Dubai and the UAE.</p>
            <ul className="mt-4 flex gap-4"><li><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li><li><a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li><li><a href={PROFILE.fiverr} target="_blank" rel="noopener noreferrer" className="hover:text-white">Fiverr</a></li></ul>
          </div>
          <nav aria-label="AI and development services">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">AI &amp; Development</h2>
            <ul className="mt-4 space-y-2">{SITE.globalPages.map((s) => <li key={s.slug}><a href={`/${s.slug}`} className="hover:text-white">{s.label}</a></li>)}</ul>
          </nav>
          <nav aria-label="Web design services">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Web Design · UAE</h2>
            <ul className="mt-4 space-y-2">{SITE.servicePages.map((s) => <li key={s.slug}><a href={`/${s.slug}`} className="hover:text-white">{s.label}</a></li>)}</ul>
          </nav>
          <nav aria-label="Company">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Company</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="/services" className="hover:text-white">All services</a></li>
              <li><a href="/portfolio" className="hover:text-white">Portfolio &amp; case studies</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li aria-hidden="true" className="pt-3 text-xs uppercase tracking-widest">Popular guides</li>
              {SITE.featuredGuides.map((g) => <li key={g.slug}><a href={`/blog/${g.slug}`} className="hover:text-white">{g.label}</a></li>)}
            </ul>
          </nav>
        </div>
        <p className="border-t border-line py-6 text-center">© {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location} · Built with React, Vite and Tailwind CSS</p>
      </footer>
      <AnimatePresence>
        {show && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full border border-line bg-panel text-white hover:border-accent/50">
            <ArrowUp size={18} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only z-[70] rounded-full bg-accent px-4 py-2 font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none"><Hero /><About /><Skills /><Projects /><Experience /><Services /><WhyWork /><Contact /></main>
      <Footer />
    </MotionConfig>
  )
}

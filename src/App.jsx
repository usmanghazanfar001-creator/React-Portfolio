import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useInView, useTransform, useMotionValue, animate } from 'motion/react'
import { useRef } from 'react'
import {
  ArrowUpRight, ArrowUp, Phone, MapPin, X, Menu, Check,
  Code2, BrainCircuit, Globe2, Workflow, Sparkles, LayoutTemplate, Building2,
  GraduationCap, Briefcase, Handshake, Search, Target, ShoppingBag, Calculator, Users, CloudSun, Bot, HeartPulse,
} from 'lucide-react'
import {
  PROFILE, HERO, NAV_LINKS, ABOUT, STATS, SKILL_GROUPS, SERVICES, PROJECTS,
  PROJECT_FILTERS, TIMELINE, WHY_WORK,
} from './data/content'
import profileImg from './assets/images/profile.webp'
import Orbit from './components/Orbit'
import { SITE } from '../site/config'
import { GithubIcon, WhatsAppIcon, FiverrIcon, GmailIcon, LinkedInIcon } from './components/BrandIcons'

const ICONS = { Code2, BrainCircuit, Globe2, Workflow, Sparkles, LayoutTemplate, Building2, MapPin, GraduationCap, Briefcase, Handshake, Search, Target }
const Icon = ({ name, ...p }) => { const C = ICONS[name] || Sparkles; return <C {...p} /> }

/* ---------- helpers ---------- */
const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}
const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
)
const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 sm:py-28">
    <Reveal>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-2">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
    </Reveal>
    <div className="mt-12">{children}</div>
  </section>
)
const Words = ({ text, delay = 0 }) => (
  <span aria-hidden="true">
    {text.split(' ').map((w, i) => (
      <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
        <motion.span className="inline-block" initial={{ y: '105%' }} animate={{ y: 0 }}
          transition={{ duration: 0.75, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
          {w}{'\u00A0'}
        </motion.span>
      </span>
    ))}
  </span>
)
function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => { if (inView) { const c = animate(0, to, { duration: 1.4, onUpdate: (v) => setN(Math.round(v)) }); return () => c.stop() } }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}

/* ---------- nav ---------- */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { scrollYProgress } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV_LINKS.forEach(({ href }) => { const el = document.querySelector(href); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: bar }} className="h-0.5 origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3" />
      <nav aria-label="Main" className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-line bg-ink/70 px-5 py-2.5 backdrop-blur-xl max-sm:mx-3">
        <a href="#home" className="font-display text-lg font-bold text-white">{PROFILE.firstName}<span className="grad-text">.</span></a>
        <ul className="hidden gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href} className={l.href === '#services' ? 'group relative' : undefined}>
              <a href={l.href} className={`rounded-full px-3 py-1.5 text-sm transition ${active === l.href.slice(1) ? 'bg-white/10 text-white' : 'hover:text-white'}`}>{l.label}</a>
              {l.href === '#services' && (
                <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-2xl border border-line bg-ink/95 p-2 backdrop-blur-xl">
                    <li aria-hidden="true" className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">AI, automation &amp; development</li>
                    {SITE.globalPages.map((s) => <li key={s.slug}><a href={`/${s.slug}`} className="block rounded-xl px-3 py-2 text-sm hover:bg-white/5 hover:text-white">{s.label}</a></li>)}
                    <li aria-hidden="true" className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Web design · Sharjah &amp; UAE</li>
                    {SITE.servicePages.map((s) => <li key={s.slug}><a href={`/${s.slug}`} className="block rounded-xl px-3 py-2 text-sm hover:bg-white/5 hover:text-white">{s.label}</a></li>)}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li><a href="/blog" className="rounded-full px-3 py-1.5 text-sm transition hover:text-white">Blog</a></li>
        </ul>
        <a href="#contact" className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink transition hover:scale-105 lg:inline-block">Let’s Talk</a>
        <button className="md:hidden" aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="mx-3 mt-2 max-h-[calc(100dvh-6.5rem)] overflow-y-auto overscroll-contain rounded-3xl border border-line bg-ink/95 p-3 backdrop-blur-xl md:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block rounded-xl px-4 py-3 hover:bg-white/5">{l.label}</a>
                {l.href === '#services' && [...SITE.globalPages, ...SITE.servicePages].map((s) => <a key={s.slug} href={`/${s.slug}`} className="block rounded-xl px-4 py-2.5 pl-8 text-sm text-zinc-400 hover:bg-white/5 hover:text-white">{s.label}</a>)}
              </li>
            ))}
            <li><a href="/blog" className="block rounded-xl px-4 py-3 hover:bg-white/5">Blog</a></li>
            <li className="p-2"><a onClick={() => setOpen(false)} href="#contact" className="block rounded-full bg-white px-4 py-3 text-center font-medium text-ink">Let’s Talk</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- hero ---------- */
function Portrait({ children }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 14 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 14 })
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5) }
  const leave = () => { x.set(0); y.set(0) }
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
      onMouseMove={move} onMouseLeave={leave} style={{ perspective: 900 }} className="relative mx-auto w-[var(--w)] [--w:11rem] sm:[--w:17rem] lg:[--w:18rem]">
      <Orbit />
      <motion.div style={{ rotateX: rx, rotateY: ry }} animate={{ y: [0, -10, 0] }} transition={{ y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }} className="relative z-10">
        {children}
      </motion.div>
    </motion.div>
  )
}
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20">
      <div className="aurora absolute inset-0" /><div className="grid-bg absolute inset-0" />
      <div className="relative mx-auto grid grid-cols-1 max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative z-10">
          {PROFILE.openToWork && (
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="chip inline-flex items-center gap-2">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative size-2 rounded-full bg-emerald-400" /></span>
              Open to work
            </motion.span>
          )}
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-2 sm:text-sm">{HERO.kicker}</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl" aria-label={`${HERO.headline} ${HERO.headlineRest}`}>
            <Words text={HERO.headline} delay={0.1} /><br />
            <span className="grad-text"><Words text={HERO.headlineRest} delay={0.35} /></span>
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">{HERO.support}</motion.p>
          <ul aria-label="Core technologies" className="mt-6 flex max-w-xl flex-wrap gap-2">{HERO.badges.map((b) => <li key={b} className="chip">{b}</li>)}</ul>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-white px-6 py-3 font-medium text-ink transition hover:scale-105">View Projects</a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 font-medium text-white transition hover:bg-white/5">Book a Chat</a>
          </motion.div>
          <p className="mt-8 flex items-center gap-2 text-sm text-zinc-500"><MapPin size={14} /> {PROFILE.location}</p>
        </div>
        <Portrait>
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent-3 opacity-60 blur-2xl" />
          <div className="relative rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent-3 p-1">
            <img src={profileImg} width="470" height="470" fetchPriority="high" decoding="async" alt={`${PROFILE.name}, ${PROFILE.title} based in Faisalabad, Pakistan`} className="aspect-square w-full rounded-full border-4 border-ink object-cover object-top" />
          </div>
        </Portrait>
      </div>
      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-3 px-5">
        {STATS.map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <div className="font-display text-3xl font-bold text-white sm:text-5xl"><Counter to={s.value} suffix={s.suffix} /></div>
            <div className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
      <Marquee />
    </section>
  )
}

function Marquee() {
  const items = SKILL_GROUPS.flatMap((g) => g.items)
  return (
    <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]" aria-hidden="true">
      <div className="marquee flex w-max gap-3">
        {[...items, ...items].map((t, i) => <span key={i} className="chip whitespace-nowrap">{t}</span>)}
      </div>
    </div>
  )
}

/* ---------- about + skills ---------- */
const About = () => (
  <Section id="about" eyebrow="About" title="Technology meets growth.">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
      <Reveal className="space-y-5">
        <div className="card flex items-center gap-4 p-5">
          <img src={profileImg} width="470" height="470" loading="lazy" decoding="async" alt={`${PROFILE.name}, ${PROFILE.title}`} className="size-20 shrink-0 rounded-full border-2 border-ink object-cover object-top ring-2 ring-accent/60" />
          <div className="min-w-0"><p className="font-display text-xl text-white">{PROFILE.name}</p><p className="text-sm text-zinc-400">{PROFILE.title}</p></div>
        </div>
        <p className="text-lg leading-relaxed text-zinc-300">{PROFILE.tagline}</p>
        <div className="card p-6">
          <h3 className="mb-4 font-display text-lg text-white">At a glance</h3>
          <ul className="space-y-3">{ABOUT.highlights.map((h) => <li key={h.text} className="flex items-start gap-3 text-zinc-300"><Icon name={h.icon} size={18} className="mt-0.5 shrink-0 text-accent-2" />{h.text}</li>)}</ul>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="space-y-8">
        <div className="space-y-5 text-lg leading-relaxed text-zinc-400">{ABOUT.intro.map((p) => <p key={p}>{p}</p>)}</div>
        <div>
          <h3 className="mb-3 font-display text-lg text-white">Interests</h3>
          <div className="flex flex-wrap gap-2">{ABOUT.interests.map((i) => <span key={i} className="chip">{i}</span>)}</div>
        </div>
      </Reveal>
    </div>
  </Section>
)

const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="Tools I use to turn ideas into working products.">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {SKILL_GROUPS.map((g, i) => (
        <Reveal key={g.key} delay={i * 0.07}>
          <div onMouseMove={spotlight} className="card glow relative h-full p-6">
            <Icon name={g.icon} className="text-accent" size={26} />
            <h3 className="mt-4 font-display text-xl text-white">{g.title}</h3>
            <p className="mt-1 text-sm text-zinc-500">{g.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{g.items.map((s) => <span key={s} className="chip">{s}</span>)}</div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
)

/* ---------- services ---------- */
const Services = () => (
  <Section id="services" eyebrow="Services" title="What I can build for you.">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s, i) => (
        <Reveal key={s.key} delay={(i % 3) * 0.07}>
          <div onMouseMove={spotlight} className="card glow relative h-full p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-accent/15 text-accent"><Icon name={s.icon} size={22} /></div>
            <h3 className="mt-5 font-display text-xl text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm">{s.points.map((p) => <li key={p} className="flex items-center gap-2"><Check size={14} className="text-accent-2" />{p}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </div>
    <Reveal className="mt-10">
      <div className="card p-8 text-center sm:p-10">
        <p className="font-display text-2xl font-semibold text-white sm:text-3xl">Need help with AI automation or a website? Let’s talk.</p>
        <a href="#contact" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-medium text-ink transition hover:scale-105">Get a free consultation</a>
      </div>
    </Reveal>
    <Reveal className="mt-10">
      <p className="text-sm text-zinc-500">AI, automation and development services (worldwide)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {SITE.globalPages.map((s) => <a key={s.slug} href={`/${s.slug}`} className="chip transition hover:border-white/30 hover:text-white">{s.label}</a>)}
      </div>
      <p className="mt-6 text-sm text-zinc-500">Web services for businesses in Sharjah, Dubai and the UAE</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {SITE.servicePages.map((s) => <a key={s.slug} href={`/${s.slug}`} className="chip transition hover:border-white/30 hover:text-white">{s.label}</a>)}
      </div>
      <p className="mt-6 text-sm text-zinc-500">Popular guides</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {SITE.featuredGuides.map((g) => <a key={g.slug} href={`/blog/${g.slug}`} className="chip transition hover:border-white/30 hover:text-white">{g.label}</a>)}
      </div>
      <p className="mt-6 text-sm"><a href="/services" className="text-accent-2 underline underline-offset-4">View all services</a></p>
    </Reveal>
  </Section>
)

/* ---------- projects ---------- */
function ProjectModal({ p, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} initial={{ y: 40, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: 0.96 }}
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-panel p-7">
        <div className="flex items-start justify-between gap-4">
          <div><p className="font-mono text-xs uppercase tracking-widest text-accent-2">{p.badge}</p><h3 className="mt-2 font-display text-2xl font-bold text-white">{p.title}</h3></div>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-2 hover:bg-white/10"><X size={20} /></button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        <h4 className="mt-6 text-sm font-semibold text-white">Problem</h4><p className="mt-1 text-zinc-400">{p.problem}</p>
        <h4 className="mt-5 text-sm font-semibold text-white">Solution</h4><p className="mt-1 text-zinc-400">{p.solution}</p>
        <h4 className="mt-5 text-sm font-semibold text-white">Key features</h4>
        <ul className="mt-2 space-y-1.5">{p.features.map((f) => <li key={f} className="flex items-start gap-2 text-zinc-400"><Check size={16} className="mt-0.5 shrink-0 text-accent-2" />{f}</li>)}</ul>
        {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-medium text-ink">{p.linkLabel} <ArrowUpRight size={16} /></a>}
      </motion.div>
    </motion.div>
  )
}

const PROJECT_ICONS = { 'ma-fabrics': ShoppingBag, 'real-estate': Building2, 'discrete-solver': Calculator, nexseat: Users, weatheriq: CloudSun, 'ai-ecommerce': Bot, 'shopify-automation': Workflow, 'hospital-management': HeartPulse }
const PREVIEW_BG = ['from-accent/30 via-accent-2/10', 'from-accent-2/25 via-accent-3/10', 'from-accent-3/30 via-accent/10']
// Decorative themed placeholder (no fake screenshots). Swap for real screenshots when available.
function ProjectPreview({ p, large, index }) {
  const Ic = PROJECT_ICONS[p.key] || Sparkles
  return (
    <div aria-hidden="true" className={`preview ${large ? 'h-44' : 'h-28'} rounded-2xl border border-line bg-gradient-to-br ${PREVIEW_BG[index % 3]} to-transparent`}>
      <Ic className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80" size={large ? 44 : 32} />
    </div>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const [sel, setSel] = useState(null)
  const ordered = [...PROJECTS].sort((a, b) => (a.featured || 99) - (b.featured || 99))
  const list = ordered.filter((p) => filter === 'All' || p.filters.includes(filter))
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work.">
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {PROJECT_FILTERS.map((f) => (
          <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-1.5 text-sm transition ${filter === f ? 'border-white bg-white text-ink' : 'border-line hover:border-white/30'}`}>{f}</button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article layout key={p.key} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              onMouseMove={spotlight} className="card glow relative flex flex-col p-5">
              <ProjectPreview p={p} large={!!p.featured} index={i} />
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-2">{p.kind}</span>
                {p.featured && <span className="chip">Featured</span>}
              </div>
              <h3 className={`mt-3 font-display font-semibold text-white ${p.featured ? 'text-2xl' : 'text-xl'}`}>{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                <button onClick={() => setSel(p)} className="rounded-full border border-line px-4 py-2 text-sm text-white transition hover:bg-white/5">Details<span className="sr-only"> of {p.title}</span></button>
                {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition hover:scale-105">{p.linkLabel}<span className="sr-only"> for {p.title} (opens in a new tab)</span><ArrowUpRight size={15} /></a>}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>{sel && <ProjectModal p={sel} onClose={() => setSel(null)} />}</AnimatePresence>
      <p className="mt-8 text-sm text-zinc-500"><a href="/portfolio" className="text-accent-2 underline underline-offset-4">Read the full case studies</a></p>
    </Section>
  )
}

/* ---------- experience & education ---------- */
const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const draw = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })
  return (
  <Section id="experience" eyebrow="Experience & Education" title="My journey.">
    <div ref={ref} className="relative space-y-6 border-l border-line pl-8">
      <motion.span style={{ scaleY: draw }} className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3" />
      {TIMELINE.map((t) => (
        <Reveal key={t.key}>
          <div className="card relative p-6">
            <span className="absolute -left-[2.85rem] top-7 grid size-8 place-items-center rounded-full border border-line bg-ink text-accent">
              {t.type === 'education' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-2">{t.date}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-white">{t.title}</h3>
            <p className="text-sm text-zinc-500">{t.place}</p>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">{t.bullets.map((b) => <li key={b} className="flex items-start gap-2"><Check size={14} className="mt-1 shrink-0 text-accent" />{b}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
  )
}

/* ---------- why work with me ---------- */
const WhyWork = () => (
  <Section id="why" eyebrow="Why work with me" title="What you get when we work together.">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {WHY_WORK.map((w, i) => (
        <Reveal key={w.title} delay={(i % 3) * 0.07} className={i < 3 ? 'lg:col-span-2' : i === 4 ? 'sm:col-span-2 lg:col-span-3' : 'lg:col-span-3'}>
          <div onMouseMove={spotlight} className="card glow relative h-full p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-accent/15 text-accent"><Icon name={w.icon} size={22} /></div>
            <h3 className="mt-5 font-display text-xl text-white">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{w.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
)

/* ---------- contact + footer ---------- */
const PROJECT_TYPES = [...SERVICES.map((s) => s.title), 'Something else']
const field = 'mt-2 w-full rounded-2xl border border-line bg-panel/70 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'
const Contact = () => {
  const links = [
    { Ic: GmailIcon, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, color: '#EA4335' },
    { Ic: WhatsAppIcon, label: 'WhatsApp', value: PROFILE.whatsapp, href: PROFILE.whatsappLink, color: '#25D366' },
    { Ic: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}`, color: 'var(--color-accent)' },
    { Ic: LinkedInIcon, label: 'LinkedIn', value: PROFILE.linkedinLabel, href: PROFILE.linkedin, color: '#0A66C2' },
    { Ic: GithubIcon, label: 'GitHub', value: PROFILE.githubLabel, href: PROFILE.github, color: '#ffffff' },
    { Ic: FiverrIcon, label: 'Fiverr', value: 'fiverr.com/afidevelopers', href: PROFILE.fiverr, color: '#1DBF73' },
  ]
  const formRef = useRef(null)
  const [f, setF] = useState({ name: '', email: '', type: PROJECT_TYPES[0], message: '' })
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }))
  // No backend: the message is composed in the visitor's own email app or WhatsApp, so nothing is stored on this site.
  const text = () => [`Name: ${f.name}`, `Email: ${f.email}`, `Project type: ${f.type}`, '', 'Message:', f.message].join('\n')
  const email = (e) => { e.preventDefault(); window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Project enquiry: ' + f.type)}&body=${encodeURIComponent(text())}` }
  const whatsapp = () => { if (formRef.current?.reportValidity()) window.open(`${PROFILE.whatsappLink}?text=${encodeURIComponent(text())}`, '_blank', 'noopener') }
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something intelligent together.">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-lg leading-relaxed text-zinc-400">Available for AI automation, web development, and modern portfolio projects.</p>
          <div className="mt-6 grid grid-cols-1 gap-3">
            {links.map(({ Ic, label, value, href, color }, i) => (
              <Reveal key={label} delay={(i % 3) * 0.06}>
                <motion.a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" onMouseMove={spotlight}
                  whileHover="hover" whileTap={{ scale: 0.98 }} style={{ '--brand': color }}
                  className="card glow brand-card group relative flex items-center gap-4 p-4">
                  <motion.span variants={{ hover: { scale: 1.12, rotate: -6 } }} transition={{ type: 'spring', stiffness: 350, damping: 14 }}
                    className="brand-icon grid size-11 shrink-0 place-items-center rounded-2xl">
                    <Ic size={20} />
                  </motion.span>
                  <span className="min-w-0 flex-1"><span className="block text-xs text-zinc-500">{label}</span><span className="block truncate text-white">{value}</span></span>
                  <ArrowUpRight size={18} className="shrink-0 text-zinc-600 transition group-hover:text-white" />
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.1}>
          <form ref={formRef} onSubmit={email} className="card space-y-5 p-6 sm:p-8">
            <h3 className="font-display text-2xl text-white">Tell me about your project</h3>
            <div><label htmlFor="cf-name" className="text-sm font-medium text-white">Name</label><input id="cf-name" name="name" type="text" autoComplete="name" required value={f.name} onChange={set('name')} className={field} /></div>
            <div><label htmlFor="cf-email" className="text-sm font-medium text-white">Email</label><input id="cf-email" name="email" type="email" autoComplete="email" required value={f.email} onChange={set('email')} className={field} /></div>
            <div><label htmlFor="cf-type" className="text-sm font-medium text-white">Project type</label>
              <select id="cf-type" name="type" value={f.type} onChange={set('type')} className={field}>{PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
            <div><label htmlFor="cf-message" className="text-sm font-medium text-white">Message</label><textarea id="cf-message" name="message" rows={5} required value={f.message} onChange={set('message')} placeholder="What do you need, and by when?" className={field} /></div>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-white px-6 py-3 font-medium text-ink transition hover:scale-105">Send by email</button>
              <button type="button" onClick={whatsapp} className="rounded-full border border-line px-6 py-3 font-medium text-white transition hover:bg-white/5">Send on WhatsApp</button>
            </div>
            <p className="text-sm text-zinc-500">The buttons open your email app or WhatsApp with your message filled in, so nothing is stored on this website.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

function Footer() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <>
      <footer className="border-t border-line text-sm text-zinc-500">
        <div className="mx-auto grid grid-cols-1 max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold text-white">{PROFILE.name}</p>
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
          <motion.button initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }} aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full border border-line bg-panel text-white hover:bg-white/10">
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main><Hero /><About /><Skills /><Services /><Projects /><Experience /><WhyWork /><Contact /></main>
      <Footer />
    </>
  )
}

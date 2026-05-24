import { useEffect, useState } from 'react'
import { Collapsible } from '@base-ui/react/collapsible'
import { Tabs } from '@base-ui/react/tabs'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
  Link,
  Mail,
  Menu,
  MapPin,
  Moon,
  Sun,
  X,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import logoImg from './assets/logo.png'
import { MovingLensLineArtHero } from './components/ui/MovingLensLineArtHero';

const projects = [
  {
    title: 'Client Portal',
    type: 'SaaS dashboard',
    result: 'Cut onboarding time by 38% with a clearer account setup flow.',
    stack: ['React', 'Vite', 'Base UI'],
  },
  {
    title: 'Studio Booking',
    type: 'Commerce workflow',
    result: 'Designed a fast booking path for sessions, deposits, and reminders.',
    stack: ['TypeScript', 'Tailwind', 'shadcn'],
  },
  {
    title: 'Analytics Notes',
    type: 'Internal tool',
    result: 'Turned scattered research into searchable project decisions.',
    stack: ['React', 'Forms', 'Charts'],
  },
]

const skills = {
  frontend: ['React architecture', 'Accessible UI systems', 'Responsive interfaces'],
  product: ['User flows', 'Rapid prototyping', 'Design handoff'],
  systems: ['API integration', 'State modeling', 'Performance tuning'],
}

const navLinks = [
  ['Work', '#work'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <main className="relative min-h-svh overflow-hidden">
      <div className="animated-gradient-bg" aria-hidden="true" />
      <Collapsible.Root
        className="glass-panel sticky top-4 z-30 mx-auto w-[calc(100%-2.5rem)] max-w-6xl px-4 py-3 sm:px-5"
        onOpenChange={setIsMenuOpen}
        open={isMenuOpen}
        render={<header />}
      >
        <div className="flex items-center justify-between gap-4">
          <a className="flex items-center gap-2 text-sm font-semibold" href="#top">
            <span className="grid size-9 place-items-center rounded-lg bg-[#222222] p-1 shadow-sm">
              <img src={logoImg} alt="" className="size-full object-contain" />
            </span>
            DEVAF
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navLinks.map(([label, href]) => (
              <a
                className="transition hover:text-foreground"
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setIsDark((current) => !current)}
              size="icon"
              variant="outline"
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>
            <Collapsible.Trigger
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background/70 text-foreground transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:hidden [&_svg]:size-4"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Collapsible.Trigger>
          </div>
        </div>

        <Collapsible.Panel className="mobile-menu md:hidden">
          <nav className="mt-3 grid gap-1 border-t border-border pt-3 text-sm">
            {navLinks.map(([label, href]) => (
              <a
                className="rounded-md px-3 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                href={href}
                key={href}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </Collapsible.Panel>
      </Collapsible.Root>

      <section
        id="top"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-24 lg:pt-16"
      >
        <div className='max-w-500'>
          <div className="glass-pill mb-6 inline-flex items-center gap-2 px-3 py-1 text-sm text-muted-foreground">
              Hi, I'm Alfred Francis
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
            I build clean, fast interfaces that make products feel easier to
            use.
          </h1>
          <p className="mt-4 flex min-h-9 items-center text-2xl font-semibold text-primary sm:text-3xl">
            <span className="typing-text">Frontend experiences.</span>
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            This is a portfolio starter built with Vite, React, shadcn, and
            Base UI. Swap in your own projects, links, and bio as your work
            grows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="#work" />} size="lg">
              View work
              <ArrowUpRight />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="mailto:hello@example.com" />}
              size="lg"
              variant="outline"
            >
              <Mail />
              Email me
            </Button>
          </div>
          <dl className="glass-panel mt-10 grid max-w-xl grid-cols-3 gap-4 p-4">
            {[
              ['12+', 'projects'],
              ['5 yrs', 'experience'],
              ['3', 'core stacks'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold">{value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="glass-panel floating-card relative w-80">
          
          <MovingLensLineArtHero
            lineImage="/images/moving-line-art-amber.png"
            maskImage="/images/moving-line-art-mask.png"
          />
          {/* <div className="glass-panel absolute inset-x-6 bottom-6 p-5 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                <BriefcaseBusiness className="size-5" />
              </div>
              <div>
                <p className="font-semibold">Available for selected work</p>
                <p className="text-sm text-muted-foreground">
                  Product UI, design systems, and frontend builds
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <span className="rounded-md bg-muted px-3 py-2">Vite</span>
              <span className="rounded-md bg-muted px-3 py-2">shadcn</span>
              <span className="rounded-md bg-muted px-3 py-2">Base UI</span>
              <span className="rounded-md bg-muted px-3 py-2">TypeScript</span>
            </div>
          </div> */}
        
        </div>

      </section>
      <section
        id="work"
        className="relative z-10 border-y border-border/70 bg-card/50 px-5 py-16 backdrop-blur sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium uppercase text-muted-foreground">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Projects with measurable outcomes
              </h2>
            </div>
            <Button
              nativeButton={false}
              render={
                <a href="https://github.com/" target="_blank" rel="noreferrer" />
              }
              variant="outline"
            >
              <GitBranch />
              GitHub
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="glass-panel floating-card p-5 shadow-sm"
                key={project.title}
              >
                <p className="text-sm text-muted-foreground">{project.type}</p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {project.result}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase text-muted-foreground">
              Skill map
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              The parts of the stack I like owning end to end
            </h2>
          </div>

          <Tabs.Root defaultValue="frontend">
            <Tabs.List className="glass-panel relative flex p-1">
              {Object.keys(skills).map((skill) => (
                <Tabs.Tab
                  className="z-10 flex-1 rounded-md px-3 py-2 text-sm font-medium capitalize text-muted-foreground outline-none transition data-[active]:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  key={skill}
                  value={skill}
                >
                  {skill}
                </Tabs.Tab>
              ))}
              <Tabs.Indicator className="absolute inset-y-1 z-0 rounded-md bg-background/85 shadow-sm transition-all" />
            </Tabs.List>

            <div className="glass-panel mt-4 p-5">
              {Object.entries(skills).map(([group, items]) => (
                <Tabs.Panel className="outline-none" key={group} value={group}>
                  <ul className="grid gap-3 sm:grid-cols-3">
                    {items.map((item) => (
                      <li
                        className="rounded-md bg-muted px-4 py-4 text-sm font-medium"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Tabs.Panel>
              ))}
            </div>
          </Tabs.Root>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 pb-16 sm:px-8 md:flex-row md:items-center"
      >
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            Based in the Philippines, working remotely
          </div>
          <h2 className="mt-3 text-3xl font-semibold">
            Have a project in mind?
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button nativeButton={false} render={<a href="mailto:hello@example.com" />}>
            <Mail />
            Start a conversation
          </Button>
          <Button
            nativeButton={false}
            render={
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" />
            }
            variant="outline"
          >
            <Link />
            LinkedIn
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App

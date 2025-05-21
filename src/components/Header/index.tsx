import { CalendarDays, ChevronDown, ChevronUp, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Shadcn components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import logo from '@/assets/images/logo.png'
import avatar from '@/assets/images/avatar.jpg'
import { cn } from '@/lib/utils'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setMenuOpen(false)
      setIsClosing(false)
    }, 300)
  }

  return (
    <header className="grid grid-cols-[auto_1fr_auto]  items-center px-5 py-4 bg-neutral-950/60">
      <div className="flex gap-x-2">
        <img className="w-9" src={logo} alt="Logo" />
        <span
          onClick={() => setMenuOpen(true)}
          className="flex sm:hidden items-center justify-center"
        >
          {menuOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>

      {/* Desktop Menu Navigation  */}
      <NavigationMenu className="justify-self-center">
        <NavigationMenuList className="hidden sm:flex">
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink>Eventos</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[440px] md:grid-cols-2 lg:w-[600px] ">
                <li>Categorias...</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Sobre mim</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-4 p-6 md:w-[440px] lg:w-[720px] lg:grid-cols-[.8fr_1fr]">
                {/* Author Bio Section */}
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-slate-50 to-slate-100 p-6 no-underline outline-none focus:shadow-md dark:from-slate-800/50 dark:to-slate-900 transition-shadow duration-200 hover:shadow-lg"
                      href="#" // Link to author page
                    >
                      {/* Author Image*/}
                      <img
                        src={avatar}
                        alt="Foto do autor"
                        className="w-20 h-20 rounded-full mb-5 object-cover border-2 border-white dark:border-slate-700 shadow-sm transition-transform duration-200 hover:scale-105"
                      />
                      {/* Author Name/Title */}
                      <div className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-200">
                        Sebastian Augusto
                      </div>
                      {/* Author Bio */}
                      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        Desenvolvedor Web Full Stack especializado em JavaScript, com ênfase na
                        criação de interfaces de usuário modernas e no desenvolvimento de aplicações
                        de página única (SPA).
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {/* Social Links Section */}

                {/* GitHub Link */}
                <ListItem
                  href="https://github.com/sebastianaugustolopes"
                  title="GitHub"
                  target="_blank"
                  className="group"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                    Acesse repositórios com projetos pessoais, protótipos e contribuições open
                    source no GitHub.
                  </span>
                </ListItem>

                {/* LinkedIn Link */}
                <ListItem
                  href="https://www.linkedin.com/in/sebastianaugusto/"
                  title="LinkedIn"
                  target="_blank"
                  className="group"
                >
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                    Perfil profissional com experiências, tecnologias utilizadas e histórico de
                    projetos.
                  </span>
                </ListItem>

                {/* Thereads Link */}
                <ListItem
                  href="https://www.threads.com/@_ssebastianaugusto"
                  title="Threads"
                  target="_blank"
                  className="group"
                >
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                    Publicações técnicas e comentários sobre tendências em desenvolvimento web e
                    JavaScript.
                  </span>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Hamburger button (mobile) */}
      {menuOpen || isClosing ? (
        <div className="fixed inset-0 z-50 bg-black/50  backdrop-blur-sm ">
          <aside
            className={`absolute left-0 top-0 h-full w-60 p-4 bg-neutral-950/60 backdrop-blur-md shadow-2xl rounded-r-xl transition-all duration-300 animate-slide-in ease-in-out ${
              isClosing ? '-translate-x-full ' : 'translate-x-0 '
            }`}
          >
            {/* Close button */}
            <div className="flex justify-end mb-3">
              <button
                onClick={() => {
                  setMenuOpen(false)
                  handleClose()
                }}
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-3 ">
              <Link
                to="/docs"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800 transition"
              >
                <CalendarDays className="w-5 h-5" />
                <span>Eventos</span>
              </Link>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Categoria 1</SelectItem>
                  <SelectItem value="dark">Gategoria 2</SelectItem>
                  <SelectItem value="system">Categoria 3</SelectItem>
                </SelectContent>
              </Select>

              <a
                href="/sobre"
                className="flex items-center gap-4 pb-3 rounded-lg absolute bottom-0 "
              >
                <img
                  src={avatar}
                  alt="Foto do autor"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold leading-tight">Sebastian Augusto</h3>
                  <p className="text-xs text-zinc-400">@_ssebastianaugusto</p>
                </div>
              </a>
            </nav>
          </aside>
        </div>
      ) : null}

      <Sheet>
        <SheetTrigger className="flex items-center gap-2 transition-colors duration-200">
          {/* Cart icon: visible until LG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-9 h-8 text-neutral-400 hover:text-white cursor-pointer lg:hidden "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 11-1 9" />
            <path d="m19 11-4-7" />
            <path d="M2 11h20" />
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
            <path d="M4.5 15.5h15" />
            <path d="m5 11 4-7" />
            <path d="m9 11 1 9" />
          </svg>

          {/* "Cart" text: visible from LG */}
          <span className="hidden lg:inline text-neutral-400 hover:text-white cursor-pointer">
            Carrinho
          </span>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)

export default Header

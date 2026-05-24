<template>
  <footer class="bg-[#020202] py-20 border-t border-white/5 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#3683A8]/50 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
      <div class="col-span-1 md:col-span-1">
        <div class="flex items-center gap-3 mb-6">
          <div class="flex flex-col items-center">
            <span class="text-white font-black text-xl tracking-widest leading-none mb-[2px]">DMW</span>
            <div class="grid grid-cols-2 w-10 h-10 gap-0">
              <div class="bg-[#3683A8]"></div>
              <div class="bg-white"></div>
              <div class="bg-white"></div>
              <div class="bg-[#3683A8]"></div>
            </div>
          </div>
        </div>
        <p class="text-slate-400 text-sm leading-relaxed mb-6 font-light">
          Acelerando a inovação com soluções de Inteligência Artificial de ponta. Construímos o futuro hoje.
        </p>
      </div>
      
      <div>
        <h4 class="text-white font-bold mb-6 tracking-widest uppercase text-xs">Empresa</h4>
        <ul class="space-y-4">
          <li><a href="#quem-somos" class="text-slate-400 hover:text-[#3683A8] transition-colors text-sm font-light">Quem Somos</a></li>
          <li><a href="#o-que-fazemos" class="text-slate-400 hover:text-[#3683A8] transition-colors text-sm font-light">Nossos Serviços</a></li>
          <li><a href="#portfolio" class="text-slate-400 hover:text-[#3683A8] transition-colors text-sm font-light">Casos de Sucesso</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-6 tracking-widest uppercase text-xs">Legal</h4>
        <ul class="space-y-4">
          <li><a href="#" class="text-slate-400 hover:text-[#3683A8] transition-colors text-sm font-light">Termos de Uso</a></li>
          <li><a href="#" class="text-slate-400 hover:text-[#3683A8] transition-colors text-sm font-light">Privacidade</a></li>
          <li><a href="#" class="text-slate-400 hover:text-[#3683A8] transition-colors text-sm font-light">Cookies</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-6 tracking-widest uppercase text-xs">Contato</h4>
        <ul class="space-y-4 text-sm text-slate-400 font-light">
          <li class="flex items-center gap-3">
            <svg class="w-5 h-5 text-[#3683A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            contato@dmwflow.com.br
          </li>
          <li class="flex items-center gap-3">
            <svg class="w-5 h-5 text-[#3683A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +55 31 991757825
          </li>
          <li class="flex items-center gap-3">
            <svg class="w-5 h-5 text-[#3683A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
            Belo Horizonte / Brasilia
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-20 text-center border-t border-white/5 pt-8">
      <p class="text-slate-600 text-xs uppercase tracking-widest">&copy; 2026 DMW. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

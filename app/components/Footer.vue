<template>
  <footer class="bg-white border-t border-slate-200 relative overflow-hidden text-slate-500">
    <!-- Abstract glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00c572]/5 blur-[120px] rounded-[100%] pointer-events-none" />
    
    <div class="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        <!-- Brand -->
        <div class="lg:col-span-1 flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gradient-to-tr from-[#00c572] to-[#00b0ff] rounded-lg flex items-center justify-center shadow-sm">
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span class="text-xl font-extrabold text-slate-900 tracking-tight" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              CAR<span class="text-[#00c572]">ANGEL</span>
            </span>
          </div>
          <p class="text-sm leading-relaxed font-medium">
            O seu assistente de manutenção veicular que trabalha 24/7 para garantir que seu veículo esteja sempre em perfeitas condições.
          </p>
          <div class="flex gap-3 mt-2">
            <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" :aria-label="s.label"
              class="w-10 h-10 bg-slate-50 border border-slate-200 hover:bg-[#00c572] rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:border-[#00c572]" v-html="s.icon">
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">Links Rápidos</h4>
          <nav class="flex flex-col gap-3">
            <a v-for="link in navLinks" :key="link" class="text-sm hover:text-[#00c572] transition-colors cursor-pointer font-medium w-fit">
              {{ link }}
            </a>
          </nav>
        </div>

        <!-- Contato -->
        <div class="flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">Contato</h4>
          <ul class="flex flex-col gap-4 text-sm font-medium">
            <li class="flex items-center gap-3">
              <span class="text-[#00c572] w-5 h-5">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </span> contato@carangelapp.com.br
            </li>
            <li class="flex items-center gap-3">
              <span class="text-[#00c572] w-5 h-5">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.069-3.769-6.665-6.665l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </span> (31) 9175-7825
            </li>
            <li class="flex items-center gap-3">
              <span class="text-[#00c572] w-5 h-5">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </span> Belo Horizonte, MG
            </li>
          </ul>
        </div>
        
        <!-- Legal & Download -->
        <div class="flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">Informações Legais</h4>
          <ul class="flex flex-col gap-3 text-sm font-medium mb-4">
            <li><a href="#" class="hover:text-slate-900 transition-colors">Termos de Uso</a></li>
            <li><a href="#" class="hover:text-slate-900 transition-colors">Política de Privacidade</a></li>
            <li><a href="#" class="hover:text-slate-900 transition-colors">LGPD</a></li>
          </ul>
          
          <div class="flex gap-3">
            <div class="bg-slate-50 border border-slate-200 p-2 rounded-lg flex items-center justify-center w-full hover:bg-slate-100 transition-colors cursor-pointer">
              <span class="text-xs font-bold text-slate-700">App Store</span>
            </div>
            <div class="bg-slate-50 border border-slate-200 p-2 rounded-lg flex items-center justify-center w-full hover:bg-slate-100 transition-colors cursor-pointer">
              <span class="text-xs font-bold text-slate-700">Google Play</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    <div class="border-t border-slate-200 relative z-10" />
    
    <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left relative z-10">
      <p class="text-xs font-medium">© {{ year }} CAR ANGEL - Todos os direitos reservados.</p>
      <p class="text-xs font-medium flex items-center justify-center gap-2">
        <span class="w-1.5 h-1.5 bg-[#00c572] rounded-full" /> Status: Todos os sistemas operacionais
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const socials = [
  { label: 'Instagram', icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>', href: '#' },
  { label: 'LinkedIn',  icon: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>', href: '#' },
]
const navLinks = ['Início', 'Benefícios', 'Funcionalidades', 'Como Funciona', 'Depoimentos']
</script>

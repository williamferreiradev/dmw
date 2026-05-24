<template>
  <header class="fixed top-0 inset-x-0 z-50 transition-all duration-300" :class="[isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-4' : 'bg-transparent py-6']">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo DMW -->
      <NuxtLink to="/dmwflow" class="flex items-center gap-3 group">
        <div class="flex flex-col items-center">
          <span class="text-white font-black text-xl tracking-widest leading-none mb-[2px] group-hover:text-[#3683A8] transition-colors">DMW</span>
          <div class="grid grid-cols-2 w-10 h-10 gap-0">
            <div class="bg-[#3683A8] transition-all group-hover:scale-95"></div>
            <div class="bg-white transition-all group-hover:scale-95"></div>
            <div class="bg-white transition-all group-hover:scale-95"></div>
            <div class="bg-[#3683A8] transition-all group-hover:scale-95"></div>
          </div>
        </div>
      </NuxtLink>

      <!-- Nav Desktop -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#quem-somos" class="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Quem Somos</a>
        <a href="#o-que-fazemos" class="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Soluções</a>
        <a href="#portfolio" class="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Casos</a>
        <a href="#testemunhos" class="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Testemunhos</a>
      </nav>

      <!-- CTA -->
      <a href="#contato" class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold text-white bg-transparent border border-[#3683A8] rounded-none hover:bg-[#3683A8]/10 shadow-[0_0_15px_rgba(54,131,168,0.2)] hover:shadow-[0_0_25px_rgba(54,131,168,0.4)] transition-all uppercase tracking-widest relative overflow-hidden group">
        <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
        <span class="relative">Iniciar Projeto</span>
      </a>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-white p-2">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
</style>

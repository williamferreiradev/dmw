<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-500', scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-4' : 'bg-transparent py-6']">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">

      <!-- Logo -->
      <a href="#inicio" class="flex items-center gap-3 group" @click.prevent="scrollTo('inicio')">
        <div class="relative w-10 h-10 bg-gradient-to-tr from-[#00c572] to-[#00b0ff] rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(0,197,114,0.3)] group-hover:shadow-[0_6px_20px_rgba(0,197,114,0.4)] transition-all duration-300">
          <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
        <div class="flex flex-col leading-none">
          <span class="text-xl font-extrabold text-slate-900 tracking-tight" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            CAR<span class="text-[#00c572]">ANGEL</span>
          </span>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">SaaS Automotivo</span>
        </div>
      </a>

      <!-- Nav desktop -->
      <nav class="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-2 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`"
          :class="['relative px-5 py-2 text-[13px] font-semibold rounded-full transition-all duration-300',
            activeSection === item.id
              ? 'text-white bg-slate-900 shadow-md'
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50']"
          @click.prevent="scrollTo(item.id)">
          {{ item.label }}
        </a>
      </nav>

      <!-- CTA -->
      <div class="hidden lg:flex items-center gap-4">
        <a href="#download"
          class="relative inline-flex items-center gap-2 bg-[#00c572] hover:bg-[#00a860] text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 text-sm overflow-hidden shadow-[0_4px_15px_rgba(0,197,114,0.3)] hover:shadow-[0_6px_20px_rgba(0,197,114,0.4)] hover:-translate-y-0.5">
          Baixe Agora
        </a>
      </div>

      <!-- Hambúrguer -->
      <button class="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-100 transition-colors" @click="mobileOpen = !mobileOpen">
        <span :class="['block w-6 h-[2px] bg-slate-800 transition-all duration-300', mobileOpen ? 'rotate-45 translate-y-2' : '']" />
        <span :class="['block w-6 h-[2px] bg-slate-800 transition-all duration-300', mobileOpen ? 'opacity-0' : '']" />
        <span :class="['block w-6 h-[2px] bg-slate-800 transition-all duration-300', mobileOpen ? '-rotate-45 -translate-y-2' : '']" />
      </button>
    </div>

    <!-- Mobile Nav -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="mobileOpen" class="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200 px-6 pb-8 pt-6 shadow-2xl absolute w-full">
        <nav class="flex flex-col gap-2 mb-8">
          <a v-for="item in navItems" :key="item.id"
            :class="['px-5 py-4 text-sm font-semibold rounded-xl transition-all duration-200 border border-transparent',
              activeSection === item.id ? 'text-white bg-slate-900 shadow-md' : 'text-slate-600 hover:bg-slate-50']"
            @click.prevent="scrollTo(item.id); mobileOpen = false">{{ item.label }}</a>
        </nav>
        <a href="#download"
          class="flex items-center justify-center gap-2 bg-[#00c572] text-white font-bold py-4 rounded-xl shadow-[0_4px_15px_rgba(0,197,114,0.3)]">
          Baixe Agora
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'inicio',          label: 'Início' },
  { id: 'beneficios',      label: 'Benefícios' },
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'como-funciona',   label: 'Como Funciona' },
  { id: 'depoimentos',     label: 'Depoimentos' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('inicio')

function onScroll() {
  scrolled.value = window.scrollY > 20
  for (const item of [...navItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && window.scrollY >= el.offsetTop - 120) { activeSection.value = item.id; break }
  }
}
function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
.animate-shimmer {
  animation: shimmer 1.5s infinite;
}
</style>

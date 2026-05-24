<template>
  <div class="min-h-screen bg-[#030303] text-slate-300 font-sans selection:bg-[#3683A8]/30">
    <Head>
      <Title>DMW — Agência de Inteligência Artificial</Title>
      <Meta name="description" content="Impulsionando o Futuro com Inteligência Artificial. Soluções premium e automatizações." />
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <Link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </Head>

    <DmwflowHeader />

    <main class="overflow-hidden">
      <!-- HERO -->
      <section id="inicio" class="relative pt-40 pb-24 lg:pt-56 lg:pb-40 flex items-center min-h-screen">
        <!-- Abstract Glows -->
        <div class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#3683A8]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        
        <!-- Grid pattern -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] z-0 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div class="flex flex-col items-center text-center max-w-5xl mx-auto animate-fade-up">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-bold tracking-widest text-white mb-8 uppercase">
              <span class="w-1.5 h-1.5 bg-[#3683A8] animate-pulse" />
              Bem-vindo ao Futuro da Automação
            </div>
            
            <h1 style="font-family: 'Plus Jakarta Sans', sans-serif;" class="text-5xl md:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              A Nova Era da <br class="hidden md:block"/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#3683A8] via-[#5ab2de] to-indigo-400">Inteligência Artificial</span>
            </h1>
            
            <p class="text-lg md:text-2xl text-slate-400 font-light mb-12 max-w-3xl leading-relaxed" style="font-family: 'Inter', sans-serif;">
              Transformamos empresas através de arquiteturas neurais, automação cognitiva e agentes de IA desenvolvidos sob medida para dominar o seu mercado.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center gap-6">
              <a href="#contato" class="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-black font-bold px-10 py-4 hover:bg-slate-200 transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                Iniciar Transformação
                <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="#o-que-fazemos" class="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent border border-white/20 text-white font-bold px-10 py-4 hover:bg-white/5 transition-all duration-300 uppercase tracking-widest text-sm">
                Conheça a DMW
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- QUEM SOMOS -->
      <section id="quem-somos" class="py-32 relative border-t border-white/5 bg-[#050505]">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-[#3683A8] to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative bg-black border border-white/10 aspect-square flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-[url('/bg-ia.png')] bg-cover bg-center opacity-40 mix-blend-luminosity hover:opacity-60 transition-opacity duration-700"></div>
                <div class="relative z-10 flex flex-col items-center">
                  <span class="text-white font-black text-6xl tracking-widest leading-none mb-[4px]">DMW</span>
                  <div class="grid grid-cols-2 w-20 h-20 gap-0">
                    <div class="bg-[#3683A8]"></div>
                    <div class="bg-white"></div>
                    <div class="bg-white"></div>
                    <div class="bg-[#3683A8]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 style="font-family: 'Plus Jakarta Sans', sans-serif;" class="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Arquitetura de <span class="text-[#3683A8]">Soluções</span>.
              </h2>
              <p class="text-slate-400 text-lg leading-relaxed mb-6 font-light">
                A DMW não é uma agência convencional. Nós nascemos na intersecção entre a ciência de dados avançada e a estratégia de negócios agressiva. Nosso propósito é instalar um "cérebro digital" nas operações dos nossos clientes.
              </p>
              <p class="text-slate-400 text-lg leading-relaxed mb-10 font-light">
                Combinamos Large Language Models (LLMs), automação robótica de processos e visão computacional para criar ecossistemas empresariais que funcionam de forma autônoma, inteligente e implacável.
              </p>
              
              <div class="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p class="text-4xl font-black text-white mb-2 font-['Plus_Jakarta_Sans']">+200<span class="text-[#3683A8]">%</span></p>
                  <p class="text-xs text-slate-500 uppercase tracking-widest font-bold">Aumento de Eficiência</p>
                </div>
                <div>
                  <p class="text-4xl font-black text-white mb-2 font-['Plus_Jakarta_Sans']">24<span class="text-[#3683A8]">/</span>7</p>
                  <p class="text-xs text-slate-500 uppercase tracking-widest font-bold">Operação Autônoma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- O QUE FAZEMOS -->
      <section id="o-que-fazemos" class="py-32 bg-[#020202] relative">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 style="font-family: 'Plus Jakarta Sans', sans-serif;" class="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Arquitetura de <span class="text-[#3683A8]">Soluções</span>
            </h2>
            <p class="text-slate-400 text-lg font-light">
              Implementamos inteligência de ponta a ponta na sua empresa.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(servico, idx) in servicos" :key="idx" class="group relative p-10 bg-white/[0.02] border border-white/5 hover:border-[#3683A8]/50 transition-colors duration-500 overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-[#3683A8]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div class="text-[#3683A8] w-12 h-12 mb-8" v-html="servico.icon"></div>
              <h3 class="text-2xl font-bold text-white mb-4 tracking-wide font-['Plus_Jakarta_Sans']">{{ servico.title }}</h3>
              <p class="text-slate-400 leading-relaxed font-light">{{ servico.desc }}</p>
              
              <div class="mt-8 flex items-center text-xs font-bold text-white uppercase tracking-widest group-hover:text-[#3683A8] transition-colors cursor-pointer">
                Descobrir <span class="ml-2 transition-transform group-hover:translate-x-2">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PORTFOLIO -->
      <section id="portfolio" class="py-32 relative bg-[#050505] border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
          <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div class="max-w-2xl">
              <h2 style="font-family: 'Plus Jakarta Sans', sans-serif;" class="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Casos de <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#3683A8] to-indigo-400">Sucesso</span>
              </h2>
              <p class="text-slate-400 text-lg font-light">
                Resultados reais gerados por nossas arquiteturas de IA em operações de alto volume.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(caseItem, idx) in cases" :key="idx" class="group block relative overflow-hidden bg-black border border-white/10 aspect-[4/5]">
              <img :src="caseItem.img" class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              
              <div class="absolute inset-0 p-8 flex flex-col justify-end">
                <span class="text-[#3683A8] font-bold text-xs tracking-widest uppercase mb-3">{{ caseItem.tag }}</span>
                <h3 class="text-2xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">{{ caseItem.title }}</h3>
                <p class="text-slate-300 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {{ caseItem.desc }}
                </p>
                <div class="w-full h-[1px] bg-white/20 relative overflow-hidden">
                  <div class="absolute inset-y-0 left-0 w-0 bg-[#3683A8] group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTEMUNHOS -->
      <section id="testemunhos" class="py-32 bg-[#020202]">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 style="font-family: 'Plus Jakarta Sans', sans-serif;" class="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Depoimentos de <span class="text-[#3683A8]">Sucesso</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(dep, idx) in depoimentos" :key="idx" class="bg-white/5 border border-white/10 p-10 relative">
              <svg class="absolute top-8 right-8 w-12 h-12 text-white/5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p class="text-lg text-slate-300 font-light leading-relaxed mb-8 relative z-10 italic">
                "{{ dep.texto }}"
              </p>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#3683A8]/20 border border-[#3683A8] flex items-center justify-center text-white font-bold text-lg">
                  {{ dep.nome.charAt(0) }}
                </div>
                <div>
                  <p class="text-white font-bold tracking-wide">{{ dep.nome }}</p>
                  <p class="text-slate-500 text-xs uppercase tracking-widest font-bold mt-1">{{ dep.cargo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTATO CTA -->
      <section id="contato" class="py-32 relative overflow-hidden bg-black border-t border-white/10">
        <div class="absolute inset-0 bg-[#3683A8]/5 mix-blend-screen" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3683A8]/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div class="max-w-4xl mx-auto px-6 relative z-10">
          <div class="bg-white/5 border border-white/10 backdrop-blur-xl p-10 md:p-16">
            <h2 style="font-family: 'Plus Jakarta Sans', sans-serif;" class="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight text-center">
              Pronto para a <span class="text-[#3683A8]">Evolução</span>?
            </h2>
            <p class="text-slate-400 text-center mb-10 max-w-2xl mx-auto font-light">
              Deixe seus concorrentes no passado. Fale com nossos arquitetos de IA e descubra o potencial oculto da sua operação.
            </p>
            
            <form @submit.prevent="enviarContato" class="space-y-6 max-w-2xl mx-auto">
              <div v-if="enviadoComSucesso" class="bg-[#3683A8]/10 border border-[#3683A8] text-[#3683A8] px-4 py-4 rounded-none font-bold text-center tracking-widest text-sm uppercase">
                E-MAIL ENVIADO COM SUCESSO
              </div>
              <div v-if="erro" class="bg-red-500/10 border border-red-500 text-red-500 px-4 py-4 rounded-none font-bold text-center tracking-widest text-sm">
                {{ erro }}
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Nome</label>
                  <input v-model="formDados.nome" type="text" required class="w-full bg-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#3683A8] transition-colors" placeholder="Seu nome ou empresa" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">E-mail Corporativo</label>
                  <input v-model="formDados.email" type="email" required class="w-full bg-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#3683A8] transition-colors" placeholder="email@suaempresa.com" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Seu Desafio</label>
                <textarea v-model="formDados.desafio" required rows="4" class="w-full bg-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#3683A8] transition-colors resize-none" placeholder="Conte-nos onde você precisa de mais inteligência e eficiência..."></textarea>
              </div>
              <button type="submit" :disabled="enviando" class="w-full bg-white text-black font-bold px-8 py-4 hover:bg-slate-200 transition-all duration-300 uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                {{ enviando ? 'Enviando...' : 'Solicitar Reunião' }}
              </button>
            </form>
          </div>
        </div>
      </section>

      <DmwflowFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formDados = ref({
  nome: '',
  email: '',
  desafio: ''
})

const enviando = ref(false)
const enviadoComSucesso = ref(false)
const erro = ref('')

const enviarContato = async () => {
  enviando.value = true
  erro.value = ''
  enviadoComSucesso.value = false

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formDados.value
    })
    
    enviadoComSucesso.value = true
    formDados.value = { nome: '', email: '', desafio: '' }
  } catch (e: any) {
    erro.value = 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde ou configure as variáveis SMTP no .env.'
  } finally {
    enviando.value = false
  }
}

const servicos = [
  { icon: '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/></svg>', title: 'Agentes Autônomos (LLMs)', desc: 'Treinamos e integramos Large Language Models customizados com o contexto da sua empresa para atuar em suporte, vendas e backoffice sem intervenção humana.' },
  { icon: '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z"/></svg>', title: 'Workflows Inteligentes', desc: 'Mapeamos gargalos operacionais e criamos fluxos de automação hiper-eficientes ligando seus CRMs, ERPs e APIs com motores de decisão inteligentes.' },
  { icon: '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/></svg>', title: 'Análise Preditiva', desc: 'Modelos de machine learning que leem seus dados brutos e preveem tendências de vendas, churn de clientes e falhas de estoque com extrema precisão.' },
  { icon: '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>', title: 'Visão Computacional', desc: 'Reconhecimento de imagens e vídeos para controle de qualidade, segurança e leitura de documentos massivos em frações de segundo.' }
]

const cases = [
  { tag: 'Mercado Imobiliário', title: 'Agendamento para Imobiliária', desc: 'Assistente virtual capaz de interagir com interessados, qualificar o lead e realizar agendamentos de visitas aos imóveis de forma 100% autônoma e humanizada.', img: '/portfolio-1.png' },
  { tag: 'Setor Automotivo', title: 'Qualificação para Autocenter', desc: 'Agente inteligente treinado para compreender o problema do veículo do cliente, qualificar a necessidade e encaminhar para a equipe técnica correta em segundos.', img: '/portfolio-2.png' },
  { tag: 'Automação Corporativa', title: 'Agendamento Integrado ao CRM', desc: 'Solução completa conectada ao seu CRM: a IA dialoga, qualifica o lead, cria oportunidades no funil de vendas e marca a reunião automaticamente na sua agenda.', img: '/portfolio-3.png' }
]

const depoimentos = [
  { nome: 'Ricardo V.', cargo: 'CEO, TechSolutions', texto: 'A DMW não apenas instalou uma IA, eles reestruturaram a forma como pensamos nosso negócio. Hoje faturamos o dobro com a mesma equipe, pois o trabalho repetitivo foi 100% automatizado.' },
  { nome: 'Ana C.', cargo: 'Diretora de Operações', texto: 'O nível de sofisticação dos agentes criados pela DMW é absurdo. Nossos clientes não percebem que estão falando com uma máquina, e a velocidade de resolução dos tickets caiu de 12h para 3 minutos.' }
]
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

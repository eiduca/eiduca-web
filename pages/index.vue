<template>
  <Tabs default-value="home" class="w-full">
    <nav class="flex justify-between p-2 bg-blue-600 dark:bg-slate-900 text-white">
      <div class="font-extrabold text-2xl">Eiduca</div>
      <TabsList class="rounded-full">
        <TabsTrigger value="home">
          Página inicial
        </TabsTrigger>
        <TabsTrigger value="price">
          Preço
        </TabsTrigger>
        <TabsTrigger value="tutorial">
          Tutorial
        </TabsTrigger>
      </TabsList>
      <div class="flex gap-2 items-center">
        <ThemeDropdown />
      </div>
    </nav>
    <TabsContent value="home">
      <header class="md:px-32 bg-blue-600 dark:bg-slate-900 rounded-bl-[7rem] rounded-br-[7rem]">
        <div class="flex w-full">
          <div class="flex flex-col gap-6 justify-center ip-2 md:px-3 text-white">
            <div class="text-4xl font-extrabold">
              <span class="underline">Bem</span> vindo!
            </div>
            <div class="text-xl">
              A plataforma para gestão de instituições de <span class="font-extrabold">ensino</span> </div>
            <div class="text-lg">
              Transforme a gestão da sua instituição de ensino com eficiência e simplicidade. Administre escolas,
              universidades e centros de formação em um só lugar!
              <span class="font-bold">aqui.</span>
            </div>
            <div>
              <NuxtLink to="/login">
                <Button class="rounded-full text-lg p-3 w-32 bg-white hover:text-black hover:bg-white text-black">Login</Button>
              </NuxtLink>
              <NuxtLink to="/auth/admin">
                <Button class="rounded-full text-lg ml-2 p-3 w-32 bg-white hover:text-black hover:bg-white text-black">Admin</Button>
              </NuxtLink>
            </div>
          </div>
          <div class="shrink">
            <img src="/gif/652987071795Analyzing_Infographics.gif" alt="" />
          </div>
        </div>
      </header>
      <section class="md:px-32 flex flex-col md:flex-row md:pt-16">
        <div class="flex flex-col gap-3 md:justify-center">
          <div class="text-4xl font-extrabold py-5 text-blue-600">Serviços</div>
          <div>
            Esta plafaforma tem como objectivo principal ofereçe serviços para ajudar na gestão ou administração da
            sua instituição de ensino que pode ser:
          </div>
          <ul class="mt-6 p-2">
            <li v-for="item of instituions" :key="item.name" class="py-2">
              <div class="flex gap-4 items-center">
                <Icon icon="teenyicons:school-outline" class="h-[1.5rem] w-[1.5rem] text-blue-600" />
                <div class="flex flex-col gap-1">
                  <div class="font-extrabold">{{ item.name }}</div>
                  <div class="text-gray-700 dark:text-gray-200">{{ item.description }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="p-5 flex items-center gap-4 w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <Card v-for="item in services" :key="item.name"
              class="bg-blue-500 dark:bg-slate-900 p-3 rounded-xl text-white cursor-pointer hover:scale-105 shadow-2xl">
              <div class="flex gap-2 items-center">
                <Icon :icon="item.icon" class="h-[2.5rem] w-[2.5rem]" />
                <CardTitle class="font-extrabold text-lg">{{ item.name }}</CardTitle>
              </div>
              <CardDescription class="mt-1 text-base text-white">{{ item.description }}</CardDescription>
            </Card>
          </div>
        </div>
      </section>
      <section class="md:px-32 p-2 md:pt-16">
        <div class="p-2">
          <div class="text-4xl font-extrabold py-1 md:py-5 text-blue-600">Recuros</div>
          <div class="p-3 md:p-6">
            Nosso sistema vai além das funcionalidades comuns de gestão educacional, oferecendo recursos inovadores para
            otimizar a administração acadêmica e aprimorar a experiência dos usuários:
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white dark:bg-gray-900">
            <div v-for="item in resources" :key="item.name" :class="`group hover:bg-blue-600 hover:text-white p-2 border-blue-600 relative ${item.border}`">
                <div class="absolute right-3">
                  <Icon :icon="item.icon" class="h-[2.5rem] w-[2.5rem] text-blue-600 group-hover:text-white"/>
                </div>
                <div class="font-semibold text-xl py-7 text-blue-600 group-hover:text-white">{{ item.name }}</div>
                <div>{{ item.description }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="md:px-2 flex flex-col justify-center items-center md:pt-16 gap-8 w-full text-center">
        <div class="flex w-full justify-center items-center flex-col gap-2">
          <div class="text-4xl font-extrabold py-5 text-blue-600">Nossos objectivos</div>
          <div class="md:px-10 w-8/12 text-center">
            Nossa equipe trabalha constantemente para garantir a usabilidade, a segurança e a escalabilidade, oferecendo
            uma plataforma confiável e eficiente para a gestão educacional.
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:px-12 justify-center items-center">
          <div v-for="item in requiredFuntions" :key="item.name"
            class="flex flex-col gap-2 justify-center items-center bg-slate-50 dark:bg-gray-900 p-3 hover:scale-105 cursor-pointer">
            <Icon :icon="item.icon" class="h-[5rem] w-[5rem] text-blue-600" />
            <div class="font-semibold">{{ item.name }}</div>
            <div>{{ item.description }}</div>
          </div>
        </div>
      </section>
    </TabsContent>
    <TabsContent value="price">
      Preco
    </TabsContent>
    <TabsContent value="tutorial">
      Tutorial
    </TabsContent>
  </Tabs>
  <footer class="md:px-32 bg-blue-600 dark:bg-slate-900 rounded-tl-[7rem] rounded-tr-[7rem] mt-20 py-6 text-white">
    <div class="flex justify-between">
      <div class="w-[500px]">
        <div class="text-3xl font-extrabold">Eiduca</div>
        <div class="my-6">
          Agradecemos por ter visitado o nosso website, que venha mais vezes, podes deixar o seu email para receber notifificações de toda nossas novidades
        </div>
        <div class="flex items-center bg-white rounded-full px-3">
          <input class="p-3 text-black w-full bg-transparent focus-visible:outline-none"/>
          <Button class="rounded-full">
            subscrição
          </Button>
        </div>
      </div>
      <div class="flex gap-10 md:gap-20 md:pt-10">
        
        <div class="flex flex-col gap-5">
          <div class="font-semibold text-xl">Links</div>
          <ul class="flex flex-col gap-2">
            <li>Serviços</li>
            <li>Recursos</li>
            <li>Objectivos</li>
          </ul>
        </div>


        <div class="flex flex-col gap-5">
          <div class="font-semibold text-xl">Páginas</div>
          <ul class="flex flex-col gap-2">
            <li>Preço</li>
            <li>Tutorial</li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Icon } from '@iconify/vue'
import { Card, CardTitle } from '~/components/ui/card';

const instituions = [
  { name: "Centro de Formação", description: "Gerencie cursos, inscrições e alunos de forma prática e integrada para máxima produtividade." },
  { name: "Escola", description: "Simplifique a administração escolar com ferramentas intuitivas para gestão de alunos, turmas e professores." },
  { name: "Universidade", description: "Otimize processos acadêmicos e administrativos, garantindo eficiência na gestão universitária." },
];

const services = [
  { name: "Gestão de Alunos", description: "Cadastro, matrícula, histórico acadêmico e acompanhamento de desempenho.", icon: 'ph:student-fill' },
  { name: "Gestão de Professores", description: "Controle de turmas, horários, disciplinas e desempenho docente.", icon: 'mdi:teacher' },
  { name: "Gestão Financeira", description: "Controle de mensalidades, emissão de boletos, relatórios financeiros", icon: 'material-symbols:finance-chip-outline' },
  { name: "Gestão Acadêmica", description: "Criação de turmas, planejamento de aulas, horários e calendário letivo.", icon: 'mynaui:academic-hat' },
  { name: "Gestão de Documentos", description: "Emissão de certificados, declarações, histórico escolar e arquivos digitais.", icon: 'solar:document-outline' },
  { name: "Comunicação e Notificações", description: "Envio de avisos, mensagens para alunos, professores e responsáveis.", icon: 'iconamoon:notification-bold' },
];

const resources = [
  { name: "Editor de Documentos", description: "Ferramenta integrada para criar, editar e compartilhar documentos diretamente na plataforma, facilitando a gestão de arquivos administrativos e acadêmicos.", icon: 'basil:document-solid', border: 'md:border-b md:border-r' },
  { name: "Editor de Calendário", description: "Planejamento e gerenciamento de eventos acadêmicos, aulas e reuniões com um calendário interativo e personalizável.", icon: 'ion:calendar', border: 'md:border-b lg:border-r' },
  { name: "Multitenancy Avançado", description: "Possibilidade de gerenciar múltiplas bases de dados conforme a necessidade da instituição, garantindo flexibilidade, segurança e isolamento de informações.", icon: 'ph:network-fill', border: 'md:border-b md:border-r lg:border-r-0' },
  { name: "Pagamentos Online", description: "Integração com serviços de pagamento digital para facilitar a cobrança de mensalidades, taxas e outros serviços acadêmicos.", icon: 'tdesign:money-filled', border: 'md:border-b lg:border-b-0 lg:border-r' },
  { name: "Recolha de Plano de Estudos", description: "Mecanismo para coletar e organizar os planos de estudo das instituições, permitindo a criação de uma base de dados nacional e auxiliando na padronização de conteúdos e materiais didáticos.", icon: 'bi:collection-fill', border: 'md:border-r lg:border-r' },
  { name: "Sistema de Provas Online", description: "Ferramenta para criação, aplicação e correção de avaliações digitais, permitindo a realização de provas de forma segura e acessível.", icon: 'ic:baseline-assessment', border: '' }
];

const requiredFuntions = [
  { name: "Usabilidade", description: "Interface intuitiva e fácil de navegar, garantindo que gestores, professores e alunos possam utilizar o sistema com eficiência e sem dificuldades.", icon: 'streamline:desktop-help' },
  { name: "Segurança", description: "Proteção dos dados sensíveis da instituição, alunos e professores, com autenticação robusta, criptografia e medidas contra acessos não autorizados.", icon: 'streamline:shield-check' },
  { name: "Escalabilidade", description: "Capacidade do sistema de crescer e atender a um número maior de usuários sem perda de desempenho, garantindo estabilidade mesmo com alta demanda.", icon: 'streamline:money-graph-analytics-business-product-graph-data-chart-analysis' },
  { name: "Portabilidade", description: "Compatibilidade com diferentes dispositivos e navegadores, permitindo acesso ao sistema de qualquer lugar, seja em desktops, tablets ou smartphones.", icon: 'tdesign:device' },
];

</script>
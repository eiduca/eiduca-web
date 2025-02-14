<script setup lang="ts">
import { ThemeDropdown } from '#components';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 h-screen">
    <div class="bg-blue-600 relative flex justify-center items-center gap-3 rounded-br-[4rem] rounded-tr-[4rem]">
      <NuxtLink class="absolute flex gap-3 m-2 items-center top-0 left-0" to="/">
        <div class="bg-white rounded-full flex items-center justify-center">
          <Icon icon="solar:round-arrow-left-bold" class="h-10 w-10 text-blue-600" />
        </div>
        <div class="text-white text-2xl font-bold">voltar</div>
      </NuxtLink>
      <div class="px-2 md:px-6 text-white text-left">
        <div class="mb-14 text-3xl">Eiduca</div>
        <ul class="flex flex-col gap-10">
          <li>
            <div class="flex items-center space-x-2">
              <Icon icon="fluent:checkbox-checked-16-filled" class="h-6 w-6" />
              <strong class="text-lg">Segurança das Credenciais:</strong>
            </div>
            <span class="text-lg ml-8">Seu acesso é seguro! Utilize credenciais fortes e nunca compartilhe sua
              senha.</span>
          </li>

          <li>
            <div class="flex items-center space-x-2 mt-2">
              <Icon icon="fluent:checkbox-checked-16-filled" class="h-6 w-6" />
              <strong class="text-lg">Proteção dos Dados:</strong>
            </div>
            <span class="text-lg ml-8">A autenticação protege seus dados e garante um ambiente confiável.</span>
          </li>

          <li>
            <div class="flex items-center space-x-2 mt-2">
              <Icon icon="fluent:checkbox-checked-16-filled" class="h-6 w-6" />
              <strong class="text-lg">Verificação do Site:</strong>
            </div>
            <span class="text-lg ml-8">Sempre verifique se está em um site oficial antes de inserir suas
              informações.</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-center py-12 relative">
      <div class="absolute top-1 right-1">
        <ThemeDropdown/>
      </div>
      <div class="mx-auto grid w-[500px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">
            Autenticação
          </h1>
          <p class="text-balance text-muted-foreground">
            Digita email para o processo de login
          </p>
        </div>
        <div class="flex gap-3 md:gap-7 w-full">
          <Button class="w-full p-5 rounded-2xl" variant="outline">
            <img src="/img/4373145_google_logos_logo.png" class="w-7 h-7" alt="logo google" />
            Login com Google
          </Button>
          <Button class="w-full p-5 rounded-2xl" variant="outline">
            <img src="/img/4373129_f_facebook_logos_logo.png" class="w-7 h-7" alt="logo facebook" />
            Login com Facebook
          </Button>
        </div>
        <div class="flex items-center justify-center relative my-5">
          <div class="absolute bg-white dark:bg-slate-950 z-10 w-[50px] text-center">ou</div>
          <div class="border-b w-full"></div>
        </div>
        <div class="grid gap-6">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" class="bg-slate-300 dark:text-black" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Senha</Label>
              <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                Esqueçe a senha?
              </a>
            </div>
            <Input id="password" type="password" class="bg-slate-300 dark:text-black" required />
          </div>
          <Button type="submit" class="w-full">
            Entrar
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
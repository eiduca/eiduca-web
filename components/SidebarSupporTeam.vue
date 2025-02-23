<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <SidebarMenuButton size="lg"
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <div
                    class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <component :is="activeTeam.logo" class="size-4" />
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">Eiduca</span>
                    <span class="truncate text-xs">Painel administrativo</span>
                </div>
                <ChevronsUpDown class="ml-auto" />
            </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg hidden" side="bottom"
            :side-offset="4">
            <DropdownMenuLabel class="text-xs text-muted-foreground">
                Contacto
            </DropdownMenuLabel>
            <DropdownMenuItem v-for="(team, index) in data.teams" :key="team.name" class="gap-2 p-2"
                @click="setActiveTeam(team)">
                <div class="flex size-6 items-center justify-center rounded-sm border">
                    <component :is="team.logo" class="size-4 shrink-0" />
                </div>
                {{ team.name }}
                <DropdownMenuShortcut>⌘{{ index + 1 }}</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
<script setup lang="ts">
import { AudioWaveform, Command, GalleryVerticalEnd, ChevronsUpDown } from 'lucide-vue-next';

const data = {
  teams: [
    {
      name: 'Eiduca',
      logo: GalleryVerticalEnd,
      plan: 'Plataforma',
    },
    {
      name: 'Emai de apoio.',
      logo: AudioWaveform,
      plan: 'apoio@eiduca.com',
    },
    {
      name: 'Número de contacto',
      logo: Command,
      plan: '936269780',
    },
  ],
}

const activeTeam = ref(data.teams[0])

function setActiveTeam(team: typeof data.teams[number]) {
  activeTeam.value = team
}
</script>
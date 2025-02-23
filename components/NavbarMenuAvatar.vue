<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <SidebarMenuButton size="lg"
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Avatar class="h-8 w-8 rounded-lg">
                    <AvatarImage :src="data.user.avatar" :alt="data.user.name" />
                    <AvatarFallback class="rounded-lg">
                        CN
                    </AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ data.user.name }}</span>
                    <span class="truncate text-xs">{{ data.user.email }}</span>
                </div>
                <ChevronsUpDown class="ml-auto size-4" />
            </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom"
            :side-offset="4">
            <DropdownMenuLabel class="p-0 font-normal">
                <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar class="h-8 w-8 rounded-lg">
                        <AvatarImage :src="data.user.avatar" :alt="data.user.name" />
                        <AvatarFallback class="rounded-lg">
                            CN
                        </AvatarFallback>
                    </Avatar>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                        <span class="truncate font-semibold">{{ data.user.name }}</span>
                        <span class="truncate text-xs">{{ data.user.email }}</span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <Sparkles />
                    Actualiza o pacote
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <User />
                    Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Cog />
                    Preferências
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Bell />
                    Notificações
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <LogOut />
                Sair
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
<script lang="ts" setup>
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'
import { Bell, ChevronsUpDown, Cog, User } from 'lucide-vue-next';

const data = {
    user: {
        name: 'Sedrac',
        email: 'sedrac@eiduca.com',
        avatar: '/avatars/shadcn.jpg',
    },
}
</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost">
                <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Modo</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem @click="colorMode.preference = 'light'">
                Claro
            </DropdownMenuItem>
            <DropdownMenuItem @click="colorMode.preference = 'dark'">
                Escuro
            </DropdownMenuItem>
            <DropdownMenuItem @click="colorMode.preference = 'system'">
                Sistema
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()
</script>
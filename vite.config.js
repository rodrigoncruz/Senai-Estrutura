import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Senai-Estrutura/'   // 👈 precisa ser igual ao nome do repositório
})

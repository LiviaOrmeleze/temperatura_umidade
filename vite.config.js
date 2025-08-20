import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // parte de comunicação que estamos criando, eu pedi para abrir, porta padrão do react
    host: true, // para fazer funcionar "internet", criando um server local
    open: true, // abre no automatico, nn preciso ficar clicando 
  },
});

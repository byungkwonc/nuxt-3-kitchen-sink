import {isProduction} from "std-env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/dotenv'],
  plugins: ['@/plugins/gtag.client'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['UseFetchDemo'].includes(tag),
    },
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      preload: ['javascript', 'vue', 'html'],
      theme: 'monokai',
    },
  },
  app: {
    head: {
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://www.agentify.ai/agentify-widget.js' }
      ],
    }
  },
  runtimeConfig: {
    public: {
        google_analytics_id: process.env.google_analytics_id,
        production_mode: isProduction
    }
  },
});
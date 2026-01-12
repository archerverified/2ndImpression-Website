import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

function figmaAssetPlugin() {
  const virtualModulePrefix = '\0figma:asset/';
  
  return {
    name: 'figma-asset-placeholder',
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) {
        // Return a virtual module ID
        return virtualModulePrefix + source.replace('figma:asset/', '');
      }
      return null;
    },
    load(id: string) {
      if (!id.startsWith(virtualModulePrefix)) return null;

      const name = id.replace(virtualModulePrefix, '');
      // Generate a simple placeholder SVG
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200" fill="none">
          <rect width="320" height="200" fill="#E5E7EB"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#4B5563" font-family="Arial, sans-serif" font-size="12">
            ${name.substring(0, 8)}...
          </text>
        </svg>
      `;
      const encoded = Buffer.from(svg).toString('base64');
      return `export default "data:image/svg+xml;base64,${encoded}"`;
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), react(), figmaAssetPlugin()],
  server: {
    port: 5173,
  },
});

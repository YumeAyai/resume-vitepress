import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My resume",
  description: "A freedom resume proj",
  themeConfig: {
    logo: "/logo.png",
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      const defaultRender = md.renderer.rules.heading_open || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      // 重写 h2 的渲染规则
      md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        if (token.tag === 'h2') {
          token.attrSet('class', 'title');
        }
        return defaultRender(tokens, idx, options, env, self);
      };
    },
  },
})

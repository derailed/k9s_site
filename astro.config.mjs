// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import remarkGfm from "remark-gfm";

// When deployed to a fork's GitHub Pages (project site under a subpath, e.g.
// https://<user>.github.io/<repo>/), assets must be served from that subpath.
// GitHub Actions sets GITHUB_REPOSITORY="owner/name". For the canonical
// "derailed" deploy we keep the apex domain with no base (see AGENTS.md).
const repo = process.env.GITHUB_REPOSITORY;
const [owner, name] = repo?.split("/") ?? [];
const isFork = Boolean(owner) && owner !== "derailed";

const site = isFork ? `https://${owner}.github.io` : "https://k9scli.io";
const base = isFork ? `/${name}/` : undefined;

// https://astro.build/config
export default defineConfig({
  site,
  base,
  markdown: {
    // Ensure GitHub-flavored Markdown (tables, etc.) works in .md and .mdx.
    remarkPlugins: [remarkGfm],
  },
  integrations: [
    starlight({
      title: "K9s",
      description:
        "K9s provides a terminal UI to interact with your Kubernetes clusters.",
      plugins: [starlightImageZoom()],
      logo: {
        src: "./src/assets/k9s.png",
        alt: "K9s",
        replacesTitle: false,
      },
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/derailed/k9s",
        },
        {
          icon: "x.com",
          label: "X",
          href: "https://twitter.com/kitesurfer",
        },
        {
          icon: "slack",
          label: "Slack",
          href: "https://k9sers.slack.com/",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/derailed/k9s_site/edit/master/",
      },
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: "https://k9scli.io/k9s.png" },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://k9scli.io/k9s.png",
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { slug: "topics/install" },
        { slug: "topics/commands" },
        { slug: "topics/views" },
        {
          label: "Customizations",
          items: [
            {
              label: "Feel",
              items: [
                { slug: "topics/config", label: "K9s" },
                { slug: "topics/aliases" },
                { slug: "topics/hotkeys" },
                { slug: "topics/plugins" },
                { slug: "topics/jumps" },
                { slug: "topics/shell" },
              ],
            },
            {
              label: "Look",
              items: [{ slug: "topics/skins" }, { slug: "topics/columns" }],
            },
          ],
        },
        { slug: "topics/bench" },
        { slug: "topics/rbac" },
        { slug: "topics/video" },
      ],
    }),
  ],
  redirects: {
    "/topics/docs": "/",
  },
});

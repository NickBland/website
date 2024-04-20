<script lang="ts">
  import Github from "lucide-svelte/icons/github";
  import Gitlab from "lucide-svelte/icons/gitlab";
</script>

<footer class="footer items-center py-4 bg-neutral text-neutral-content">
  <aside class="items-center grid-flow-col mx-2">
    <a class="btn text-xl btn-ghost" href="/">nickbland.dev</a>
    <p>
      Copyright © 2024 - All right reserved | <a
        class="link"
        href="https://git.nickbland.dev/NickBland/website-2">Source Code</a
      > | Made with ❤️ using SvelteKit
    </p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-2">
    <div class="tooltip" data-tip="GitHub">
      <a
        role="button"
        class="btn btn-ghost hover:shadow-lg"
        href="https://github.com/NickBland"><Github /></a
      >
    </div>
    <div class="tooltip" data-tip="GitLab">
      <a
        role="button"
        class="btn btn-ghost hover:shadow-lg"
        href="https://git.nickbland.dev/NickBland"><Gitlab /></a
      >
    </div>
  </nav>
</footer>

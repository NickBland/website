<script lang="ts">
  import Github from "lucide-svelte/icons/github";
  import Gitlab from "lucide-svelte/icons/gitlab";
</script>

<footer class="footer items-center pt-4 bg-neutral text-neutral-content">
  <aside class="items-center grid-flow-col mx-2">
    <a class="btn btn-ghost text-xl" href="/">nickbland.dev</a>
    <p>Copyright © 2024 - All right reserved</p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-2">
    <a role="button" class="btn btn-ghost" href="https://github.com/NickBland"
      ><Github /></a
    >
    <a role="button" class="btn btn-ghost" href="https://git.nickbland.dev/NickBland"
      ><Gitlab /></a
    >
  </nav>
</footer>

<script>
  import ThemeController from "./themeController.svelte";
</script>

<div class="navbar bg-neutral text-neutral-content">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl hover:shadow-lg" href="/">nickbland.dev</a>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal px-1">
      <li class="focus:"><ThemeController /></li>
    </ul>
  </div>
</div>

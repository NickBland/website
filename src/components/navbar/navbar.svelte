<script>
  import ThemeController from "./themeController.svelte";
</script>

<div class="navbar bg-base-100">
  <div class="flex-1 navbar-start">
    <a class="btn btn-ghost text-xl" href="/">daisyUI</a>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal px-1">
      <li class="focus:"><ThemeController /></li>
    </ul>
  </div>
</div>

<script>
  import ThemeController from "./themeController.svelte";
  // import Menu from "lucide-svelte/icons/menu";
</script>

<div class="navbar bg-neutral text-neutral-content">
  <div class="navbar-start">
    <!-- <div class="dropdown">
      <div
        tabindex="0"
        role="button"
        aria-label="menu button"
        class="btn btn-ghost lg:hidden"
      >
        <Menu class="w-5 h-5 fill-current" />
      </div>
      <ul
        tabindex="-1"
        class="tablist menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52 text-neutral-content"
      >
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
      </ul>
    </div> -->
    <a class="btn btn-ghost text-xl hover:shadow-lg" href="/">nickbland.dev</a>
  </div>
  <!-- <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/" class="btn btn-ghost text-lg hover:shadow-lg">Home</a></li>
      <li>
        <a href="/portfolio" class="btn btn-ghost text-lg hover:shadow-lg">Portfolio</a>
      </li>
    </ul>
  </div> -->
  <div class="navbar-end">
    <ul class="menu menu-horizontal px-1">
      <li class="focus:"><ThemeController /></li>
    </ul>
  </div>
</div>

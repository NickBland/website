<script>
  import ThemeController from "./themeController.svelte";
</script>

<div
  class="navbar bg-base-300 dark:bg-neutral rounded-box mt-1 dark:text-neutral-content"
>
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <ul
        tabindex="-1"
        class="tablist menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 dark:bg-neutral rounded-box w-52 dark:text-neutral-content"
      >
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">nickbland.dev</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      <li><a href="/portfolio">Portfolio</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal px-1">
      <li class="focus:"><ThemeController /></li>
    </ul>
  </div>
</div>

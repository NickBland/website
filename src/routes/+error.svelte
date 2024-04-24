<script lang="ts">
  import { page } from "$app/stores";
</script>

<div
  class="hero height-minus-nav bg-gradient-to-br from-primary from-10% to-accent to-80%"
>
  <div class="hero-overlay bg-opacity-30"></div>
  <div class="hero-content text-left text-accent-content flex-col lg:flex-row">
    <div>
      <h1
        class="mb-6 text-5xl md:text-7xl lg:text-9xl font-bold text-primary-content text-center"
      >
        Whoah!
      </h1>
      <h3
        class="text-3xl md:text-5xl lg:text-7xl font-bold text-primary-content text-center"
      >
        {$page.status}:
        {$page.error?.message}
      </h3>
    </div>
  </div>
</div>

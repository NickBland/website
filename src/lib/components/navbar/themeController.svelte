<script lang="ts">
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
</script>

<label class="swap swap-rotate" aria-label="Theme swapper">
  <!-- this hidden checkbox controls the state -->
  <input
    type="checkbox"
    class="theme-controller"
    value="winter"
    aria-label="Theme toggle button"
  />

  <Sun class="w-7 h-7 swap-on fill-current hover:shadow-lg" />

  <Moon class="w-7 h-7 swap-off fill-current hover:shadow-lg" />
</label>

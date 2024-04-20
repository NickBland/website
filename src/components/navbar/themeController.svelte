<script lang="ts">
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
</script>

<label class="swap swap-rotate">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" class="theme-controller" value="winter" />

  <Sun class="w-7 h-7 swap-on fill-current hover:shadow-lg" />

  <Moon class="w-7 h-7 swap-off fill-current hover:shadow-lg" />
</label>

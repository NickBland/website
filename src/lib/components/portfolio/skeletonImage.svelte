<script lang="ts">
  import { onMount } from "svelte";
  export let src: string;
  export let altText: string = "";

  let loaded = false;

  onMount(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      loaded = true;
    };
  });
</script>

{#if loaded}
  <img {src} class="w-48 h-64 shadow-2xl max-w-sm rounded-2xl" alt={altText} />
{:else}
  <div class="skeleton w-48 h-64 shadow-2xl max-w-sm rounded-2xl" />
{/if}

<script lang="ts">
  import { onMount } from "svelte";
  interface Props {
    src: string;
    altText?: string;
  }

  let { src, altText = "" }: Props = $props();

  let loaded = $state(false);

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
  <div class="skeleton w-48 h-64 shadow-2xl max-w-sm rounded-2xl"></div>
{/if}

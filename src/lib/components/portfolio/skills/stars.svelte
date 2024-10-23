<script lang="ts">
  import Star from "lucide-svelte/icons/star";
  import HalfStar from "lucide-svelte/icons/star-half";

  interface Props {
    count?: number;
    half?: boolean;
  }

  let { count = 5, half = false }: Props = $props();
</script>

<div class="flex">
  {#each Array(count) as _}
    <!-- Need to use the var somewhere -->
    <Star name={_} class="stroke-neutral-content fill-neutral-content" />
  {/each}
  {#if half}
    <HalfStar class="stroke-neutral-content fill-neutral-content" />
  {/if}
</div>

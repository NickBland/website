<script lang="ts">
  import Star from "lucide-svelte/icons/star";
  import HalfStar from "lucide-svelte/icons/star-half";

  export let count: number = 5;
  export let half: boolean = false;
</script>

<div class="flex">
  {#each Array(count) as _}
    <!-- Need to use the var somewhere -->
    <Star name={_} class="stroke-base-content fill-base-content" />
  {/each}
  {#if half}
    <HalfStar class="stroke-base-content fill-base-content" />
  {/if}
</div>

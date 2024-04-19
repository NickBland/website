<script lang="ts">
  export let middle: boolean = false;
</script>

<!-- If the text is between some other text, adjust padding to not seperate it out too much -->
<!-- Default behaviour is to leave as is, unless true is passed through the props -->

<div>
  {#if middle}
    <p class="px-5 mx-auto text-xl max-w-3xl">
      <slot />
    </p>
  {:else}
    <p class="p-5 mx-auto text-xl max-w-3xl">
      <slot />
    </p>
  {/if}
</div>

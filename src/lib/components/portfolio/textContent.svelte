<script lang="ts">
  interface Props {
    middle?: boolean;
    classes?: string;
    children?: import('svelte').Snippet;
  }

  let { middle = false, classes = "", children }: Props = $props();
</script>

<!-- If the text is between some other text, adjust padding to not seperate it out too much -->
<!-- Default behaviour is to leave as is, unless true is passed through the props -->

<div>
  {#if middle}
    <p class="px-5 mx-auto text-xl max-w-3xl {classes}">
      {@render children?.()}
    </p>
  {:else}
    <p class="p-5 mx-auto text-xl max-w-3xl {classes}">
      {@render children?.()}
    </p>
  {/if}
</div>

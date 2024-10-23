<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/navbar/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Navbar />

{@render children?.()}

<Footer />

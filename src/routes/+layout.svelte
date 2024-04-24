<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/navbar/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<Navbar />

<slot />

<Footer />

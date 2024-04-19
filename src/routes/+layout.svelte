<script lang="ts">
  import "../app.css";
  import Navbar from "../components/navbar/navbar.svelte";
  import Footer from "../components/footer.svelte";
</script>

<Navbar />

<slot />

<Footer />

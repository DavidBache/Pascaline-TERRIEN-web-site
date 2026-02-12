<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
        // Redirige vers le fichier HTML statique
        window.location.replace('/cms/index.html');
    });
</script>

<svelte:head>
    <title>Redirection vers CMS...</title>
</svelte:head>

<div class="flex items-center justify-center min-h-screen">
    <p>Chargement du CMS...</p>
</div>

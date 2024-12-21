<script lang="ts">
	import ToolsSection from './ToolsSection.svelte';

	const stackItems = [
		'typescript😎',
		'sveltekit/svelte🔥',
		'react⚛️',
		'xstate/redux-toolkit🏬',
		'css/scss/styled components/tailwindcss/bootstrap🎨',
		'node.js🚀',
		'graphql/rest🚂',
		'git/github🐙',
		'figma🎨'
	];

	const toolsItems = ['vscode/zed💻', 'notion📝', 'photoshop🌠', 'lightroom🌄', 'fuji x-e4📸'];
</script>

<ToolsSection items={stackItems}>
	{#snippet header()}
		stack
	{/snippet}
</ToolsSection>

<ToolsSection items={toolsItems}>
	{#snippet header()}
		tools
	{/snippet}
</ToolsSection>

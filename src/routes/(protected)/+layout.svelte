<script lang="ts">
	import { Layout } from 'stwui';
    import AppSidebar from '@/components/Sidebar.svelte';
    import AppHeader from '@/components/Header.svelte';

    const { Content, Header } = Layout;

    let sideBarCollapsed = false;

    function toggleSidebar() {
        sideBarCollapsed = !sideBarCollapsed;
    }
</script>

<Layout class="h-full">
	<Content collapsed={sideBarCollapsed}>
		<Content.Sidebar class="max-h-full">
			<AppSidebar expanded={sideBarCollapsed} on:collapseChange={toggleSidebar} />
		</Content.Sidebar>
		<Layout class="flex flex-col items-center justify-center min-h-[200px]">
			<Header class="static z-0">
                <AppHeader />
			</Header>

			<Content>
				<Content.Body class="flex items-center justify-center min-h-[200px]">
                    <slot />
                </Content.Body>
			</Content>
		</Layout>
	</Content>
</Layout>
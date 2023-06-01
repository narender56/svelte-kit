<script lang="ts">
	import { Layout } from 'stwui';
    import AppSidebar from '@/components/Sidebar.svelte';
    import AppHeader from '@/components/Header.svelte';

    const { Content, Header, Footer } = Layout;

    let sideBarCollapsed = false;

    function toggleSidebar() {
        sideBarCollapsed = !sideBarCollapsed;
    }
</script>

<Layout class="h-full">
	<Content collapsed={sideBarCollapsed}>
		<Content.Sidebar class="flex items-center justify-center min-h-[328px]">
			<AppSidebar on:collapse={toggleSidebar}/>
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

			<Footer class="static z-0 max-h-[64px]">
				Footer
			</Footer>
		</Layout>
	</Content>
</Layout>
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { Button, List } from 'stwui';
    import FaHome from 'svelte-icons/fa/FaHome.svelte';
    import MdShowChart from 'svelte-icons/md/MdShowChart.svelte';
    import IoMdBook from 'svelte-icons/io/IoMdBook.svelte';
    import FaRegChartBar from 'svelte-icons/fa/FaRegChartBar.svelte';
    import FaSearchengin from 'svelte-icons/fa/FaSearchengin.svelte';
    import MdChevronLeft from 'svelte-icons/md/MdChevronLeft.svelte';
    import MdChevronRight from 'svelte-icons/md/MdChevronRight.svelte';

    export let expanded: boolean;

    const dispatch = createEventDispatcher();

    const handleToggle = () => {
        dispatch('collapseChange', !expanded);
    };

    interface NavItem {
        name: string;
        icon: any;
        href: string;
    }
    const navItems: NavItem[] = [
        {
            name: 'Dashboard',
            icon: FaHome,
            href: '/',
        },
        {
            name: 'My Trades',
            icon: MdShowChart,
            href: '/trades',
        },
        {
            name: 'Notebook',
            icon: IoMdBook,
            href: '/notebooks',
        },
        {
            name: 'Reports',
            icon: FaRegChartBar,
            href: '/reports',
        },
        {
            name: 'Research',
            icon: FaSearchengin,
            href: '/research',
        }
    ]
</script>

<div class="h-full flex-col border-r border-r-neutral-200 bg-transparent dark:border-neutral-800 md:flex">
    <div class="absolute top-24 right-[-5px] z-10 scale-125 rounded-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black dark:text-white">
        <Button class="p-1.5" on:click={handleToggle} disableHover>
            <span class="h-4">
                {#if expanded}
                    <MdChevronRight />
                {:else}
                    <MdChevronLeft height={20}/>
                {/if}
            </span>
        </Button>
    </div>

    <List class="mt-32 h-full max-h-full" bordered={false} divided={false}>
        {#each navItems as item}
            <a href={item.href}>
                <List.Item class="p-3 m-3 rounded-lg hover:bg-neutral-200/70 hover:text-neutral-900 dark:hover:bg-neutral-800">
                    <span class="block h-5 text-primary">
                        <svelte:component this={item.icon} />
                    </span>
                    {#if !expanded}
                        <List.Item.Content slot="content">
                            <List.Item.Content.Title slot="title">{item.name}</List.Item.Content.Title>
                        </List.Item.Content>
                    {/if}
                </List.Item>
            </a>
        {/each}
    </List>
</div>

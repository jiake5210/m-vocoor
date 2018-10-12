<template>
    <div class="vm-index-container">
        <vm-common-header></vm-common-header>
        <vm-index-banner></vm-index-banner>
        <vm-index-nav-item></vm-index-nav-item>
        <vm-index-content-info></vm-index-content-info>
        <vm-common-footer></vm-common-footer>
    </div> 
</template>
<script>
import vmCommonHeader from '@/components/vm-common-header' // header 组件
import vmIndexBanner from '@/components/index/vm-index-banner' // banner 组件
import vmIndexNavItem from '@/components/index/vm-index-nav-item' // nav-item 组件
import vmIndexContentInfo from '@/components/index/vm-index-content-info' // content-info 组件
import vmCommonFooter from '@/components/vm-common-footer' // footer 组件

export default {
    components: {
        'vm-common-header': vmCommonHeader,
        'vm-index-banner': vmIndexBanner,
        'vm-index-nav-item': vmIndexNavItem,
        'vm-index-content-info': vmIndexContentInfo,
        'vm-common-footer': vmCommonFooter
    }
}
</script>

<style lang="scss" scoped> 
</style>





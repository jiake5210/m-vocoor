<template>
    <div class="vm-menber_center-container">
        <vm-common-header></vm-common-header>
        会员中心
        <vm-common-footer></vm-common-footer>
    </div>
</template>

<script>
import vmCommonHeader from '@/components/vm-common-header' // header 组件
import vmCommonFooter from '@/components/vm-common-footer' // footer 组件
export default {
    components: {
        'vm-common-header': vmCommonHeader,
        'vm-common-footer': vmCommonFooter
    }
}
</script>

<style lang="scss" scoped>

</style>



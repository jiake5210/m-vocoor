<template>
    <div class="vm-content-container">
        <!-- 切换类型 -->
        <div class="vm-content-nav">
            <nav :class="{active:contentShows=='requireInfo'}" @click="vmToggleContent('requireInfo')">
                <p>需求信息</p>
                <span class="more"></span>
            </nav>
            <nav :class="{active:contentShows=='projectInfo'}"  @click="vmToggleContent('projectInfo')">
                <p>项目信息</p>
                <span class="more"></span>
            </nav>
        </div>

        <!-- 拖动组件 -->
        <vm-common-tab-view></vm-common-tab-view>
        <!-- 列表组件 -->
        
    </div>    
</template>

<script>
import vmCommonTabView from '@/components/vm-common-tab-view.vue' // 拖动组件
export default {
    data () {
        return {
            contentShows: 'requireInfo'
        }
    },
    methods: {
        vmToggleContent (cartgory) {
            this.contentShows = cartgory;
        }
    },
    components: {
        'vm-common-tab-view': vmCommonTabView
    }
}
</script>

<style lang="scss" scoped>
.vm-index-container {
    .vm-content-container {
        background-color: #fff;
        margin-top: 20px;
        .vm-content-nav {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee; /* no */
        }
        nav {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            height: 80px;
            p {
                font-size: 30px;
            }
        }
        nav.active {
            color: #da261b;
            border-bottom: 1px solid #d9271b; /* no */
            span.more {
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                width: 40px;
                background-color: #e5e5e5;
                display: flex;
                justify-content: center;
                align-items: center;
                &::before {
                    content: '';
                    position: absolute;
                    width: 33px;
                    height: 32px;
                    background: url(/static/images/mv_Spirit.png) no-repeat;
                    background-size: 6.666667rem 6.72rem;
                    background-position: -76px 0;
                }
            }
        }
    }
}
</style>


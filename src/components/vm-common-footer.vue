<template>
    <footer class="vm-footer-container">
        <router-link tag="span" to="/index">
            <i class="vm-icon index"></i>
            <p>首页</p>
        </router-link>
        <router-link tag="span" to="/work_bench">
            <i class="vm-icon work_bench"></i>
            <p>工作台</p>
        </router-link>
        <router-link tag="span" to="/statistics_analysis">
            <i class="vm-icon statistics"></i>
            <p>统计与分析</p>
        </router-link>
        <router-link tag="span" to="/expert_evaluation">
            <i class="vm-icon expert-evaluation"></i>
            <p>专家评标</p>
        </router-link>
        <router-link tag="span" to="/menber_center">
            <i class="vm-icon menber"></i>
            <p>会员中心</p>
        </router-link>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.vm-footer-container {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    background-color: #fff;
    border-top: 1px solid #eeeeee;
    display: flex;
    span {
        position: relative;
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        i {
            width: 36px;
            height: 36px;
            display: inline-block;
        }
        i.vm-icon.index {
            background-position: -40px -144px;
        }
        i.vm-icon.work_bench {
            background-position: -40px -215px;
        }
        i.vm-icon.statistics {
            width: 67px;
            height: 67px;
            margin-top: -0.3rem;
            background-position: 0 -437px;
        }
        i.vm-icon.expert-evaluation {
            background-position: -40px -287px;
        }
        i.vm-icon.menber {
            background-position: -40px -72px;
        }
    }
    span.router-link-active {
        i.vm-icon.index {
            background-position: -40px -108px;
        }
        i.vm-icon.work_bench {
            background-position: -39px -179px;
        }
        i.vm-icon.statistics {
            background-position: -66px -437px;
        }
        i.vm-icon.expert-evaluation {
            background-position: -39px -252px;
        }
        i.vm-icon.menber {
            background-position: -40px -35px;
        }
    }
}
</style>


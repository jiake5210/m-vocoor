<template>
    <div class="vm-nav-item-container">
        <div class="lm-left-container">
            <div class="lm-header-warp">
                <span>信采通</span>
            </div>
            <div class="lm-body-warp">
                <div class="menu-item">
                    <i class="vm-icon examine-center"></i><p>审批中心</p>
                </div>
                <div class="menu-item">
                    <i class="vm-icon require-info"></i>
                    <p>需求信息</p>
                </div>
                <div class="menu-item">
                    <i class="vm-icon desk"></i>
                    <p>工作台</p>
                </div>
                <div class="menu-item">
                    <i class="vm-icon category-supplier"></i>
                    <p>分类供应商</p>
                </div>
                <div class="menu-item">
                    <i class="vm-icon match-purchase"></i>
                    <p>匹配采购</p>
                </div>
                <div class="menu-item">
                    <i class="vm-icon statist-analysis"></i>
                    <p>统计分析</p>
                </div>
            </div>
        </div>
        <div class="bl-right-container">
            <div class="bl-header-warp">
                <span>营采通</span>
            </div>
            <div class="bl-body-warp">
                <div class="menu-item">
                    <i class="vm-icon business-transaction-center"></i>
                    <p>业务交易中心</p>
                </div>
                <div class="menu-item">
                    <i class="vm-icon company-info"></i>
                    <p>公司信息</p>
                </div>
                <div class="menu-item">
                    <i class="vm-icon electronic-commerce"></i>
                    <p>电子商务</p>
                </div>
                <div class="menu-item">
                    <i class="vm-icon service-application"></i>
                    <p>服务申请</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.vm-nav-item-container {
    background: #fff;
    width: 100%;
    height: 390px;
    display: flex;
    .lm-left-container {
        border-right: 1px solid #eeeeee;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        .lm-header-warp {
            height: 72px;
            padding-left: 35px;
            padding-top: 15px;
            display: flex;
            justify-content: flex-start;
            span {
                font-size: 26px;
                color: #666;
            }
        }
        .lm-body-warp {
            display: flex;
            flex-wrap: wrap;
            .menu-item {
                width: 33.333%;
                margin-bottom: 25px;
                p {
                    color: #333333;
                    font-size: 22px;
                }
                i.vm-icon {
                    width: 84px;
                    height: 84px;
                }
                i.vm-icon.examine-center {
                    background-position: -332px 0;
                }
                i.vm-icon.require-info {
                    background-position: -416px -84px;
                }
                i.vm-icon.desk {
                    background-position: -416px -168px;
                }
                i.vm-icon.category-supplier {
                    background-position: -416px -252px;
                }
                i.vm-icon.match-purchase {
                    background-position: -416px -336px;
                }
                i.vm-icon.statist-analysis {
                    background-position: -416px -420px;
                }
            }
        }
    }
    .bl-right-container {
        height: 100%;
        width: 312px;
        display: flex;
        flex-direction: column;
        .bl-header-warp {
            height: 72px;
            padding-left: 30px;
            padding-top: 15px;
            display: flex;
            justify-content: flex-start;
            span {
                font-size: 26px;
                color: #666;
            }
        }
        .bl-body-warp {
            display: flex;
            flex-wrap: wrap;
            .menu-item {
                width: 50%;
                margin-bottom: 25px;
                p {
                    color: #333333;
                    font-size: 22px;
                }
                i.vm-icon {
                    width: 84px;
                    height: 84px;
                }
                i.vm-icon.business-transaction-center {
                    background-position: -332px 0;
                }
                i.vm-icon.company-info {
                    background-position: -332px -85px;
                }
                i.vm-icon.electronic-commerce {
                    background-position: -332px -168px;
                }
                i.vm-icon.service-application {
                    background-position: -332px -252px;
                }
            } 
        }
    }
}
</style>



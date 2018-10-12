<template>
    <div class="vm-banner-container">
        <swiper :options="swiperOption">
            <swiper-slide><img src="static/images/mv_index_banner.png"></swiper-slide>
            <swiper-slide><img src="static/images/mv_index_banner.png"></swiper-slide>
            <swiper-slide><img src="static/images/mv_index_banner.png"></swiper-slide>
        </swiper>
        <!--以下看需要添加-->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data () {
        return {
            swiperOption: {//swiper3
                autoplay: {
                    delay: 3000, //自动切换的时间间隔，单位ms
                    stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
                    stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。
                    disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
                    reverseDirection: false, //开启反向自动轮播。
                    waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
                },
                effect: 'coverflow', //3d滑动
                grabCursor: true,
                centeredSlides: true,
                loop:true,
                slidesPerView: 1.2,
                coverflow: {
                    rotate: 0,  //设置为0
                    stretch: 0,
                    depth: 200,
                    modifier: 2,
                    slideShadows : true
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
                    bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
                    dynamicMainBullets: 2, //动态分页器的主指示点的数量
                    hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
                    clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                },
            },
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss">
.vm-index-container {
    .vm-banner-container {
        background: #fff;
    }
    .swiper-container {
        img {
            padding: 20px 10px 0;
            width: 100%;
        }
    }
    .swiper-pagination {
        position: static !important;
        width: 100% !important;
        .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 13px;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
            width: 36px;
            height: 12px;
            background: #d9261d;
            border-radius: 25%;
        }
    }
}

</style>




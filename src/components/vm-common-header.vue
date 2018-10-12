<template>
    <div class="vm-header-container">
        <a class="login" id="login"></a>
        <h6>沃库工业ERP平台</h6>
        <a class="message" id="message"></a>
    </div>
</template>

<script>

export default {
    name: 'vm-common-header'
}
</script>

<style lang="scss" scoped>
.vm-header-container {
    width: 100%;
    height: 90px;
    background: url('/static/images/page_header.jpg') no-repeat;
    background-size: cover;
    z-index: 999;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    .login {
        position: absolute;
        top: 0;
        left: 0;
        width: 44px;
        height: 90px;
        margin-left: 30px;
        &::before {
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            background: url('/static/images/mv_Spirit.png') no-repeat;
            background-size: 500px 504px;
            background-position: 0 -160px;
            top: 50%;
            left: 50%;
            margin-top: -20px;
            margin-left: -20px;
        }
    }
    h6 {
        font-size: 32px;
        color: #fff;
        font-weight: 200;
        width: 100%;
        flex: 1;
    }
    .message {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 90px;
        margin-right: 30px;
        &::before {
            content: '';
            position: absolute;
            width: 40px;
            height: 37px;
            background: url('/static/images/mv_Spirit.png') no-repeat;
            background-size: 500px 504px;
            background-position: 0 -120px;
            top: 50%;
            left: 50%;
            margin-top: -20px;
            margin-left: -20px;
        }
    }
}
</style>


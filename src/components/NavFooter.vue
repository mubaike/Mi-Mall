<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://space.bilibili.com/240920767?spm_id_from=444.41.0.0" target="_blank">河畔一角主页</a><span>|</span>
            <a href="https://space.bilibili.com/240920767?spm_id_from=444.41.0.0" target="_blank">Vue全栈课程</a><span>|</span>
            <a href="https://space.bilibili.com/240920767?spm_id_from=444.41.0.0" target="_blank">React全家桶课程</a><span>|</span>
            <a href="https://space.bilibili.com/240920767?spm_id_from=444.41.0.0" target="_blank">微信支付专项课程 (H5+小程序+Node+Mongo)</a>
        </div>
        <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
    .footer {
        height: 234px;
        border-top: 4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;
            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link {
            a {
                color: #999999;
                display: inline-block;
            }
            span {
                margin: 0 10px
            }
            margin-bottom: 13px;
        }
        .copyright {
            .domain {
                color: #ff6600;
            }
        }
    }

</style>
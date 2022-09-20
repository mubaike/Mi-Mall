<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javescript:;">小米商城</a>
                    <a href="javescript:;">MUI</a>
                    <a href="javescript:;">云服务</a>
                    <a href="javescript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javescript:;" v-if="username">{{username}}</a>
                    <a href="javescript:;" v-if="!username" @click="login">登录</a>
                    <a href="javescript:;" v-if="username" @click="logout">退出</a>
                    <a href="/#/order/list" v-if="username">我的订单</a>
                    <a href="javescript:;" class="my-cart" @click="goToCart">
                        <span class="icon-cart"></span>
                        购物车({{cartCount}})
                    </a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a v-bind:href="'/#/product/' + item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi手机</span>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视</div>
                                        <div class="pro-price">6999</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">2699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">查看全部</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" naem="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-header',
    data () {
        return {
            phoneList: []
        }
    },
    computed: {
        username () {
            return this.$store.state.username;
        },
        cartCount () {
            return this.$store.state.cartCount;
        }
    },  
    filters: {
        currency (val) {
            if (!val) return '0.00';
            return '¥' + val.toFixed(2) + '元'; 
        }
    },
    mounted () {
        this.getProductList();
        let params = this.$route.params;
        if ( params && params.from == 'login') {
            this.getCartCount()
        }
    },
    methods: {
        login () {
            this.$router.push('/login');
        },
        getProductList () {
            this.axios.get('/products', {
                params: {
                    categoryId: '100012',
                    pageSize: 6
                }
            }).then((res) => {
                if (res.list.length >= 6) {
                    this.phoneList = res.list.slice(0,6);
                }
            })
        },
        getCartCount () {
            this.axios.get('/carts/products/sum').then((res=0) => {
                this.$store.dispatch('saveCartCount', res);
            })
        },
        logout () {
            this.axios.post('/user/logout').then(() => {
                this.$message.success('退出成功');
                this.$cookie.set('userId','',{expires:'-1'});
                this.$store.dispatch('saveUserName', '');
                this.$store.dispatch('saveCartCount', '0');
            })
        },
        goToCart () {
            this.$router.push('/cart');
        }
    }
}
</script>

<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';

    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;  //行高
            background-color: #333333;
            color: #b0b0b0;
            .container {
                @include flex();
                a {
                    display: inline-block; //在同一行内的块级元素
                    color: #b0b0b0;
                    margin-right: 17px;  //右间隔
                }
                .my-cart {
                    width: 110px;
                    background-color: #ff6600;
                    text-align: center;  //文本居中
                    color: #ffffff;
                    margin-right: 0;
                    .icon-cart {
                        @include bgImg (16px, 12px, '/public/imgs/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }
        }
    }
    .nav-header {
        .container {
            position: relative;   //相对定位
            height: 112px;
            display: flex;
            justify-content: space-between; //解决最后一排数量不够自动向两端排列问题
            align-items: center;  //定义了如何沿当前行的横轴布置弹性项目的默认（对齐）行为 (居中)
            .header-menu {
                display: inline-block;
                width: 643px;
                padding-left: 209px;  // 指一个元素在内边距区域（padding area）中左边的宽度
                .item-menu {
                    display: inline-block;
                    color: #333333;
                    font-weight: bold;  //文本的粗细
                    font-size: 16px;    //文本大小
                    line-height: 112px;
                    margin-right: 20px;
                    span {
                        cursor: pointer; //cursor规则是设定网页浏览时用户鼠标指针的样式，也就是鼠标的图形形状. cursor：pointer设定鼠标的形状为一只伸出食指的手
                    }
                    &:hover {
                        color: $colorA;
                        .children {
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children {
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height: 0;
                        opacity: 0;  //透明度
                        overflow: hidden;
                        border-top: 1px solid #e5e5e5; //一个元素的上方的边框
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);  //阴影
                        z-index: 10;  //z-index 属性设置元素的堆叠顺序
                        transition: height .5s;
                        background-color: #ffffff;
                        .product {
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            a {
                                display: inline-block;
                            }
                            img {
                                width: anto;
                                height: 111px; 
                                margin-top: 26px;
                            }
                            .pro-img {
                                height: 137px;
                            }
                            .pro-name {
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price {
                                color: $colorA;
                            }
                            &:before {
                                content: ' ';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                height: 100px;
                                width: 1px;
                            }
                            &:last-child:before {
                                display: none;
                            }
                        }
                    }
                }
            }
            .header-search {
                width: 319px;
                .wrapper {
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    display: flex;
                    align-items: center;
                    input {
                        border: none;
                        box-sizing: border-box;
                        border-right: 1px solid #e0e0e0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                    }
                    a {
                        @include bgImg (18px, 18px, '/public/imgs/icon-search.png');
                        margin-left: 17px;
                    }
                }
            }
        }
    }
</style>
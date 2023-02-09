<template>
    <div class="tabbar">
        <!-- 占位容器 -->
        <div class="placegolder-container"></div>
        <!-- 底部导航栏 -->
        <div class="bottom-tabs">
            <div class="tabs-item" v-for="(item, index) in tabsList" :key="index" @click="tabsChange(index)">
                <img class="tab-icon" />
                <p class="tab-text" :class="tabIndex == index ? 'active' : ''">{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "tabbar",
    components: {},
    data() {
        return {
            tabIndex: 0,
            tabsList: [
                {
                    text: "首页",
                    path: "/"
                },
                {
                    text: "礼品",
                    path: "/Gift"
                },
                {
                    text: "发现",
                    path: "/Test"
                },
            ]
        };
    },
    created() {
        this.tabIndex = localStorage.getItem("tabIndex");
        console.log(this.tabIndex);
    },
    methods: {
        tabsChange(index) {
            this.tabIndex = index;
            this.$router.push({
                path: this.tabsList[index].path
            });
            localStorage.setItem("tabIndex", this.tabIndex);
        }
    },
    watch: {
        $route(newVal, oldVal) {
            // console.log(newVal, oldVal);
            if (newVal.meta.index >= 0) {
                this.tabIndex = newVal.meta.index;
                localStorage.setItem("tabIndex", this.tabIndex);
            }
        }
    }
};
</script>


<style scoped lang="less">
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
}

.placegolder-container {
    height: 70px;
}

.bottom-tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px -1px 1px #e6e6e6;
    background-color: #fff;

    .tabs-item {
        padding: 5px 0;
        flex: 1;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .tab-icon {
            width: 30px;
            height: 30px;
            border-radius: 4px;
        }

        .tab-text {
            font-size: 14px;
            margin: 0;

            &.active {
                color: #624980;
            }
        }
    }

    .tabs-item:nth-child(1) {
        background: red;
        border-radius: 50px;
        height: 90px;
        position: absolute;
        width: 90px;
        margin: -40px 0 0 0;
    }
}
</style>

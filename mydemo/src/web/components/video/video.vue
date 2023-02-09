<template>
    <!-- Video组件 -->
    <div id="common-video" class="h-100">
        <div :class="{ isShow: control }" class="h-100">
            <video ref="video" class="play-video" controls="controls" autoplay="autoplay">
                <source
                    src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
                    type="video/mp4" />
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: "Video",
    data() {
        return {};
    },
    props: {
        poster: {
            type: String,
            required: false,
            default: ""
        },
        src: {
            type: String,
            required: true
        },
        controls: {
            type: Boolean,
            required: false,
            default: true
        },
        control: {
            type: Boolean,
            required: false,
            default: false
        },
        videoData: {
            type: Object,
            required: true
        }
    },
    mounted() {

    },
    methods: {

    },
    watch: {
    }
};
</script>

<style lang="less">

</style>

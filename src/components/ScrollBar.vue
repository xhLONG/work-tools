<template>
    <div>
        <p>滚动条</p>
        <div class="box">
            <div class="inner"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// ::-webkit-scrollbar — 整个滚动条.
// ::-webkit-scrollbar-button — 滚动条上的按钮 (上下箭头).
// ::-webkit-scrollbar-thumb — 滚动条上的滚动滑块.
// ::-webkit-scrollbar-track — 滚动条轨道.
// ::-webkit-scrollbar-track-piece — 滚动条没有滑块的轨道部分.
// ::-webkit-scrollbar-corner — 当同时有垂直滚动条和水平滚动条时交汇的部分.
// ::-webkit-resizer — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).

    .box{
        height: 100px;
        overflow: auto;
        border: 1px solid #000;
    }
    /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
    .box::-webkit-scrollbar {
        /*对垂直流动条有效*/
        width: 6px;
        /*对水平流动条有效*/
        height: 6px;
        background-color: #73d2f3;
    }
    /*定义滚动条的轨道颜色、内阴影及圆角*/
    .box::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
        background: linear-gradient(to top, #fcf5ee, #faf7e6, #73d2f3, #eeeeee);
        border-radius: 1px;
        // display: none;
    }
    /*定义滑块颜色、内阴影及圆角*/
    .box::-webkit-scrollbar-thumb {
        border-radius: 1px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
        background: linear-gradient(to top, #fcf5ee, #faf7e6, #73d2f3, #eeeeee);
    }
    /*定义两端按钮的样式*/
    .box::-webkit-scrollbar-button {
        background-color: #e66464;
    }
    /*定义右下角汇合处的样式*/
    .box::-webkit-scrollbar-corner {
        background: #ffffff;
    }
    .box::-webkit-scrollbar-track-piece {
        background-color: #ffffff;
    }

    .inner{
        height: 200px;
    }
</style>
<template>
    <div id="CarVideo">
        <video-player class="video-player vjs-custom-skin" 
              ref="videoPlayer" 
              :playsinline="true"
              :options="playerOptions">
        </video-player>
    </div>
</template>

<script>
export default {
    name: 'CarVideo',
    data(){
        return {
            playerOptions : {
                  playbackRates:[0.7, 1.0, 1.5, 2.0],                          //播放速度
                  autoplay: true,      
                  muted: false,
                  loop: false,
                  preload: 'auto',
                  language: 'zh-CN',
                  aspectRatio: '16:9',
                  fluid: true,
                  sources:[{
                      type:"video/mp4",                                     //视频流协议，如果时hls,需要后端开启跨域
                      /* src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",     //需要后端把摄像头视频流转换为对应的src地址进行实时监控 */
                      src: "169.254.39.92/doc/page/preview.asp"
                  }],
                  poster: "",
                  notSupportedMessage:'此视频无法播放',
                  controlBar:{
                      timeDivider: true,
                      durationDisplayer: true,
                      remainingTimeDisplay: false,
                      fullscreenToggle: true  
                  }
            }
        }
    }
}
</script>
<style scoped>
.video-js .vjs-icon-placeholder{
    width: 100%;
    height: 100%;
    display: block;
}
</style>
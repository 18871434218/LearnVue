<template>
  <div id="video" style="height: 800px; width: 800px;">
    <div id="localVideo"></div>
    <div id="RemoteVideo"></div>
  </div>
</template>

<script>
/* import { AgoraRTC } from '../libery/AgoraRTCSDK-3.1.1' */
import "../../libery/AgoraRTCSDK-3.1.1";
export default {
 /*  data() {
    return {
      rtc: {
        client: null,
        localStream: null,
        params: {},
      },

      options: {
        appID: "d8dc577dfb654283b70e61599932811a",
        channel: "test",
        uid: null,
      },
    };
  }, */

  methods: {
    startvideo() {
      /*  let client = null;
          let localStream = null;
          let uid = null; */

      var rtc = {
        client: null,
        localStream: null,
        params: {},
      };

      var options = {
        appID: "d8dc577dfb654283b70e61599932811a",
        channel: "test",
        uid: null,
      };
      //创建Client对象
      rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });

      //初始化Client对象
      rtc.client.init(
        options.appID, //appid
        function () {
          console.log("AgoraRTC client 初始化成功");

          //加入频道
          rtc.client.join(
            options.appID,
            options.channel,
            null,                       //用户标识id, 可以自己定义
            function (uid) {
              console.log("用户id: " + uid + "加入频道成功");

              rtc.params.uid = uid;

              //创建音频视频流
              rtc.localStream = AgoraRTC.createStream({
                streamID: rtc.params.uid,
                audio: true,
                video: true,
                screen: false,
              });

              //初始化本地的音视频流
              rtc.localStream.init(function () {
                  console.log("获取用户媒体成功");
                  rtc.localStream.play("localVideo"); //显示本地视频播放<div>标签id名   这块有问题

                  //发布本地音视频流
                  rtc.client.publish(rtc.localStream, function (err) {
                      console.log("发布本地音视频流失败：" + error);
                  });

                  rtc.client.on("stream-published", function (evt) {
                    console.log("发布本地音视频流成功");
                  });
                }, function (err) {
                  console.log("获取用户媒体失败", err);
                });

              //订阅远程视频
              //监听到新的视频
                rtc.client.on("stream-added", function (evt) {
                var stream = evt.stream;
                console.log("有新的音视频流：" + stream.getId());

                rtc.client.subscribe(stream, function (err) {
                  console.log("订阅音视频流失败", err);
                });
              });

              //订阅远端视频
              rtc.client.on("stream-subscribed", function (evt) {
                var remoteStream = evt.stream;
                console.log("订阅远程音视频流成功：", remoteStream.getId());
                remoteStream.play("RemoteVideo");  //显示远程视频播放
                //   addView();
              });
            }, function (err) {
              console.log("AgoraRTC client 初始化失败", err);
            });
        },(err) => {
          console.error(err);
       });
    },
  },

  mounted() {
    this.startvideo();
  },
};
</script>

<style></style>
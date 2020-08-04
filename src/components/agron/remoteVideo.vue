<template>
    <div id="video">
       <div id="localVideo" style="height:400px, width: 400px"></div>
       <div id="RemoteVideo" style="height:400px, width: 400px"></div>
    </div>
</template>

<script>
/* import { AgoraRTC } from '../libery/AgoraRTCSDK-3.1.1' */
import '../../libery/AgoraRTCSDK-3.1.1';
export default {
    mounted(){
          let client = null;
          let localStream = null;
          //创建Client对象
          client = AgoraRTC.createClient({mode: 'live', codec: 'h264'});

          //初始化Client对象
          client.init(
              'd8dc577dfb654283b70e61599932811a',                  //appid
              function(){
                  console.log('AgoraRTC client 初始化成功');

                  //加入频道
                  client.join(
                      null,
                      'test',
                       1111,  //用户标识id, 可以自己定义
                      function(uid){
                          console.log('用户id: '+ uid + '加入频道成功');

                          //创建音频视频流
                          localStream = AgoraRTC.createStream({
                              streamID: uid,
                              audio: true,
                              video: true,
                              screen: false,
                          });

                          //初始化本地的音视频流
                          localStream.init(
                              function(){
                                  console.log("获取用户媒体成功");
                                  localStream.play('localVideo');                   //显示本地视频播放<div>标签id名

                                  //发布本地音视频流
                                  client.publish(localStream, function(err){
                                      console.log("发布本地音视频流失败：" + error);
                                  });

                                  client.on('stream-published', function(evt){
                                      console.log("发布本地音视频流成功"); 
                                  });
                              },
                              function(err){
                                  console.log("获取用户媒体失败", err);
                              }
                          );

                          //订阅远程视频
                          
                          //监听到新的视频
                          client.on('stream-added', function(evt){
                              var stream = evt.stream;
                              console.log("有新的音视频流：" + stream.getId());

                              client.subscribe(stream, function(err){
                                  console.log("订阅音视频流失败", err);
                              });
                          });

                          //订阅远端视频
                          client.on('stream-subscribed', function(evt){
                              var remoteStream = evt.stream;
                              console.log("订阅远程音视频流成功：", remoteStream.getId());
                              remoteStream.play('agora_video');                    //显示远程视频播放
                          });
                      },

                      function(err){
                          console.log("AgoraRTC client 初始化失败", err); 
                      }
                  );
              }
          )
    }
}
</script>
<style>

</style>
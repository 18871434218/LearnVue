<template>
  <div class="block">
    <el-timeline v-for="i in count" :key="i">
       <el-timeline-item>
           <el-card>
               <h4>{{updateData}}</h4>
               <p>{{notes}}</p>
           </el-card>
      </el-timeline-item> 
    </el-timeline>

    <!-- <el-timeline >
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>

      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>

      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline> -->
  </div>
</template>
<script>
export default {
    data(){
        return {
            data: [
                {note: '你是', updateData:'更新一版本'},
                {note: '你是', updateData:'更新一版本'},
                {note: '你是', updateData:'更新一版本'},
                {note: '你是', updateData:'更新一版本'}     
            ]
        }
    }
};
</script>
<style>
</style>
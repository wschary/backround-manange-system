<template>
  <div class="container">
    <!-- 筛选项 -->
    <el-card>
      <!-- 头部 -->
      <div slot="header">
        <my-bread>内容管理</my-bread>
      </div>
      <!-- 表单 -->
      <el-form label-width="80px" size="small">
        <el-form-item label="状态：">
          <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="reqParams.channel_id" placeholder="请选择">
            <el-option
              v-for="item in channelOptions"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <el-date-picker
            v-model="dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 筛选结果 -->
  </div>
</template>

<script>
import MyBread from '@/components/my-bread'
export default {
  components: { MyBread },
  data () {
    return {
      // 提交后台参数  值为null的时候  字段是不会发送给后台的。
      reqParams: {
        status: null,
        channel_id: null,
        begin_pubdate: null,
        end_pubdate: null
      },
      // 日期数据  0索引 起始时间 1索引  结束时间
      dateArr: [],
      // 频道选项数据
      channelOptions: [{ id: 100, name: 'java' }]
    }
  }
}
</script>

<style scoped lang='less'></style>

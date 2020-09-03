<template>
  <div class="small-12 columns padding-0">
    <div class="small-12 columns" style="background-color: white;padding-top: 3%;position: fixed;z-index: 2;">
      <img style="width: 5%;position: absolute;top: 35%;left: 6%;" src="#" alt="">
      <input class="search-input" type="text" placeholder="搜索课程或导师姓名"/>
    </div>

    <div class="landing-banner small-12 columns" style="position: relative;margin-top: 55px;">
      <div class="master-carousel project-carousel" style="padding-top: 10px;margin-bottom: 0;height: 190px;">
        <div>
          <img style="height: 168px;width: 100%;" src="#" alt="">
        </div>
        <div>
          <img style="height: 168px;width: 100%;" src="#" alt="">
        </div>
      </div>
    </div>

    <div class="small-12 columns padding-0" style="background-color: white;margin-bottom: 1rem;">
      <p class="small-title">
        <span>热门课程</span>
        <img class="arrow-image" src="#" alt="">
      </p>
      <div class="small-12 columns lesson-info">
        <img src="#" class="small-5 columns padding-right-0" alt=""/>
        <div class="small-7 columns">
          <p style="margin-bottom: 0;">答辩冲刺辅导丨以怎样的正确姿势和全国高手过招</p>
          <span>课程导师：许福吉博士 河洛学院创始人</span>
        </div>
      </div>
      <div class="small-12 columns lesson-info">
        <img src="#" class="small-5 columns padding-right-0" alt=""/>
        <div class="small-7 columns">
          <p style="margin-bottom: 0;">答辩冲刺辅导丨以怎样的正确姿势和全国高手过招</p>
          <span>课程导师：许福吉博士 河洛学院创始人</span>
        </div>
      </div>
      <div class="small-12 columns lesson-info" style="border-bottom: none;">
        <img src="#" class="small-5 columns padding-right-0" alt=""/>
        <div class="small-7 columns">
          <p style="margin-bottom: 0;">答辩冲刺辅导丨以怎样的正确姿势和全国高手过招</p>
          <span>课程导师：许福吉博士 河洛学院创始人</span>
        </div>
      </div>

      <p class="small-title">
        <span>推荐课程</span>
        <img class="arrow-image" src="#" alt="">
      </p>
      <div class="small-12 columns lesson-info">
        <img src="#" class="small-5 columns padding-right-0" alt=""/>
        <div class="small-7 columns">
          <p style="margin-bottom: 0;">答辩冲刺辅导丨以怎样的正确姿势和全国高手过招</p>
          <span>课程导师：许福吉博士 河洛学院创始人</span>
        </div>
      </div>
      <div class="small-12 columns lesson-info">
        <img src="#" class="small-5 columns padding-right-0" alt=""/>
        <div class="small-7 columns">
          <p style="margin-bottom: 0;">答辩冲刺辅导丨以怎样的正确姿势和全国高手过招</p>
          <span>课程导师：许福吉博士 河洛学院创始人</span>
        </div>
      </div>
      <div class="small-12 columns lesson-info">
        <img src="#" class="small-5 columns padding-right-0" alt=""/>
        <div class="small-7 columns">
          <p style="margin-bottom: 0;">答辩冲刺辅导丨以怎样的正确姿势和全国高手过招</p>
          <span>课程导师：许福吉博士 河洛学院创始人</span>
        </div>
      </div>
      <div class="small-12 columns lesson-info" style="border-bottom: none;">
        <img src="#" class="small-5 columns padding-right-0" alt=""/>
        <div class="small-7 columns">
          <p style="margin-bottom: 0;">答辩冲刺辅导丨以怎样的正确姿势和全国高手过招</p>
          <span>课程导师：许福吉博士 河洛学院创始人</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage'
}
</script>

<style scoped>
    #mainbody {
      overflow: auto;
      height: 100%;
      background-color: #f1f1f1;
      margin-bottom: 4rem;
    }

    .slick-dots {
      position: relative;
      top: -2rem;
    }

    .padding-0 {
      padding: 0;
    }

    .padding-right-0 {
      padding-right: 0;
    }

    .search-input {
      border-radius: 20px;
      height: 30px;
      background-color: #f1f1f1;
      padding-left: 35px;
      border: none;
      box-shadow: none;
      margin-bottom: 10px;
    }

    .small-title {
      color: #45a9f7;
      font-size: 14px;
      font-weight: bold;
      padding-left: 3%;
      padding-top: 5%;
      margin-bottom: 0;
    }

    .arrow-image {
      float: right;
      width: 3%;
      margin-right: 1rem;
      margin-bottom: 3%;
    }

    .lesson-info {
      border-bottom: 1px solid #e8e8e8;
      font-size: 14px;
      padding: 10px 0;
    }

    .lesson-info span {
      color: #bdbdbd;
      font-size: 12px;
    }
</style>

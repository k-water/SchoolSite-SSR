<template>
  <div id="Home">
    <el-row style="margin-top:10px" class="common-h">
      <el-carousel :interval="3000" trigger="click" height="400px" :autoplay="true">
        <el-carousel-item v-for="item in itemsImg" :key="item">
          <a href="javascript:;">
            <img :src=item alt="">
          </a>
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <el-row class="list-five"  type="flex" justify="space-around">
      <el-col :span="10">
        <ul class="list-ul">
          <li class="li-first">
            <span>五年制简介</span>
          </li>
          <li v-for="item in info.content" :key="item" @click="getArtId(item.id)">
            <router-link :to="'/college/article/' + item.id"> {{item.title}} </router-link>
            <span> {{item.postedTime}} </span>
          </li>
        </ul>
      </el-col>
      <el-col :span="10">
        <ul class="list-ul">
          <li class="li-first-more" @click="jump()">
            <span>更多</span>
          </li>
          <li v-for="item in moreInfo.content" :key="item" @click="getArtId(item.id)">
            <router-link :to="'/college/article/' + item.id"> {{item.title}} </router-link>
            <span> {{item.postedTime}} </span>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around" class="list-special">
       <el-col :span="7" v-for="item in specialList.content" :key="item">
         <section>
            <figure>
              <img :src=item.cover alt="" style="width: 291px; height: 229px">
              <figcaption> {{item.title}} </figcaption>
            </figure>
            <article>
              <p> {{removeHTMLTag(item.content)}} </p>
            </article>
            <div class="btn-more" @click="getDetailsID(item.id)">
              <router-link :to="'/profession/details/'+item.id">了解更多</router-link>
            </div>
         </section>
       </el-col>
    </el-row>
    <el-row class="common-h">
      <footer class="more-pro">
        <router-link to="/profession">
          <span>查看更多专业</span>
        </router-link>
      </footer>
    </el-row>
    <el-row type="flex" justify="space-around" class="info">
      <el-col :span="8">
        <ul class="list-ul">
          <li class="li-first">
            <span>就业信息</span>
          </li>
          <li v-for="item in jobInfo.content" :key="item" @click="getJobId(item.id)">
            <router-link :to="'/college/jobInfo/' + item.id"> {{item.title}} </router-link>
            <span> {{item.postedTime}} </span>
          </li>
        </ul>
      </el-col>
      <el-col :span="14">
        <ul class="list-ul">
          <li class="li-first">
            <span>校园风光</span>
          </li>
        </ul>
        <ul class="list-img">
          <li v-for="item in school" :key="item">
            <a href="javascript:;">
              <img :src=item.pic alt="">
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'Home',
    data(){
      return {
        itemsImg: [
          'https://oc1gyfe6q.qnssl.com/17-5-17/24136041-file_1495036544769_d310.jpg',
          'https://oc1gyfe6q.qnssl.com/17-5-14/47574767-file_1494772995459_ae61.jpg',
          'https://oc1gyfe6q.qnssl.com/17-5-17/99424986-file_1495036582082_15dc5.jpg'
        ],
        school: [
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-17/14862969-file_1495034664122_fe13.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-17/2855685-file_1495034664006_133ed.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-17/82724947-file_1495034663890_1135d.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-17/85097812-file_1495034663763_b389.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-17/79805456-file_1495034663651_b974.jpg'},
          {pic: 'https://oc1gyfe6q.qnssl.com/17-5-17/26981023-file_1495034663538_15309.jpg'}
        ]
      }
    },
    created() {
      // 专业列表
      this.getProfessionList({
        page: 0,
        size: 3,
        type: 1
      })
      // 五年制大专左
      this.getInfoFive({
        page: 0,
        size: 3,
        type: 1
      })
      // 五年制大专右
      this.getMoreInfo({
        page: 1,
        size: 3,
        type: 1
      }),
      // 就业信息
      this.getJobInfo({
        page: 0,
        size: 5,
        type: 2
      })
    },
    computed: {
      ...mapGetters(['specialList','pageId', 'info', 'moreInfo', 'artId', 'jobInfo'])
    },
    methods: {
      ...mapActions(['getProfessionList','getDetailsID', 'getInfoFive', 'getMoreInfo', 'getArtId', 'getJobInfo', 'getJobId']),
      removeHTMLTag(str) {
        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
        str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
        str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
        str=str.replace(/\s/g,''); //将空格去掉
        return str;
      },
      jump() {
        this.$router.push({
          name: 'College'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
    min-width: 100%;
  }
  
  .list-five {
    margin: 30px auto auto auto;
    display: flex;
    justify-content: space-between;
    width: 1000px;
    .list-ul {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      li {
        display: block;
        height: 45px;
        line-height: 45px;
        padding: 5px;
      }
      .li-first {
        border-bottom: 1px solid #ddd;
        span {
          color: #1e50ae;
          font: 20px/150% 'Microsoft YaHei';
          position: relative;
          padding-left: 10px;
          &:before {
            content: "|";
            position: absolute;
            font-weight: 800;
            top: -2px;
            left: -5px;
          }
        }
      }
      .li-first-more {
        border-bottom: 1px solid #ddd !important;
        cursor: pointer;
        span {
          color: #1e50ae !important;
          font: 20px/150% 'Microsoft YaHei';
          position: relative;
          cursor: pointer;
          text-align: left !important;
          &:after {
            content: ">>";
            position: absolute;
            font-weight: 800;
            top: 0px;
          }
        }
      }
      li:not(.li-first) {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #ddd;
        span {
          display: block;
          color: #666;
          height: 36px;
          line-height: 36px;
          text-align: right;
          width: 20%;
        }
        a {
          width: 70%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          color: #666;
          height: 36px;
          line-height: 36px;
          &:hover {
            color: #e01f19 !important;
            cursor: pointer;
          }
        }
      }
    }
  }
  
  .list-special {
    margin: 30px auto auto auto;
    width: 1000px;
    word-wrap: break-word;
    word-break: break-all;
    figure {
      figcaption {
        padding: 8px 0 0 5px;
        font-family: "Microsoft YaHei";
        font-size: 14px;
        line-height: 32px;
        color: rgb(225, 3, 18);
      }
    }
    article {
      p {
        font-family: "Microsoft YaHei";
        font-size: 14px;
        color: rgb(166, 165, 165);
        padding: 0 0 0 5px;
        position: relative;
        line-height: 1.8em;
        /* 3 times the line-height to show 3 lines */
        height: 5.4em;
        overflow: hidden;
      }
      p::after {
        content: "..";
        font-weight: bold;
        position: absolute;
        bottom: 0;
        right: -1px;
      }
    }
    .btn-more {
      padding: 8px 0 0 5px;
      a {
        font-family: "Microsoft YaHei";
        border: 1px solid #a9a9a9;
        background: transparent;
        height: 34px;
        line-height: 34px;
        color: #a9a9a9;
        border-radius: 5px;
        padding: 8px 25px 8px 25px;
      }
    }
  }
  
  .info {
    margin: 30px auto auto auto;
    width: 1000px;
    .list-ul {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      li {
        display: block;
        height: 45px;
        line-height: 45px;
        padding: 5px;
      }
      .li-first {
        border-bottom: 1px solid #ddd;
        span {
          color: #1e50ae;
          font: 20px/150% 'Microsoft YaHei';
          position: relative;
          padding-left: 10px;
          &:before {
            content: "|";
            position: absolute;
            font-weight: 800;
            top: -2px;
            left: -5px;
          }
        }
      }
      li:not(.li-first) {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #ddd;
        span {
          display: block;
          color: #666;
          height: 36px;
          line-height: 36px;
          width: 30%;
          text-align: right;
        }
        a {
          width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          color: #666;
          height: 36px;
          line-height: 36px;
          &:hover {
            color: #e01f19 !important;
            cursor: pointer;
          }
        }
      }
    }
    .list-img {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      height: 236px;
      li {
        width: 33.3333%;
        height: 112px;
      }
    }
  }
  
  .more-pro {
    text-align: center;
    span {
      font-size: 14px;
      color: gray;
    }
  }
  
  .el-col {
    border-radius: 4px;
  }
</style>
<template>
  <div id="setting">
    <h2 style="color: #188ffd">*面试官微信号</h2>
    <a-select mode="tags" style="width: 100%" @change="handleChange" placeholder="输入微信ID"></a-select>
    <h2 id="title">*面试轮次</h2>
    <a-radio-group @change="demo" defaultValue="1" buttonStyle="solid" id="radio_group">
      <a-radio-button value="1">一轮</a-radio-button>
      <a-radio-button value="2">二轮</a-radio-button>
    </a-radio-group>

    <h2 id="title">*评价参数</h2>
    <div id="checkBox">
      <div>
        <a-checkbox @change="onCheckAllChange" :checked="checkAll">Check all</a-checkbox>
      </div>
      <br />
      <a-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange" />
      <a-select mode="tags" style="width: 17%" @change="handleChange_2" placeholder="自定义评价参数,按回车确认"></a-select>
    </div>
    <a-divider />
    <div id="button">
      <a-button size="large">查看二维码</a-button>
      <a-button size="large" type="primary" @click="submit">修改/确认</a-button>
    </div>
  </div>
</template>
<script>
const plainOptions = ["性格", "礼貌", "技术水平"];
const defaultCheckedList = ["性格"];

export default {
  data() {
    return {
      defaultWeChat: [],
      checkedList: defaultCheckedList,
      checkAll: false,
      plainOptions,
      valueLength: 0,
      watchedValue: [],
      turns: 0
    };
  },
  watch: {
    watchedValue: {
      handler(newVal, oldVal) {
        this.plainOptions = this.plainOptions.slice(0, 3).concat(newVal);
        if (oldVal.length < newVal.length) {
          if ((this.checkAll = true)) {
            this.checkAll = false;
          }
        } else {
          oldVal.forEach(item => {
            if (newVal.indexOf(item) === -1) {
              let index = this.checkedList.indexOf(item);
              this.checkedList.splice(index, 1);
            }
          });
        }
      },
      deep: true
    }
  },
  methods: {
    handleChange(value) {
      this.defaultWeChat = value.slice(0);
    },
    handleChange_2(value) {
      this.watchedValue = value;
    },
    onChange() {
      this.checkAll = this.checkedList.length === this.plainOptions.length;
    },
    demo(e) {
      this.turns = e.target.value;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? this.plainOptions : [],
        checkAll: e.target.checked
      });
    },

    submit() {
      if (this.defaultWeChat.length === 0 || this.checkedList.length === 0) {
        this.$notification.open({
          message: "消息提示",
          description: "微信号/评价参数不能为空",
          icon: <a-icon type="stop" />,
          duration: 2
        });
      } else {
        const msg = {
          weChat: this.defaultWeChat,
          turns: this.turns,
          params: this.checkedList
        };
        console.log(msg);
        this.$notification.open({
          message: "消息提示",
          description: "成功修改",
          icon: <a-icon type="smile" style="color: #108ee9" />,
          duration: 2
        });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
#select
  margin: 20px 0
#title
  margin-top: 30px
  color: #188ffd
#radio_group
  margin-bottom: 15px
#button
  display: flex
  flex-direction: row
  justify-content: space-around
</style>
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "fighting for 408",
    children: [
      {
        text: "数据结构",
        children: ["线性表", "树", "图"],
      },
      {
        text: "计算机网络",
        children: [
          "概述",
          "应用层",
          "传输层",
          "网络层",
          "数据链路层",
          "物理层",
        ],
      },
      {
        text: "计算机组成原理",
        prefix: "/posts/computer-architecture/",
        children: [
          "信息的表示和处理",
          { text: "处理器", link: "processor" },
          { text: "存储器", link: "memory-hierarchy" },
        ],
      },
      {
        text: "操作系统",
        children: ["概述", "进程管理", "内存管理", "文件管理", "I/O管理"],
      },
    ],
  },
]);

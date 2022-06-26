# Telper

> 你是否还在为起变量名而烦恼？不想窗口切来切去，拒绝臃肿的窗口程序，使用`telper`翻译工具，将撸码变成一种享受。
>
> `telper`是一款运行在终端的翻译软件，它将在你coding时祝你一臂之力。

![Peek 2022-06-26 14-03](https://tvax3.sinaimg.cn/large/0087ufIQgy1h3lm1b4a2dg30wp0mpk43.gif)

### 一、安装：

- 软件的开发环境依赖于`node v16.15.1`
- 请使用`16.15.1`版本运行该程序

使用`npm`包管理工具进行全局安装：

``` shell
npm install telper -g 
```

### 二、使用：

1. 翻译文字，`tp <message>`，支持多语言翻译，多国语言自动识别，开箱即用。

``` shell
➜  telper git:(main) ✗ tp promise
✔ 查询成功：

promise: v. 承诺，保证；使很可能，预示；指望，期待（promoise oneself）；<古>把（某人，尤...
promised: 预示 | 答应
promises: v. 允诺 | n. 承诺，诺言
```

2. 如果你希望使用英转中，并且语句中存在空格，那么则需要将该语句用`""`或者`''`包裹起来：

   ![Peek 2022-06-26 14-54](https://tva1.sinaimg.cn/large/0087ufIQgy1h3lnhmihneg30wp0fljx5.gif)

3. 查看帮助：

``` shell
➜  telper git:(main) ✗ tp -h  
Usage: tp [options] <message>

Arguments:
  message        需要翻译的信息

Options:
  -v, --version  打印版本号
  -h, --help     帮助信息
```

4. 你还可以使用完整的指令：`telp` 来完成以上所有操作，`tp`指令为完整指令的语法糖，如果你的终端有指令与之冲突，那么建议你使用完整指令。

``` shell
➜  telper git:(main) ✗ telp 代码        
✔ 查询成功：

代码: code | word
代码重构: code refactoring
代码片段: code snippet
```

### 三、关于：

1. 词典数据来源-有道词典
2. 翻译数据来源-百度翻译

### 四、归档：

- v0.0.1（2022/6/26）：
  1. 接入有道词典，实现字典查询
  2. 接入百度翻译，实现语句翻译
  3. 查询结果着色
  4. 查询过程展示加载动画效果

*如果你觉得本工具有帮助到你，就留下一个star吧～～本项目开源，欢迎一起学习交流*
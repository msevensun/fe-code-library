网址：http://cn.vuejs.org/v2/guide/

github: https://github.com/vuejs/vue

介绍

Vue.js 是什么

Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用。
Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架。
起步

官方指南假设你已有 HTML、CSS 和 JavaScript 中级前端知识。如果你是全新的前端开发者，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来！之前有其他框架的使用经验是有帮助的，但不是必需的。

尝试 Vue.js 最简单的方法是使用 JSFiddle Hello World 例子。你可以在浏览器新标签页中打开它，跟着我们学习一些基础示例。或者你也可以创建一个本地的 .html 文件，然后通过如下方式引入 Vue:

<script src="https://unpkg.com/vue/dist/vue.js"></script>

你可以查看安装指南来了解其他安装 Vue 的选项。请注意我们不推荐新手直接使用 vue-cli，尤其是对 Node.js 构建工具不够了解的同学。
声明式渲染

Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统：

<div id="app">

  {{ message }}

</div>

var app = new Vue({

  el: '#app',

  data: {

    message: 'Hello Vue!'

  }

})

Hello Vue!

我们已经生成了我们的第一个 Vue 应用！看起来这跟单单渲染一个字符串模板非常类似，但是 Vue.js 在背后做了大量工作。现在数据和 DOM 已经被绑定在一起，所有的元素都是响应式的。我们如何知道？打开你的浏览器的控制台，并修改 app.message，你将看到上例相应地更新。
除了绑定插入的文本内容，我们还可以采用这样的方式绑定 DOM 元素属性：

<div id="app-2">

  <span v-bind:title="message">

    Hover your mouse over me for a few seconds to see my dynamically bound title!

  </span>

</div>

var app2 = new Vue({

  el: '#app-2',

  data: {

    message: 'You loaded this page on ' + new Date()

  }

})

Hover your mouse over me for a few seconds to see my dynamically bound title!

这里我们遇到点新东西。你看到的 v-bind 属性被称为指令。指令带有前缀 v-，以表示它们是 Vue.js 提供的特殊属性。可能你已经猜到了，它们会在渲染过的 DOM 上应用特殊的响应式行为。这个指令的简单含义是说：将这个元素节点的 title 属性和 Vue 实例的 message 属性绑定到一起。
你再次打开浏览器的控制台输入 app2.message = 'some new message'，你就会再一次看到这个绑定了title属性的HTML已经进行了更新。
条件与循环

控制切换一个元素的显示也相当简单：

<div id="app-3">

  <p v-if="seen">Now you see me</p>

</div>

var app3 = new Vue({

  el: '#app-3',

  data: {

    seen: true

  }

})

Now you see me

继续在控制台设置 app3.seen = false，你会发现 “Now you see me” 消失了。
这个例子演示了我们不仅可以绑定 DOM 文本到数据，也可以绑定 DOM 结构到数据。而且，Vue.js 也提供一个强大的过渡效果系统，可以在 Vue 插入/删除元素时自动应用过渡效果。
也有一些其它指令，每个都有特殊的功能。例如， v-for 指令可以绑定数据到数组来渲染一个列表：

<div id="app-4">

  <ol>

    <li v-for="todo in todos">

      {{ todo.text }}

    </li>

  </ol>

</div>

var app4 = new Vue({

  el: '#app-4',

  data: {

    todos: [

      { text: 'Learn JavaScript' },

      { text: 'Learn Vue' },

      { text: 'Build something awesome' }

    ]

  }

})

Learn JavaScript

Learn Vue

Build something awesome

在控制台里，输入 app4.todos.push({ text: 'New item' })。你会发现列表中多了一栏新内容。
处理用户输入

为了让用户和你的应用进行互动，我们可以用 v-on 指令绑定一个监听事件用于调用我们 Vue 实例中定义的方法：

<div id="app-5">

  <p>{{ message }}</p>

  <button v-on:click="reverseMessage">Reverse Message</button>

</div>

var app5 = new Vue({

  el: '#app-5',

  data: {

    message: 'Hello Vue.js!'

  },

  methods: {

    reverseMessage: function () {

      this.message = this.message.split('').reverse().join('')

    }

  }

})

Hello Vue.js!

Reverse Message

在 reverseMessage 方法中，我们在没有接触 DOM 的情况下更新了应用的状态 - 所有的 DOM 操作都由 Vue 来处理，你写的代码只需要关注基本逻辑。
Vue 也提供了 v-model 指令，它使得在表单输入和应用状态中做双向数据绑定变得非常轻巧。

<div id="app-6">

  <p>{{ message }}</p>

  <input v-model="message">

</div>

var app6 = new Vue({

  el: '#app-6',

  data: {

    message: 'Hello Vue!'

  }

})

Hello Vue!

Hello Vue!
用组件构建（应用）

组件系统是 Vue.js 另一个重要概念，因为它提供了一种抽象，让我们可以用独立可复用的小组件来构建大型应用。如果我们考虑到这点，几乎任意类型的应用的界面都可以抽象为一个组件树：
Component Tree
在 Vue 里，一个组件实质上是一个拥有预定义选项的一个 Vue 实例：

// Define a new component called todo-item

Vue.component('todo-item', {

  template: '<li>This is a todo</li>'

})

现在你可以在另一个组件模板中写入它：

<ol>

  <!-- Create an instance of the todo-item component -->

  <todo-item></todo-item>

</ol>

但是这样会为每个 todo 渲染同样的文本，这看起来并不是很酷。我们应该将数据从父作用域传到子组件。让我们来修改一下组件的定义，使得它能够接受一个 prop 字段：

Vue.component('todo-item', {

  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.

  props: ['todo'],

  template: '<li>{{ todo.text }}</li>'

})
现在，我们可以使用 v-bind 指令将 todo 传到每一个重复的组件中：

<div id="app-7">

  <ol>

    <!-- Now we provide each todo-item with the todo object    -->
    <!-- it's representing, so that its content can be dynamic -->

    <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>

  </ol>

</div>

Vue.component('todo-item', {

  props: ['todo'],

  template: '<li>{{ todo.text }}</li>'

})

var app7 = new Vue({

  el: '#app-7',

  data: {

    groceryList: [

      { text: 'Vegetables' },

      { text: 'Cheese' },

      { text: 'Whatever else humans are supposed to eat' }

    ]

  }

})

Vegetables

Cheese

Whatever else humans are supposed to eat

这只是一个假设的例子，但是我们已经将应用分割成了两个更小的单元，子元素通过 props 接口实现了与父亲元素很好的解耦。我们现在可以在不影响到父应用的基础上，进一步为我们的 todo 组件改进更多复杂的模板和逻辑。
在一个大型应用中，为了使得开发过程可控，有必要将应用整体分割成一个个的组件。在后面的教程中我们将详述组件，不过这里有一个（假想）的例子，看看使用了组件的应用模板是什么样的：

<div id="app">

  <app-nav></app-nav>

  <app-view>

    <app-sidebar></app-sidebar>

    <app-content></app-content>

  </app-view>

</div>

与自定义元素的关系

你可能已经注意到 Vue.js 组件非常类似于自定义元素——它是 Web 组件规范的一部分。实际上 Vue.js 的组件语法参考了该规范。例如 Vue 组件实现了 Slot API 与 is 特性。但是，有几个关键的不同：
Web 组件规范仍然远未完成，并且没有浏览器实现。相比之下，Vue.js 组件不需要任何补丁，并且在所有支持的浏览器（IE9 及更高版本）之下表现一致。必要时，Vue.js 组件也可以放在原生自定义元素之内。
Vue.js 组件提供了原生自定义元素所不具备的一些重要功能，比如组件间的数据流，自定义事件系统，以及动态的、带特效的组件替换。
准备好探索更广阔的世界了？

我们刚才简单介绍了 Vue.js 核心的一些最基本的特征 - 本指南的其余部分将用更详尽的篇幅去描述其他的一些高级特性，所以一定要阅读完所有的内容哦！

详细了解请点击这里： http://cn.vuejs.org/v2/guide/


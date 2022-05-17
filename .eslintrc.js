module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        //开启setup语法糖环境
        "vue/setup-compiler-macros":true
    },
    //新增，解析vue文件
    "parser":"vue-eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended" // 可共享配置的名称、eslint:recommended 或 eslint:all,表示默认开启一些内置的规则，包含的，在 https://eslint.bootcss.com/docs/rules/ 中可以查看内置规则
    ],
    "parserOptions": {
        "ecmaVersion": "latest",// 指定你想要使用的 ECMAScript 版本
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"//"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {// 配置规则的地方 这里就是我们所需要配置的规则
      "vue/multi-word-component-names":"off"
    }
}

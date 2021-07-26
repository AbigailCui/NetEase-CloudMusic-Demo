module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    //babel-plugin-import是一款babel插件,在编译过程中将import的写法自动转换成按需引入的方式
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}
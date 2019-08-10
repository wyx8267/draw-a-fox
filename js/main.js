!function () {
    var duration = 40

    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 70
                break
            case 'normal':
                duration = 40
                break
            case 'fast':
                duration = 10
                break
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = prefix + code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration);
    }
    let code = `
/*
* 让我们来画一只狐狸
* 首先给它一片森林
*/
.preview-wrapper {
    background-color: rgb(114, 147, 118);
}

.preview {
    width: 500px;
    height: 420px;
    position: relative;
}

/*
* 画出脑袋及脸颊边的毛
*/

.fox-head-outer {
    width: 0;
    height: 0;
    border-left: 155px solid transparent;
    border-right: 155px solid transparent;
    border-top: 150px solid rgb(233, 218, 194);
    border-top-left-radius: 65%;
    border-top-right-radius: 65%;
    left: 65px;
    top: 100px;
    position: absolute;
}

.fox-cheeks {
    position: absolute;
    background-color: rgb(233, 218, 194);
    width: 165px;
    height: 165px;
    transform: rotate(45deg);
    border-top-left-radius: 80%;
    border-bottom-right-radius: 90%;
    top: 80px;
    left: 137px;
}

.fox-head {
    border-left: 120px solid transparent;
    border-right: 120px solid transparent;
    border-top: 150px solid rgb(212, 88, 42);
    border-radius: 50%;
    left: 100px;
    top: 100px;
    position: absolute;
}

/*
* 添三个黑点作为眼睛和鼻子
*/

.eye {
    width: 15px;
    height: 15px;
    background-color: rgb(70, 62, 55);
    border-radius: 100%;
    position: absolute;
    top: 180px;
}

.eye.left-eye {
    left: 155px;
}

.eye.right-eye {
    left: 270px;
}

.nose {
    width: 15px;
    height: 15px;
    background-color: rgb(70, 62, 55);
    border-radius: 100%;
    position: absolute;
    top: 240px;
    left: 213px;
}

/*
* 画上尖耳朵
*/

.ear {
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 70px solid rgb(212, 88, 42);
    border-radius: 50%;
    top: 63px;
    position: absolute;
}

.ear.left {
    left: 110px;
    transform: rotate(-70deg);
}

.ear.right {
    left: 230px;
    transform: rotate(70deg);
}

.inner-ear {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 30px solid rgb(178, 66, 31);
    border-radius: 50%;
    position: absolute;
    top: 93px;
}

.inner-ear.left {
    left: 135px;
    transform: rotate(-70deg);
}

.inner-ear.right {
    left: 265px;
    transform: rotate(70deg);
}

/*
* 来一撮胸毛！
*/

.neck {
    width: 160px;
    height: 160px;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    background-color: rgb(224, 204, 169);
    transform: rotate(-225deg);
    position: absolute;
    top: 120px;
    left: 140px;
}

/*
* 装一个圆润的身体
*/

.body {
    width: 192px;
    height: 192px;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    background-color: #BD3C1C;
    transform: rotate(-45deg);
    position: absolute;
    top: 200px;
    left: 125px;
}

/*
* 狐狸爪爪~
*/

.leg {
    border: 20px solid rgb(212, 88, 42);
    width: 6em;
    height: 12em;
    border-radius: 50%;
    border-bottom-color: transparent;
    border-top-color: transparent;
    top: 230px;
    position: absolute;
}

.left.leg {
    border-right-color: transparent;
    left: 155px;
}

.right.leg {
    border-left-color: transparent;
    left: 190px;
}

.paw {
    width: 15px;
    height: 23px;
    background-color: rgb(70, 62, 55);
    position: absolute;
    top: 380px;
    border-top-left-radius: 80%;
    border-bottom-right-radius: 90%;
}

.left-paw .paw-left {
    transform: rotate(120deg);
    left: 163px;
}

.left-paw .paw-center {
    transform: rotate(135deg);
    left: 169px;
}

.left-paw .paw-right {
    transform: rotate(165deg);
    left: 175px;
}

.right-paw .paw-left {
    transform: rotate(120deg);
    left: 253px;
}

.right-paw .paw-center {
    transform: rotate(135deg);
    left: 259px;
}

.right-paw .paw-right {
    transform: rotate(165deg);
    left: 265px;
}

/*
* 最后来一条大尾巴
*/

.tail {
    position: absolute;
    z-index: -1;
    background-color: rgb(175, 51, 18);
    width: 280px;
    height: 170px;
    transform: rotate(0deg);
    border-top-left-radius: 80%;
    border-bottom-right-radius: 90%;
    transform: skewY(-30deg) skewX(30deg) rotate(-10deg);
    transform-origin: bottom right;
    left: 150px;
    top: -60px;
}

.tail-fur {
    width: 20px;
    height: 30px;
    background-color: rgb(224, 204, 169);
    border-top-left-radius: 80%;
    border-bottom-right-radius: 90%;
    position: absolute;
}

.tail-fur.left {
    transform: rotate(58deg);
    top: -13px;
    left: 252px;
}

.tail-fur.center {
    transform: rotate(20deg);
    top: -5px;
    left: 255px;
}

.tail-fur.right {
    transform: rotate(-12deg);
    top: 2px;
    left: 264px;
}

/*
* What does the fox say ~
*/
`
    writeCode('', code)
}.call()
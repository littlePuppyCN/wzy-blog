<template>
    <Layout :style="{ 'height': '500px' }" :bg="'friends'">
        <template #content>
            <canvas width="1200" height="600" ref="canvas"></canvas>
        </template>
    </Layout>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import Layout from './Layout.vue';
const canvas = ref()

class KeyListener {
    constructor() {
        this.pressedKeys = []
        this.init()
    }
    keydown(e) {
        this.pressedKeys[e.keyCode] = true
    }
    keyup(e) {
        this.pressedKeys[e.keyCode] = false
    }
    init() {
        document.addEventListener('keydown', this.keydown.bind(this))
        document.addEventListener('keyup', this.keyup.bind(this))
    }
    exit(){
        document.removeEventListener('keydown')
        document.removeEventListener('keyup')
    }
}

KeyListener.prototype.isPressed = function (key) {
    return this.pressedKeys[key] ? true : false;
}
KeyListener.prototype.addKeyPressListener = function (keyCode, callback) {
    document.addEventListener("keypress", function (e) {
        if (e.keyCode == keyCode) callback(e);
    })
}

class Game {
    constructor() {
        this.width = 1200
        this.height = 600
        this.ctx = canvas.value.getContext('2d')
        this.brickWidth = this.width / 10 - 2.25
        this.colors = ["#18582b", "#0c905d", "#00c78e", "#33dbff", "#3375ff", "#5733ff"]
        this.ball = {
            x: this.width / 2 - 3,
            y: this.height / 2 - 3,
            radius: 6,
            speedX: 0,
            speedY: 6
        }
        this.paddle1 = {
            w: 100,
            h: 10,
            x: this.width / 2 - 100 / 2,
            y: this.height - 10,
            speed: 6
        }
        this.bricks = [],
            this.bonuses = [],
            this.ballOn = false,
            this.color = undefined,
            this.gameOver = 0
        this.keys = new KeyListener()
        this.createBricks()
    }

    // 生成奖励
    createBonus(brick) {
        let chance = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        if (chance === 1) {
            let randomNum = Math.floor(Math.random() * (4 - 1 + 1) + 1)
            let bonus = {
                x: brick.x + brick.w / 2 - 5,
                y: brick.y,
                w: 10,
                h: 10,
                type: randomNum
            }
            this.bonuses.push(bonus)
        }
    }

    // 生成砖块
    createBricks() {
        let brickX = 2, brickY = 10, j = 0, a = 0
        for (let i = 0; i < 60; i++) {
            let brick = {
                x: brickX,
                y: brickY,
                w: this.brickWidth,
                h: 10,
                color: this.colors[j]
            }
            this.bricks.push(brick)
            brickX += this.brickWidth + 2
            if (brickX + this.brickWidth + 2 > this.width) {
                brickY += 12
                brickX = 2
                j++
            }
        }
    }
    // 检查碰撞
    checkCollision(obj1, obj2) {
        if (obj1 != this.ball) {
            if (obj1.y >= obj2.y && obj1.y <= obj2.y + obj2.h && obj1.x >= obj2.x && obj1.x <= obj2.x + obj2.w) {
                return true
            }
        } else {
            if (obj1.y + obj1.radius >= obj2.y && obj1.y - obj1.radius <= obj2.y + obj2.h && obj1.x - obj1.radius >= obj2.x && obj1.x + obj1.radius <= obj2.x + obj2.w) {
                return true
            }
        }
    }
    // 球碰撞销毁砖块
    destroyBrick() {
        for (let i = 0; i < this.bricks.length; i++) {
            if (this.checkCollision(this.ball, this.bricks[i])) {
                this.ball.speedY = - this.ball.speedY
                this.createBonus(this.bricks[i])
                this.bricks.splice(i, 1)
            }
        }
    }
    // 开启新游戏
    newGame() {
        this.bricks = []
        this.bonuses = []
        this.createBricks()
        // this.ball.x = this.width / 2 - 3
        // this.ball.y = this.height / 2 - 3
        // this.ball.speedX = 0
        this.ballOn = false
        this.ball = {
            x: this.width / 2 - 3,
            y: this.height / 2 - 3,
            radius: 6,
            speedX: 0,
            speedY: 6
        }
        this.paddle1 = {
            w: 100,
            h: 10,
            x: this.width / 2 - 100 / 2,
            y: this.height - 10,
            speed: 6
        }
    }

    // 绘制canvas
    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.fillStyle = '#333'
        this.ctx.fillRect(0, 0, this.width, this.height)
        // paddle
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(this.paddle1.x, this.paddle1.y, this.paddle1.w, this.paddle1.h)

        if (this.ballOn === false) {
            this.ctx.font = "14px Roboto Mono";
            this.ctx.textAlign = "center";
            this.ctx.fillText("按下空格键开启新游戏", this.width / 2, this.height / 2 - 25);
            this.ctx.font = "12px Roboto Mono";
            this.ctx.fillText("使用 A & D 或者 方向键 进行移动.", this.width / 2, this.height / 2 + 25);
            if (this.gameOver === 1) {
                this.ctx.font = "52px Roboto Mono";
                this.ctx.fillText("你挂了", this.width / 2, this.height / 2 - 90);
                this.ctx.font = "36px Roboto Mono";
                this.ctx.fillText("继续努力", this.width / 2, this.height / 2 - 50);
            } else if (this.gameOver === 2) {
                this.ctx.font = "52px Roboto Mono";
                this.ctx.fillText("你赢了!", this.width / 2, this.height / 2 - 90);
                this.ctx.font = "36px Roboto Mono";
                this.ctx.fillText("恭喜!", this.width / 2, this.height / 2 - 50);
            }
        }

        // 球
        this.ctx.beginPath()
        this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2)
        this.ctx.fill()

        // 砖块
        for (let i = 0; i < this.bricks.length; i++) {
            this.ctx.fillStyle = this.bricks[i].color
            this.ctx.fillRect(this.bricks[i].x, this.bricks[i].y, this.bricks[i].w, this.bricks[i].h)
        }

        for (let i = 0; i < this.bonuses.length; i++) {
            // 缩小平台
            if (this.bonuses[i].type === 1) {
                let color = '#c0392b'
                this.ctx.fillStyle = color
                this.ctx.fillRect(this.bonuses[i].x, this.bonuses[i].y, this.bonuses[i].w, this.bonuses[i].h)
            }   // 扩大平台
            else if (this.bonuses[i].type === 2) {
                let color = '#27ae60'
                this.ctx.fillStyle = color
                this.ctx.fillRect(this.bonuses[i].x - this.bonuses[i].w / 2, this.bonuses[i].y, this.bonuses[i].w * 2, this.bonuses[i].h)
            } // 球速度 --
            else if (this.bonuses[i].type === 3) {
                let color = '#2980b9'
                this.ctx.fillStyle = color
                this.ctx.beginPath()
                this.ctx.arc(this.bonuses[i].x, this.bonuses[i].y, this.ball.radius - 2, 0, Math.PI * 2)
                this.ctx.fill()
            } // 球速度 ++
            else {
                let color = '#f1c40f'
                this.ctx.fillStyle = color
                this.ctx.beginPath()
                this.ctx.arc(this.bonuses[i].x, this.bonuses[i].y, this.ball.radius + 2, 0, Math.PI * 2)
                this.ctx.fill()
            }
        }
    }

    move() {
        // 接到奖励
        for (var i = 0; i < this.bonuses.length; i++) {
            this.bonuses[i].y += 4;
            if (this.checkCollision(this.bonuses[i], this.paddle1)) {
                if (this.bonuses[i].type === 1) {
                    this.paddle1.w -= 10;
                } else if (this.bonuses[i].type === 2) {
                    this.paddle1.w += 10;
                } else if (this.bonuses[i].type === 3) {
                    this.ball.radius -= 1;
                } else {
                    this.ball.radius += 1;
                }
                this.bonuses.splice(i, 1);
                return;
            }
            if (this.bonuses[i].y > this.height) {
                this.bonuses.splice(i, 1);
            }
        }

        // 移动平台
        if ((this.keys.isPressed(65) || this.keys.isPressed(37)) && this.paddle1.x > 0) {
            // 左
            this.paddle1.x -= this.paddle1.speed
        } else if ((this.keys.isPressed(68) || this.keys.isPressed(39)) && this.paddle1.x + this.paddle1.w < this.width) {
            // 右
            this.paddle1.x += this.paddle1.speed
        }

        // 开始球在平台上
        if (this.keys.isPressed(32) && this.ballOn === false) {
            
            this.ballOn = true
            this.gameOver = 0
        }

        // 球移动
        if (this.ballOn === true) {
            this.ball.x += this.ball.speedX
            this.ball.y += this.ball.speedY

            if (this.ball.y <= 0) {
                this.ball.speedY = - this.ball.speedY
            }

            // 检测球撞到平台
            if (this.ball.y + this.ball.radius >= this.paddle1.y && this.ball.x - this.ball.radius >= this.paddle1.x && this.ball.x + this.ball.radius <= this.paddle1.x + this.paddle1.w) {
                this.ball.speedY = -this.ball.speedY
                let deltaX = this.ball.x - (this.paddle1.x + this.paddle1.w / 2)
                this.ball.speedX = deltaX * 0.15
            }

            // 检测球撞到左右墙
            if (this.ball.x >= this.width || this.ball.x <= 0) {
                this.ball.speedX = - this.ball.speedX
            }

            // 输
            if (this.ball.y > this.height) {
                this.gameOver = 1
                this.newGame()
            }
            this.destroyBrick()
            // 赢
            if (this.bricks.length < 1) {
                this.gameOver = 2
                this.newGame()
            }
        }
    }

    loop() {
        this.move()
        this.draw()
        requestAnimationFrame(this.loop.bind(this))
    }

    init() {
        requestAnimationFrame(this.loop.bind(this))
    }
}

onMounted(() => {
    const g = new Game()
    setTimeout(() => {
        g.init()
    })
})

</script>
  
<style scoped></style>
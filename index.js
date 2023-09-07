const BTN1 = document.querySelector('#btn1')
        const BTN2 = document.querySelector('#btn2')
        const BTN3 = document.querySelector('.btn2')
        const ROUND = document.querySelector('.round')
        const MYWIN = document.querySelector('.my_win')
        const MESSIWIN = document.querySelector('.messi_win')
        const DIALOG = document.querySelector('#select-dialog')
        const SELECT_GESTURE = document.querySelector("#gesture-select")
        const RESULT = document.querySelector(".result")
        const TOTLEROUND = 3
        let sumRound = 0

        const GESTURE = {
            "rock": "./images/rock.png",
            "paper": "./images/paper.png",
            "scissor": "./images/scissor.png",
        }
        const GESTURE_ARR = ["rock", "paper", "scissor"]
        BTN1.addEventListener("click", function () {
            sumRound += 1
            ROUND.innerText = `第${sumRound}回合（共${TOTLEROUND}回合）`
            imgNub = parseInt(Math.random() * 3)
            messiGes = GESTURE_ARR[imgNub]
            myGesture = SELECT_GESTURE.value
            displayImg(myGesture, messiGes)
            let resStr = judgeWhoWin(myGesture, messiGes)
            RESULT.innerText = resStr
            console.log(myWinRound, messiWinRound);
            MYWIN.innerText = `胜：${myWinRound} | 负 ：${messiWinRound}`
            MESSIWIN.innerText = `胜：${messiWinRound} | 负 ：${myWinRound}`
            if (myWinRound == 2) {
                BTN3.innerText = "(≧v≦)o~~好棒，恭喜你获得胜利！"
            }else if (messiWinRound == 2){
                BTN3.innerText = "恭喜梅西获得胜利！"
            }
            if(sumRound == TOTLEROUND){
                if(myWinRound > messiWinRound){
                    BTN3.innerText = "(≧v≦)o~~好棒，恭喜你获得胜利！"
                }else if (myWinRound < messiWinRound){
                    BTN3.innerText = "恭喜梅西获得胜利！"
                }else{
                    BTN3.innerText = "不错嘛，平局了!"
                }
            }
            DIALOG.close()
        })
        BTN2.addEventListener("click", function () {
            DIALOG.showModal()
        })
        function displayImg(my_gesture, messi_gesture) {
            const LEFT = document.querySelector('.left .gesture')
            const RIGHT = document.querySelector('.right .gesture')
            let imgUrl = GESTURE[my_gesture]
            RIGHT.innerHTML = `<img src=${imgUrl} alt="">`
            messiUrl = GESTURE[messi_gesture]
            LEFT.innerHTML = `<img src=${messiUrl} alt="">`
        }
        let myWinRound = 0
        let messiWinRound = 0
        function judgeWhoWin(my_gesture, messi_gesture) {
            let result = ""
            if (my_gesture == "rock") {
                if (messi_gesture == "paper") {
                    messiWinRound += 1
                    result = "本回合梅西赢了！"
                } else if (messi_gesture == "scissor") {
                    myWinRound += 1
                    result = "本回合俺赢了！"
                } else {
                    result = "本回合平局！"
                }
            } else if (my_gesture == "scissor") {
                if (messi_gesture == "paper") {
                    myWinRound += 1
                    result = "本回合俺赢了！"
                } else if (messi_gesture == "scissor") {
                    result = "本回合平局！"
                } else {
                    messiWinRound += 1
                    result = "本回合梅西赢了！"
                }
            } else {
                if (messi_gesture == "paper") {
                    result = "本回合平局！"
                } else if (messi_gesture == "scissor") {
                    messiWinRound += 1
                    result = "本回合梅西赢了！"
                } else {
                    myWinRound += 1
                    result = "本回合俺赢了！"
                }
            }
            return result
        }
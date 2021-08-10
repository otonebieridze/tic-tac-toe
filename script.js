let errorMessage = document.getElementById("errorMessage");
let container = document.getElementById("container");
let box = document.getElementById("box");
let StartBtn = document.getElementById("startBtn");
let Player1Txt = document.getElementById("player1Txt");
let Player2Txt = document.getElementById("player2Txt");
let Btn = document.querySelectorAll(".btn");
let Flag1 = 0;
let Flag2Counter = 0;
let Flag3 = 0;
let Flag4 = 0;

StartBtn.addEventListener("click", function() {
    if (Flag4 == 0) {
        var PlayerInp1 = document.getElementById("playerInp1");
        var PlayerInp2 = document.getElementById("playerInp2");
        if (PlayerInp1.value == "" || PlayerInp2.value == "") {
            errorMessage.style.color = "red";
            errorMessage.textContent = "Error, Enter Name!";
        } else {
            Flag4 = 1;
            errorMessage.textContent = "";
            Player1Txt.textContent = PlayerInp1.value;
            Player2Txt.textContent = PlayerInp2.value;

            Player2Txt.style.opacity = 0.3;
            
            container.style.display = 'none';
            box.style.display = 'inherit';

            //
            Btn.forEach(o => {
                o.addEventListener("click", function() {
                    if (Flag3 == 0) {
                        if (Flag1 == 0) {
                            if (this.textContent == "") {
                                this.textContent = "X";
                                Player1Txt.style.opacity = 0.3;
                                Player2Txt.style.opacity = 1;
                                Flag2Counter++;
                                Flag1 = 1;
                            }
                        } else {
                            if (this.textContent == "") {
                                this.textContent = "0";
                                Player1Txt.style.opacity = 1;
                                Player2Txt.style.opacity = 0.3;
                                Flag2Counter++;
                                Flag1 = 0;
                            }
                        }

                        var Flag2 = 0;

                        var Counter1 = 0;
                        for (var i = 0; i < 2; i++) {
                            if (Btn[i].textContent == Btn[i+1].textContent && Btn[i].textContent != "") {
                                Counter1++;
                                if (Counter1 == 2) {
                                    errorMessage.style.color = "green";
                                    if (Player1Txt.style.opacity == 0.3) {
                                        errorMessage.textContent = Player1Txt.textContent + " is Winner";
                                    } else {
                                        errorMessage.textContent = Player2Txt.textContent + " is Winner";
                                    }
                                    Player1Txt.style.opacity = 0.3;
                                    Player2Txt.style.opacity = 0.3;
                                    Flag3 = 1;
                                    setTimeout(() => window.location.reload(), 2000);
                                    Flag2 = 1;
                                }
                            }
                        }

                        var Counter2 = 0;
                        for (var i = 3; i < 5; i++) {
                            if (Btn[i].textContent == Btn[i+1].textContent && Btn[i].textContent != "") {
                                Counter2++;
                                if (Counter2 == 2) {
                                    errorMessage.style.color = "green";
                                    if (Player1Txt.style.opacity == 0.3) {
                                        errorMessage.textContent = Player1Txt.textContent + " is Winner";
                                    } else {
                                        errorMessage.textContent = Player2Txt.textContent + " is Winner";
                                    }
                                    Player1Txt.style.opacity = 0.3;
                                    Player2Txt.style.opacity = 0.3;
                                    Flag3 = 1;
                                    setTimeout(() => window.location.reload(), 2000);
                                    Flag2 = 1;
                                }
                            }
                        }

                        var Counter3 = 0;
                        for (var i = 6; i < 8; i++) {
                            if (Btn[i].textContent == Btn[i+1].textContent && Btn[i].textContent != "") {
                                Counter3++;
                                if (Counter3 == 2) {
                                    errorMessage.style.color = "green";
                                    if (Player1Txt.style.opacity == 0.3) {
                                        errorMessage.textContent = Player1Txt.textContent + " is Winner";
                                    } else {
                                        errorMessage.textContent = Player2Txt.textContent + " is Winner";
                                    }
                                    Player1Txt.style.opacity = 0.3;
                                    Player2Txt.style.opacity = 0.3;
                                    Flag3 = 1;
                                    setTimeout(() => window.location.reload(), 2000);
                                    Flag2 = 1;
                                }
                            }
                        }

                        var Counter4 = 0;
                        for (var i = 0; i < 6; i += 3) {
                            if (Btn[i].textContent == Btn[i + 3].textContent && Btn[i].textContent != "") {
                                Counter4++;
                                if (Counter4 == 2) {
                                    errorMessage.style.color = "green";
                                    if (Player1Txt.style.opacity == 0.3) {
                                        errorMessage.textContent = Player1Txt.textContent + " is Winner";
                                    } else {
                                        errorMessage.textContent = Player2Txt.textContent + " is Winner";
                                    }
                                    Player1Txt.style.opacity = 0.3;
                                    Player2Txt.style.opacity = 0.3;
                                    Flag3 = 1;
                                    setTimeout(() => window.location.reload(), 2000);
                                    Flag2 = 1;
                                }
                            }
                        }

                        var Counter5 = 0;
                        for (var i = 1; i < 7; i += 3) {
                            if (Btn[i].textContent == Btn[i + 3].textContent && Btn[i].textContent != "") {
                                Counter5++;
                                if (Counter5 == 2) {
                                    errorMessage.style.color = "green";
                                    if (Player1Txt.style.opacity == 0.3) {
                                        errorMessage.textContent = Player1Txt.textContent + " is Winner";
                                    } else {
                                        errorMessage.textContent = Player2Txt.textContent + " is Winner";
                                    }
                                    Player1Txt.style.opacity = 0.3;
                                    Player2Txt.style.opacity = 0.3;
                                    Flag3 = 1;
                                    setTimeout(() => window.location.reload(), 2000);
                                    Flag2 = 1;
                                }
                            }
                        }

                        var Counter6 = 0;
                        for (var i = 2; i < 8; i += 3) {
                            if (Btn[i].textContent == Btn[i + 3].textContent && Btn[i].textContent != "") {
                                Counter6++;
                                if (Counter6 == 2) {
                                    errorMessage.style.color = "green";
                                    if (Player1Txt.style.opacity == 0.3) {
                                        errorMessage.textContent = Player1Txt.textContent + " is Winner";
                                    } else {
                                        errorMessage.textContent = Player2Txt.textContent + " is Winner";
                                    }
                                    Player1Txt.style.opacity = 0.3;
                                    Player2Txt.style.opacity = 0.3;
                                    Flag3 = 1;
                                    setTimeout(() => window.location.reload(), 2000);
                                    Flag2 = 1;
                                }
                            }
                        }

                        var Counter7 = 0;
                        for (var i = 0; i < 8; i += 4) {
                            if (Btn[i].textContent == Btn[i + 4].textContent && Btn[i].textContent != "") {
                                Counter7++;
                                if (Counter7 == 2) {
                                    errorMessage.style.color = "green";
                                    if (Player1Txt.style.opacity == 0.3) {
                                        errorMessage.textContent = Player1Txt.textContent + " is Winner";
                                    } else {
                                        errorMessage.textContent = Player2Txt.textContent + " is Winner";
                                    }
                                    Player1Txt.style.opacity = 0.3;
                                    Player2Txt.style.opacity = 0.3;
                                    Flag3 = 1;
                                    setTimeout(() => window.location.reload(), 2000);
                                    Flag2 = 1;
                                }
                            }
                        }

                        var Counter8 = 0;
                        for (var i = 2; i < 6; i += 2) {
                            if (Btn[i].textContent == Btn[i + 2].textContent && Btn[i].textContent != "") {
                                Counter8++;
                                if (Counter8 == 2) {
                                    errorMessage.style.color = "green";
                                    if (Player1Txt.style.opacity == 0.3) {
                                        errorMessage.textContent = Player1Txt.textContent + " is Winner";
                                    } else {
                                        errorMessage.textContent = Player2Txt.textContent + " is Winner";
                                    }
                                    Player1Txt.style.opacity = 0.3;
                                    Player2Txt.style.opacity = 0.3;
                                    Flag3 = 1;
                                    setTimeout(() => window.location.reload(), 2000);
                                    Flag2 = 1;
                                }
                            }
                        }

                        if (Flag2Counter == 9 && Flag2 == 0) {
                            errorMessage.style.color = "gold";
                            errorMessage.textContent = "Tied!";
                            Player1Txt.style.opacity = 0.3;
                            Player2Txt.style.opacity = 0.3;
                            Flag3 = 1;
                            setTimeout(() => window.location.reload(), 2000);
                        }
                    }
                });
            });
        }
    }
});
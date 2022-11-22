function parouimp(num) {
    if (num%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
 let res = parouimp(11)

 console.log(`O numero que voce digitou é ${res}`)
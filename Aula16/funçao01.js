function parouimp (n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parouimp(10)

console.log(res)
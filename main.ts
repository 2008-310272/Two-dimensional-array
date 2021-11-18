let list = [
[
0,
1,
0,
1,
0
],
[
1,
1,
1,
0,
1
],
[
1,
1,
1,
1,
1
],
[
1,
1,
1,
1,
0
],
[
50,
100,
150,
200,
250
]
]
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        if (list[y][x] == 1) {
            led.plot(x, y)
        } else {
            led.plotBrightness(x, y, list[y][x])
        }
    }
}
basic.forever(function () {
	
})

n = 50;
m = n;
center = Math.floor(n / 2);

for (i = 1; i <= n; i++) {
    for (j = 1; j <= m; j++) {
        if (i <= j && i <= center && j <= center || i + j > n + 1) {
            document.write('0 ');
        } else {
            document.write('1 ');
        }
    }

    document.write('<br>')
}


function getPrimes(maxNum) {
    var sieve = [], i, j, primes = [1];
    for (i = 2; i <= maxNum; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= maxNum; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
console.log(getPrimes(100));
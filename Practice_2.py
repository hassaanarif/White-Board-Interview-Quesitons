def divisors(integer):
    resultantArray = []
    for i in range(2, integer - 1):
        if (integer % i) == 0:
            resultantArray.append(i)

    if not resultantArray:
        return "{} is prime".format(integer)

    return resultantArray


print(divisors(11))

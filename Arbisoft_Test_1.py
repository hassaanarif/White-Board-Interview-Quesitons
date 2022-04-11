from os import replace
import math
import sys

filename = sys.argv[1]
file = open("{}".format(filename), "r")
read = file.read().split(" ")
fileRead = []
charLength = 0
count = 0
comparisonValue = int(read[1])

finalArray = []

for names in range(2, len(read)):
    strippedInput = read[names].strip('\n').replace('\n', " ")
    fileRead.append(strippedInput)
    charLength += len(strippedInput)

for names in fileRead:
    x = names.split(" ")
    for y in x:
        finalArray.append(y)


avgLength = math.ceil(charLength / len(strippedInput))


for i in finalArray:
    if len(i) == avgLength or len(i) - avgLength == 2 or len(i) - avgLength == -2 or len(i) - avgLength == 1 or len(i) - avgLength == -1:
        count += 1


if count == comparisonValue:
    sys.stdout.write("Yes")
else:
    sys.stdout.write("No")

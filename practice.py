def duplicate_encode(word=""):
    output = ""
    lookupMap = {}
    initialValue = 1
    for char in word:
        character = char.lower()
        if not lookupMap.get(character):
            lookupMap.update({character: initialValue})
        else:
            charValue = lookupMap.get(character)
            lookupMap.update({character: charValue + 1})

    for char in word:
        if lookupMap.get(char) == 1:
            output += "("
        else:
            output += ")"

    return output


print(duplicate_encode("Hassaan"))

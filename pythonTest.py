def fizzBuzz(n):
    # Write your code here
    for i in range(1, n+1):
        if (i % 3 == 0 and i % 5 == 0):
            print("FizzBuzz") 
        elif (i % 3 == 0):
            print("Fizz") 
        elif (i % 5 == 0):
            print("Buzz") 
        else:
            print(i)

# fizzBuzz(15)

def maxIndex(steps, badIndex):
    # Write your code here
    currentIndex = 0
    for j in range(1, steps+1):
        
        if (currentIndex + j != badIndex):
            currentIndex += j
        else:
            currentIndex += j-1
    print(currentIndex)
    return currentIndex

# maxIndex(3,3)
def rearrangeWord(word):
    # Pattern looks like swapping 2 adjacent letters starting from the back
    for i in range(len(word)-1, 0, -1):
        adjustedWord = list(word)
        adjustedWord[i], adjustedWord[i-1] = word[i-1], word[i]
        adjustedWord = ''.join(adjustedWord)
        if (adjustedWord > word):
            return adjustedWord
    return 'no answer'

def toString(List): 
    return ''.join(List) 
permutations = []
def permute(a, l, r): 
    if l == r: 
        permutations.append(toString(a))
    else: 
        for i in range(l, r): 
            a[l], a[i] = a[i], a[l] 
            permute(a, l+1, r) 
            a[l], a[i] = a[i], a[l]  # backtrack 
  
  
string = "irsntmlpof"
n = len(string) 
a = list(string) 
  
permute(a, 0, n) 
print(permutations)

# test = 'test'
# test[1] = 'a'
# print(test)

# sefenvpkii
# peocjhezrptblsiswbirnerdwrmoodgmicugfdyqg
# irsntmlpof
n=int(input())
li= list(map(int,input().split()))

def prime(x):
    if x == 1:
        return False
    for i in range(2,x):
        if x % i == 0:
            return False
    return True

for i in li:
    tmp = int(str(i)[::-1])

    if prime(tmp):
        print(tmp,end=' ')

# https://injekim97.tistory.com/513
# https://freedeveloper.tistory.com/391
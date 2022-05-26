n=int(input())
a=list(map(int, input().split()))
def digit_sum(x):
    sum=0
    while x>0:
        sum+=x%10
        x=x//10
    return sum

res=0
max=-2147000000
for x in a:
    tot=digit_sum(x)
    if tot>=max:
        if tot == max:
            if x > tot:
                max = x
            else:
                max = tot
        else:
             max=tot
        res=x
print(res)

# https://velog.io/@jiffydev/algo-6
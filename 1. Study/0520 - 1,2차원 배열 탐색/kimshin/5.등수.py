n=int(input())
a=list(map(int,input().split()))
m=[1]*n

for i in range(n):
    for j in range(n):
        if a[j] > a[i]:
            m[i]+=1
print(*m)

# https://www.acmicpc.net/problem/7568
n=int(input())
li=list(map(int,input().split()))
ans=[]
n=li[0]
ans.append(n)

for i in range(1,len(li)-1):
    if li[i] < li[i+1]:
        ans.append(li[i+1])

print(*ans)
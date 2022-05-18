n=int(input())
li=list(map(int,input().split()))

cnt=1


for i in range(1,len(li)-1):
    if li[i] < li[i+1]:
       cnt+=1

print(cnt)
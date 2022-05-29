a=int(input())
li1=list(map(int,input().split()))
b=int(input())
li2=list(map(int,input().split()))
tot=[]

for i in range(b):
    if li2[i]  in li1:
        tot.append(li2[i])
tot.sort()
print(*tot)
a=int(input())
li1=list(map(int,input().split()))
b=int(input())
li2=list(map(int,input().split()))
tot=[]
for i in range(a):
    tot.append(li1[i])
for i in range(b):
    tot.append(li2[i])
tot.sort()
print(*tot)
# 4.
n=int(input())
li=[]
b=[]
for _ in range(n):
    a=input()
    li.append(a)

print(max(li,key=len))
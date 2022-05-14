n=int(input())
li=[]
for i in range(n):
    a=input()
    li.append(a)
m=[]
for i in li:
    if i not in m:
        m.append(i)
print('')
for i in m:
    print(i)
n=int(input())
li=[]
for _ in range(n):
    a=list(map(int,input().split()))
    li.append(a)
print(li)
m=-100000
for i in range(n):
    r=l=0
    for j in range(n):
        r+=li[i][j]
        l+=li[j][i]

    m=max(r,l,m)
r=l=0
for i in range(n):
    r+=li[i][i]
    l+=li[i][n-i-1]

    m=max(r,l,m)
print(m)
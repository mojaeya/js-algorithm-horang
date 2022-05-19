n=int(input())

li=[]
for _ in range(n):
    a=list(map(int,input()))
    li.append(a)

li.insert(0,[0]*n)
li.append([0]*n)

for x in li:
    x.insert(0,0)
    x.append(0)

cnt=0
for i in range(1,n+1):
    for j in range(1,n+1):
        if li[i][j] > li[i-1][j] and li[i][j] > li[i][j+1] and li[i][j] > li[i+1][j] and li[i][j] > li[i][j-1]:
            cnt+=1
        else:
            continue
print(cnt)
a,b=map(str,input().split())
cnt=0
m=0
for i in range(int(a)):
    if int(b[i]) == 1:
        m+=1
        cnt+=m
    else:
        m=0
print(cnt)
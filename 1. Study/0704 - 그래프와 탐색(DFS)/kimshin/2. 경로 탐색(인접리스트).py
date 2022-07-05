def DFS(v):
    global cnt
    if v==n:
        cnt+=1
    else:
        for nv in g[v]:
            if ch[nv]==0:
                ch[nv]=1
                DFS(nv)
                ch[nv]=0
           

n, m=map(int, input().split())
g=[[] for _ in range(n+1)]
ch=[0]*(n+1)
for i in range(m):
    a, b=map(int, input().split())
    g[a].append(b)
cnt=0
ch[1]=1
DFS(1)
print(cnt)
def DFS(L,s,time) : # level,점수,시간
    global res
    if time>m :
        return
    if L==n :
        if s>res:
            res=s
    else : #두가지 경우로 나뉜다. 문제를 푸는 경우와 풀지 않는 경우
        DFS(L+1, s+pv[L] , time+pt[L]) 
        DFS(L+1, s, time)

n, m = map(int, input().split())
pv =list() # 점수
pt=list() # 시간
for i in range(n) :
    a,b = map(int, input().split())
    pv.append(a)
    pt.append(b)
res=-1 # 답
DFS(0,0,0)
print(res)
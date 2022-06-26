def DFS(L,sum):
    if L==n:
        if sum == (total-sum):
            print('YES')
            exit(0)
    else:
        DFS(L+1,sum+a[L]) # 사용
        DFS(L+1,sum) # 사용x

n=int(input())
a=list(map(int, input().split()))
total=sum(a)
DFS(0,0)
print('NO')
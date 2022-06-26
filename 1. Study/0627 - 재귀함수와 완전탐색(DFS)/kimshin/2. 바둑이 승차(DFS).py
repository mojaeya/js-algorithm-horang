def DFS(L,sum,tsum): # tsum은 판단된값들의합
    if L == n: # 부분집합 완성
        global result
        if sum+(total-tsum) < result: # 오른쪽은 지금까지 경우의 수 만든 바둑이 무게의 합
            return # 앞으로적용해야할 값의합이 현재의 값의합보다 작으면 할필요가없으므로 종료
        if sum>c:
            return
        if sum > result:
            # 그대로쓰면 local이라서안됨 -> global이용
            result = sum
    else:
        DFS(L+1,sum+a[L],tsum+a[L])
        DFS(L+1,sum,tsum+a[L])

c,n = map(int, input().split())
a=[0] * n
result = -212312312312
for i in range(n):
    a[i] = int(input())
total=sum(a)
DFS(0,0,0)
print(result)
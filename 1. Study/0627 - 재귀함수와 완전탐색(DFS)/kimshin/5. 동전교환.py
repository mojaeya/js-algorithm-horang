def DFS(L, sum):                        # Level, sum
    global res                          # 전역변수
    if L > res:                         # Cut-Edge
        return
    if sum > m:                         # Cut-Edge
        return
    if sum == m:
        if L < res:
            res = L
    else:
        for i in range(n):              # for문이므로 종료조건 필요없음
            DFS(L+1, sum+a[i])


n = int(input())
a = list(map(int, input().split()))
m = int(input())
res = 2174000000
a.sort(reverse=True)
DFS(0, 0)
print(res)
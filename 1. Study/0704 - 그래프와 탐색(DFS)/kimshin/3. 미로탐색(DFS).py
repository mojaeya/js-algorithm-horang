arr = [list(map(int, input().split())) for _ in range(7)]
cnt = 0
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
arr[0][0] = 1

def dfs(x, y):
    global cnt
    if x == 6 and y == 6:
        cnt += 1
        return
    else:
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < 7 and 0 <= ny < 7 and arr[nx][ny] == 0:
                arr[nx][ny] = 1
                dfs(nx, ny)
                arr[nx][ny] = 0

dfs(0, 0)
print(cnt)
n=int(input())
arr=list(map(int,input().split()))

answer=[]
newarr=sorted(arr)

for i in range(len(arr)):
    if arr[i] != newarr[i]:
        answer.append(i+1)
print(*answer)
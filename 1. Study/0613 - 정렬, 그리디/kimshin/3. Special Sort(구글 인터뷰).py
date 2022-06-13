n = int(input())
arr=list(map(int,input().split()))

for i in range(n-1):
    for j in range(n-1):
        if arr[j] > 0 and arr[j+1] < 0:
            arr[j],arr[j+1] = arr[j+1],arr[j]
print(arr)
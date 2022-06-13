n=int(input())
arr=list(map(int,input().split()))

for i in range(n):
    min_index = i
    for j in range(i+1,len(arr)):
        if arr[min_index] > arr[j]:
            min_index = j
    arr[i] , arr[min_index] = arr[min_index] , arr[i]
print(arr)
def sol(k,arr):
    answer=0
    sum=0
    for i in range(k):
        sum += arr[i]
    answer=sum
    for j in range(k,len(arr)):
        sum += arr[j] - arr[j-k]
        answer = max(answer,sum)
    return answer


a=[12,15,11,20,25,10,20,19,13,15]
print(sol(3,a))
def sol(m,arr):
    answer=0
    sum=0
    lt=0
    for rt in range(len(arr)):
        sum+=arr[rt]

        while(sum>m):
            lt+=1
            sum-=arr[lt]
            # if sum == m: answer+=1
        answer+=rt-lt+1
    return answer

a=[1,3,1,2,3]
print(sol(5,a))

# ??
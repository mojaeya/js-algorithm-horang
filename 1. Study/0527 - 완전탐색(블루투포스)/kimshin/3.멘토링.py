def sol(test):
    answer=0
    m=len(test)
    n=len(test[0])

    for i in range(1,n+1):
        for j in range(1,n+1):
            # print(i,j)
            cnt=0
            for k in range(m):
                pi=pj=0
                for s in range(n):
                    if test[k][s] == i:
                        pi=s
                    if test[k][s] == j:
                        pj = s
                if pi < pj:
                    cnt+=1
            if cnt ==m:
                answer+=1
    return answer



arr=[[3,4,1,2],[4,3,2,1],[3,1,4,2]]
print(sol(arr))
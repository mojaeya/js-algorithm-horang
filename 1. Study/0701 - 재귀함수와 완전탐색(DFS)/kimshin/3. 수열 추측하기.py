from itertools import permutations, combinations

n,f=map(int,input().split())
lst=[i for i in range(1,n+1)]
p=permutations(lst,n)
p=list(p)
c=[]
for i in range(n+1):
    comb=list(combinations(range(n-1),i))
    c.append(len(comb))

for i in range(len(p)):
    res=0
    for j in range(n):
        res+=p[i][j]*c[j]
    if res==f:
        break
for j in p[i]:
    print(j, end=' ')

from itertools import combinations

n,m=map(int, input().split())
print(len(list(combinations(range(1,n+1), m))))
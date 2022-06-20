n = int(input())

arr = []

for i in range(n):
    [a,b]=map(int,input().split())
    arr.append([a,b])
array = sorted(arr)

print('')
for i in range(n):
    print(array[i][0],array[i][1])
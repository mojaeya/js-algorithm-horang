n=int(input())

a=list(map(str,input().split()))
b=list(map(str,input().split()))
a=a[0]
b=b[0]
for i in range(n):
    if int(a[i]) == int(b[i]):
        print('D')
    elif int(a[i]) == 3 and int(b[i]) ==1:
        print('B')
    elif int(a[i]) ==1 and int(b[i]) == 3:
        print('A')
    elif a[i]>b[i]:
        print('A')
    else:
        print('B')

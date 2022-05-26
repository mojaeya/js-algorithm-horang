a,b=list(map(int, input().split()))
li= list(map(int, input().split()))
set_li=set()
for i in range(a-2):
    for j in range(i+1,a-1):
        for k in range(j+1,a):
            set_li.add(li[i]+li[j]+li[k])
set_li=list(set_li)
set_li.sort(reverse=True)
print(set_li)
print(set_li[b-1])
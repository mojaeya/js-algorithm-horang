a=input()

stack=[]
cnt=0
for x in range(len(a)):
    if a[x] == '(':
        stack.append(a[x])
    else:
        if a[x-1] == '(':
            stack.pop()
            cnt+=len(stack)
        else:
            cnt+=1
print(cnt)
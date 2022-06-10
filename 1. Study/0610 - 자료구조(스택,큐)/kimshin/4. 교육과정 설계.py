from collections import deque

need=input()
n=int(input())
for i in range(n):
    plan = input()
    dq=deque(need)
    for x in plan:
        if x in dq:
            if x != dq.popleft():
                print('NO ',format(i+1))
                break
    else:
        if len(dq) == 0:
            print('YES',format(i+1))
        else:
            print('NO',format(i+1))
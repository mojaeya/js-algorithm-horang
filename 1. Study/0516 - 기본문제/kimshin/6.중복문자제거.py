# n=list(map(str,input().split()))
# li=[]
# for i in n[0]:
#     li.append(i)

# m=[]
# for i in li:
#     if i not in m:
#         m.append(i)
# print(''.join(m))
n=input()
print(''.join(dict.fromkeys(n)))

# https://velog.io/@jaylnne/python-%ED%8C%8C%EC%9D%B4%EC%8D%AC-dict.fromkeys-%EB%94%95%EC%85%94%EB%84%88%EB%A6%AC-%EC%83%9D%EC%84%B1-%EB%A9%94%EC%86%8C%EB%93%9C-%EC%A0%95%EB%A6%AC
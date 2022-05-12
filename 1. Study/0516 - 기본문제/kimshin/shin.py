# 1.
# n=input()
# a=''

# for i in n:
#     if i == 'A':
#         a+='#'
#     else:
#         a+=i
# print(a)

# 2.
# n=input()
# a=input()
# cnt=0

# for i in n:
#     if a == i:
#         cnt+=1
# print(cnt)

# 4.
# n=int(input())
# li=[]
# b=[]
# for _ in range(n):
#     a=input()
#     li.append(a)

# print(max(li,key=len))

n=input()
print(''.join(dict.fromkeys(n)))
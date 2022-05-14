# 1.
n=input()
a=''

for i in n:
    if i == 'A':
        a+='#'
    else:
        a+=i
print(a)
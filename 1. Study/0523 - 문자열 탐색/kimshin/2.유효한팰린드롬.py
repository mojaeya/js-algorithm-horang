n= input()
li=[]
a=''
for char in n:
    if char.isalnum():
        li.append(char.lower())

# 팰린드롬 판별
while len(li) >1:
    if li.pop(0) != li.pop():
        a='False'
    else:
        a='True'

print(a)